#!/usr/bin/env bash
# auto-newsletter.sh — Friday morning cron entry. Generates this week's
# Five Bullet Friday newsletter draft via the healing-hands-newsletter
# skill, then calls send-newsletter.sh to broadcast via Mautic.
#
# Run as the aionui user.

set -euo pipefail

PROJECT=/opt/aionui/projects/healing-hands-by-nate
LOG="$PROJECT/logs/auto-newsletter.log"
mkdir -p "$PROJECT/logs"
cd "$PROJECT"
exec >>"$LOG" 2>&1

DATE=$(TZ=America/Chicago date +%Y-%m-%d)
echo "============================="
echo "[auto-newsletter] $(date -Iseconds) generating + sending for $DATE"

# 1. Generate the draft via the skill (writes both .md and .html)
SKILL_OUTPUT=$(/opt/aionui/projects/claude-account-rotator/scripts/claude-wrapper.sh \
  --print --output-format=text --permission-mode=acceptEdits \
  "Use the healing-hands-newsletter skill to generate this Friday's Five Bullet Friday newsletter (send_date=$DATE). Set draft_mode=true (we'll handle the send separately). Output only a confirmation line with the subject when done." 2>&1) || {
    echo "[auto-newsletter] skill invocation FAILED:"
    echo "$SKILL_OUTPUT" | tail -20
    exit 1
}
echo "[auto-newsletter] skill output:"
echo "$SKILL_OUTPUT" | tail -10

# 2. Verify the draft files exist
if [ ! -f "newsletter-drafts/$DATE.html" ] || [ ! -f "newsletter-drafts/$DATE.md" ]; then
  echo "[auto-newsletter] ERROR: expected newsletter-drafts/$DATE.html + .md after skill — not found"
  ls newsletter-drafts/ | tail -10
  exit 1
fi

# 3. Send via Mautic
bash scripts/send-newsletter.sh "$DATE"
echo "[auto-newsletter] complete for $DATE"
