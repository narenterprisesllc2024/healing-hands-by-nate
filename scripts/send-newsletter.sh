#!/usr/bin/env bash
# send-newsletter.sh — broadcast a dated newsletter draft via Mautic.
#
# Usage: ./send-newsletter.sh YYYY-MM-DD
#
# Reads newsletter-drafts/<DATE>.html + .md, creates a Mautic email asset
# pointed at the configured segment, then triggers the send. Never echoes
# credentials to logs.

set -euo pipefail

DATE="${1:?usage: send-newsletter.sh YYYY-MM-DD}"
PROJECT=/opt/aionui/projects/healing-hands-by-nate
HTML="$PROJECT/newsletter-drafts/$DATE.html"
MD="$PROJECT/newsletter-drafts/$DATE.md"
LOG="$PROJECT/logs/newsletter-send.log"
mkdir -p "$PROJECT/logs"
exec >>"$LOG" 2>&1

echo "============================="
echo "[send-newsletter] $(date -Iseconds) sending $DATE"

[ -f "$HTML" ] || { echo "[send-newsletter] ERROR: $HTML missing"; exit 1; }
[ -f "$MD" ]   || { echo "[send-newsletter] ERROR: $MD missing"; exit 1; }

SUBJECT=$(awk '/^subject:/{sub(/^subject: "?/,""); gsub(/"$/,""); print; exit}' "$MD")
[ -n "$SUBJECT" ] || { echo "[send-newsletter] ERROR: no subject in $MD frontmatter"; exit 1; }

# Resolve credentials at runtime
KEYS=/opt/aionui/.claude/skills/api-keys-resolver/scripts/get-key.sh
MAUTIC_URL=$(bash "$KEYS" MAUTIC_API_URL)
MAUTIC_USER=$(bash "$KEYS" MAUTIC_API_USER)
MAUTIC_PASS=$(bash "$KEYS" MAUTIC_API_PASS)

# The Mautic segment ID for the HHBN list (set in /opt/aionui/.env)
SEGMENT_ID="${MAUTIC_HHBN_SEGMENT_ID:-$(grep '^MAUTIC_HHBN_SEGMENT_ID=' /opt/aionui/.env 2>/dev/null | cut -d= -f2-)}"
[ -n "$SEGMENT_ID" ] || SEGMENT_ID="$(grep '^MAUTIC_SEGMENT_ID=' /opt/aionui/.env 2>/dev/null | cut -d= -f2-)"
[ -n "$SEGMENT_ID" ] || { echo "[send-newsletter] ERROR: MAUTIC_HHBN_SEGMENT_ID not configured"; exit 1; }
echo "[send-newsletter] using Mautic segment id=$SEGMENT_ID"

# Load the HTML body (escape for JSON)
HTML_BODY=$(jq -Rs . < "$HTML")

# 1) Create the email asset
echo "[send-newsletter] creating Mautic email asset…"
PAYLOAD=$(jq -n \
  --arg name "HHBN $DATE Five Bullet Friday" \
  --arg subject "$SUBJECT" \
  --arg fromAddr "nate@healinghandsbynate.com" \
  --arg fromName "Nate" \
  --arg replyTo "nate@healinghandsbynate.com" \
  --argjson lists "[$SEGMENT_ID]" \
  --rawfile html "$HTML" \
  '{
    name: $name,
    subject: $subject,
    fromAddress: $fromAddr,
    fromName: $fromName,
    replyToAddress: $replyTo,
    customHtml: $html,
    emailType: "list",
    isPublished: true,
    lists: $lists
  }')

EMAIL_RESP=$(curl -sS -u "$MAUTIC_USER:$MAUTIC_PASS" \
  -X POST "$MAUTIC_URL/emails/new" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

EMAIL_ID=$(echo "$EMAIL_RESP" | jq -r '.email.id // empty')
if [ -z "$EMAIL_ID" ]; then
  echo "[send-newsletter] ERROR: failed to create email asset"
  echo "$EMAIL_RESP" | jq . 2>/dev/null || echo "$EMAIL_RESP" | head -c 500
  exit 1
fi
echo "[send-newsletter] created email asset id=$EMAIL_ID"

# 2) Send to the segment
echo "[send-newsletter] sending…"
SEND_RESP=$(curl -sS -u "$MAUTIC_USER:$MAUTIC_PASS" \
  -X POST "$MAUTIC_URL/emails/$EMAIL_ID/send")
SENT_COUNT=$(echo "$SEND_RESP" | jq -r '.sentCount // .success // empty')
echo "[send-newsletter] send response: $SEND_RESP"
echo "[send-newsletter] DONE sentCount=$SENT_COUNT date=$DATE email_id=$EMAIL_ID"
