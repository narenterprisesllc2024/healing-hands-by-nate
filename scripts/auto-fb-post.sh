#!/usr/bin/env bash
# auto-fb-post.sh — Schedule a Facebook post to the "Nathaniel Ratcliff LMT"
# page for a just-published blog post.
#
# Usage:  auto-fb-post.sh <slug>
#
# Reads:  content/blog/<slug>.md  (title + excerpt from frontmatter)
# Generates: public/blog-cards/<slug>.png  (via make-fb-card.sh)
# POSTs to: Postiz scheduled posts API, integration = LMT page only,
#           publish time = now + 2 hours (gives Coolify deploy time to land).
#
# Failure mode: any step fails → log + exit 1. Caller (auto-blog.sh) should
# treat FB post failure as non-fatal so the blog publish still counts.

set -euo pipefail

PROJECT=/opt/aionui/projects/healing-hands-by-nate
LOG="$PROJECT/logs/auto-fb-post.log"
SLUG="${1:?slug required (without .md extension)}"
POST_FILE="$PROJECT/content/blog/$SLUG.md"

# Postiz integration ID for the "Nathaniel Ratcliff LMT" Facebook page.
# (Not the personal page, not EBC.)
LMT_INTEGRATION_ID="cmqg6jyco0005qr7gln322c9t"
POSTIZ_BASE="https://postiz.mysoviai.com"

mkdir -p "$PROJECT/logs"
exec >>"$LOG" 2>&1

echo "============================="
echo "[auto-fb-post] $(date -Iseconds) starting · slug=$SLUG"

if [ ! -f "$POST_FILE" ]; then
  echo "[auto-fb-post] FAIL: $POST_FILE not found"
  exit 1
fi

# Pull title + excerpt out of YAML frontmatter (between first two --- lines).
# Quote handling: frontmatter wraps with double-quotes; strip them.
TITLE=$(awk '/^---$/{c++; next} c==1 && /^title:/{
  sub(/^title:[[:space:]]*/,""); gsub(/^"|"$/,""); print; exit
}' "$POST_FILE")
EXCERPT=$(awk '/^---$/{c++; next} c==1 && /^excerpt:/{
  sub(/^excerpt:[[:space:]]*/,""); gsub(/^"|"$/,""); print; exit
}' "$POST_FILE")

if [ -z "$TITLE" ]; then
  echo "[auto-fb-post] FAIL: no title found in frontmatter"
  exit 1
fi
if [ -z "$EXCERPT" ]; then
  # Fall back to description, then to a generic line
  EXCERPT=$(awk '/^---$/{c++; next} c==1 && /^description:/{
    sub(/^description:[[:space:]]*/,""); gsub(/^"|"$/,""); print; exit
  }' "$POST_FILE")
  [ -z "$EXCERPT" ] && EXCERPT="New post on the blog."
fi

URL="https://healinghandsbynate.com/blog/$SLUG"
echo "[auto-fb-post] title:   $TITLE"
echo "[auto-fb-post] excerpt: $EXCERPT"
echo "[auto-fb-post] url:     $URL"

# Generate the branded card
"$PROJECT/scripts/make-fb-card.sh" "$SLUG" "$TITLE"
CARD_URL="https://healinghandsbynate.com/blog-cards/$SLUG.png"

# Compose the Facebook caption — title, blank line, excerpt, blank line, link
CAPTION=$(printf '%s\n\n%s\n\n%s' "$TITLE" "$EXCERPT" "$URL")

# Schedule for 2 hours from now in UTC ISO format
PUBLISH_AT=$(date -u -d "+2 hours" +%Y-%m-%dT%H:%M:%S.000Z)
echo "[auto-fb-post] publish_at: $PUBLISH_AT"

# Resolve Postiz API key
POSTIZ_KEY=$(grep -E "^POSTIZ_API_KEY=" /opt/aionui/.env | cut -d= -f2-)
if [ -z "$POSTIZ_KEY" ]; then
  echo "[auto-fb-post] FAIL: POSTIZ_API_KEY not set in /opt/aionui/.env"
  exit 1
fi

# Build the JSON payload
PAYLOAD=$(python3 -c "
import json, sys, os
payload = {
  'type': 'schedule',
  'date': os.environ['PUBLISH_AT'],
  'posts': [{
    'integration': {'id': os.environ['LMT_INTEGRATION_ID']},
    'value': [{'content': os.environ['CAPTION'], 'image': [{'path': os.environ['CARD_URL']}]}],
    'settings': {}
  }]
}
print(json.dumps(payload))
" CAPTION="$CAPTION" PUBLISH_AT="$PUBLISH_AT" LMT_INTEGRATION_ID="$LMT_INTEGRATION_ID" CARD_URL="$CARD_URL")

echo "[auto-fb-post] payload preview: $(echo "$PAYLOAD" | head -c 300)..."

RESPONSE=$(curl -sS -w "\n__HTTP_CODE__:%{http_code}" \
  -X POST "$POSTIZ_BASE/api/public/v1/posts" \
  -H "Authorization: $POSTIZ_KEY" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD" 2>&1)

HTTP_CODE=$(echo "$RESPONSE" | tail -1 | sed 's/.*__HTTP_CODE__://')
BODY=$(echo "$RESPONSE" | sed '$d')

echo "[auto-fb-post] http: $HTTP_CODE"
echo "[auto-fb-post] body: $BODY"

if [[ "$HTTP_CODE" =~ ^2 ]]; then
  echo "[auto-fb-post] OK · scheduled for $PUBLISH_AT"
  exit 0
else
  echo "[auto-fb-post] FAIL · http=$HTTP_CODE"
  exit 1
fi
