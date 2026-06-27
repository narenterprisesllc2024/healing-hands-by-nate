#!/usr/bin/env bash
# auto-blog.sh — cron entry. Generates next pending blog topic, commits, pushes,
# triggers Coolify redeploy. Run as the aionui user.
#
# Flow:
#   1. Invoke healing-hands-blog-generator skill via claude --print (draft_mode=false)
#   2. If a new file appeared in content/blog/, commit + push
#   3. POST to Coolify /deploy endpoint to rebuild the container
#
# Failure mode: any step fails → exit early, log, no commit/push so nothing
# half-broken hits production. Cron sends mail to aionui user on stderr output.

set -euo pipefail

PROJECT=/opt/aionui/projects/healing-hands-by-nate
LOG="$PROJECT/logs/auto-blog.log"
mkdir -p "$PROJECT/logs"

cd "$PROJECT"
exec >>"$LOG" 2>&1

echo "============================="
echo "[auto-blog] $(date -Iseconds) starting"

# Snapshot pre-state so we can detect a new file
BEFORE=$(ls content/blog/*.md 2>/dev/null | sort | md5sum | awk '{print $1}')

# Invoke the skill via the rotator-wrapped claude binary in print mode
SKILL_OUTPUT=$(/opt/aionui/projects/claude-account-rotator/scripts/claude-wrapper.sh \
  --print --output-format=text --permission-mode=acceptEdits \
  "Use the healing-hands-blog-generator skill to draft the next pending topic from /opt/aionui/projects/healing-hands-by-nate/content/_topic-queue.yaml. Set draft_mode=false so it writes directly to content/blog/ instead of _drafts/. Update the queue status to published. Output only a single confirmation line with the slug when done." 2>&1) || {
    echo "[auto-blog] skill invocation FAILED:"
    echo "$SKILL_OUTPUT" | tail -20
    exit 1
}
echo "[auto-blog] skill output:"
echo "$SKILL_OUTPUT" | tail -10

AFTER=$(ls content/blog/*.md 2>/dev/null | sort | md5sum | awk '{print $1}')

if [ "$BEFORE" = "$AFTER" ]; then
  echo "[auto-blog] no new file detected — queue empty or skill produced nothing"
  exit 0
fi

# Find the new file
NEW_FILE=$(git status --short content/blog/ | awk '/^?? content\/blog\/.+\.md$/{print $2; exit}')
if [ -z "$NEW_FILE" ]; then
  echo "[auto-blog] no new tracked file in content/blog/ — nothing to publish"
  exit 0
fi

SLUG=$(basename "$NEW_FILE" .md)
echo "[auto-blog] new article: $SLUG"

# Generate the branded Facebook card so it ships in the same deploy
TITLE=$(awk '/^---$/{c++; next} c==1 && /^title:/{sub(/^title:[[:space:]]*/,""); gsub(/^"|"$/,""); print; exit}' "$NEW_FILE")
if [ -n "$TITLE" ]; then
  "$PROJECT/scripts/make-fb-card.sh" "$SLUG" "$TITLE" || echo "[auto-blog] card gen failed (non-fatal)"
fi

# Commit + push (include blog-cards/ if any new card was generated)
git add content/blog/ content/_topic-queue.yaml
git add public/blog-cards/ 2>/dev/null || true
git commit -m "Auto-publish: $SLUG" >/dev/null
git push origin main

# Trigger Coolify redeploy
COOLIFY_TOKEN=$(bash /opt/aionui/.claude/skills/api-keys-resolver/scripts/get-key.sh COOLIFY_API_TOKEN)
COOLIFY_URL=$(bash /opt/aionui/.claude/skills/api-keys-resolver/scripts/get-key.sh COOLIFY_API_URL)
DEPLOY_RESP=$(curl -fsS -X POST "$COOLIFY_URL/deploy?uuid=j3z7ypop2frhizj7ebj1xbs1&force=false" \
  -H "Authorization: Bearer $COOLIFY_TOKEN")
echo "[auto-blog] coolify deploy response: $DEPLOY_RESP"
echo "[auto-blog] published $SLUG"

# Schedule the Facebook post 2h out (non-fatal — blog publish stands even if FB fails)
"$PROJECT/scripts/auto-fb-post.sh" "$SLUG" || echo "[auto-blog] FB post scheduling failed (non-fatal)"
