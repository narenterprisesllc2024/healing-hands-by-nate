# Healing Hands By Nate — Automation Wiring

Built 2026-05-22. This file documents how to flip from manual (skill-invoked
from any AionUi conversation) to scheduled-and-automatic.

The skills themselves are already in place and work right now from any
conversation — this file is only for when Nate wants the blog + newsletter
to fire on their own schedule without him asking.

## What runs manually today (works right now)

From any AionUi conversation, Nate can say:

- **"Write the next HHBN blog post"** → invokes `healing-hands-blog-generator`
  → drops a draft at `content/blog/_drafts/<slug>.md` → he reviews → moves
  to `content/blog/<slug>.md` and the site rebuild picks it up.

- **"Draft this week's HHBN newsletter"** → invokes `healing-hands-newsletter`
  → drops `newsletter-drafts/<YYYY-MM-DD>.md` and `.html` → he reviews → uses
  Mautic's UI to schedule the send (or asks me to call the API).

That's the safe baseline. Stay here for the first 4-5 articles + newsletters
to dial in voice. **Only flip on automation after the manual flow has earned
trust.**

## Flip 1 — auto-publish blog drafts (after ~5 reviewed articles)

When Nate trusts the voice enough that drafts should publish without review,
add a flag to the skill invocation:

```
Invoke healing-hands-blog-generator with draft_mode=false
```

This writes directly to `content/blog/<slug>.md` instead of `_drafts/`. The
Next.js build picks up new posts automatically on next deploy (the site is
SSG via `generateStaticParams`).

If you redeploy nightly (via cron + `npm run build && systemctl restart
healing-hands`), articles go live within 24 hours of generation. If you want
faster publish, add a webhook on the file write that kicks the build.

## Flip 2 — schedule the blog generator (cron + n8n)

Recommended cadence: 2-3 articles per week. Tuesday + Friday is a good rhythm
(Tue = mid-week SEO, Fri = paired with the newsletter).

### Option A — bare cron (simplest)

Add to `/etc/cron.d/aionui-hhbn`:

```cron
# Generate a new HHBN blog draft Tuesday + Friday at 6:00 AM Central
0 11 * * 2 aionui /usr/bin/claude --print "Use healing-hands-blog-generator to draft the next pending topic" >> /opt/aionui/projects/healing-hands-by-nate/logs/blog-gen.log 2>&1
0 11 * * 5 aionui /usr/bin/claude --print "Use healing-hands-blog-generator to draft the next pending topic" >> /opt/aionui/projects/healing-hands-by-nate/logs/blog-gen.log 2>&1
```

Note: 11:00 UTC = 6:00 AM Central (during CDT). Adjust to `12 * * * 2,5` if you
want it to track Central time during CST too (or use systemd timers, which
respect TZ).

### Option B — n8n workflow (more visible + retryable)

If you'd rather see the runs in n8n's UI + get failure notifications:

1. Create n8n workflow: `HHBN Blog Generator`
2. Trigger: Schedule node, Tuesday + Friday 6 AM Central (cron expression `0 6 * * 2,5` with TZ America/Chicago)
3. Action: Execute Command node running:
   ```bash
   /usr/bin/claude --print "Use healing-hands-blog-generator to draft the next pending topic" 2>&1
   ```
4. Output → Notification node → Resend email to nate@healinghandsbynate.com with subject "Blog draft ready: <slug>"

## Flip 3 — auto-send the newsletter every Friday

After 4-5 newsletters that Nate's reviewed and approved as-sent, flip the
newsletter to auto:

### Option A — bare cron

```cron
# Generate + send HHBN Five Bullet Friday newsletter every Friday at 9:00 AM Central
0 14 * * 5 aionui /usr/bin/claude --print "Use healing-hands-newsletter with draft_mode=false to generate and send this Friday's newsletter" >> /opt/aionui/projects/healing-hands-by-nate/logs/newsletter.log 2>&1
```

### Option B — n8n workflow (recommended for sends)

Sends are higher-stakes than drafts (an embarrassing typo goes to your entire
list). The two-step n8n pattern adds a confirmation gate:

1. **Tuesday 9 AM:** n8n triggers blog-generator → drafts that week's article
2. **Thursday 9 AM:** n8n triggers newsletter skill in `draft_mode=true` →
   saves HTML + MD draft + emails Nate a link to review
3. **Friday 8:30 AM:** if Nate hasn't replied "DO NOT SEND," n8n triggers
   newsletter again with `draft_mode=false` → calls Mautic broadcast API

This gives Nate ~24 hours to kill a bad newsletter while keeping the default
path automatic.

## Mautic broadcast API call (for newsletter send)

When the skill runs with `draft_mode=false`, it needs to call Mautic's API.
Pseudo-code for the send driver (live driver to be written when Nate activates):

```bash
#!/usr/bin/env bash
# /opt/aionui/projects/healing-hands-by-nate/scripts/send-newsletter.sh
# Sends a Mautic broadcast for the dated newsletter draft.

set -euo pipefail

DATE="${1:?usage: send-newsletter.sh YYYY-MM-DD}"
DRAFT_DIR=/opt/aionui/projects/healing-hands-by-nate/newsletter-drafts
HTML="$DRAFT_DIR/$DATE.html"
SUBJECT=$(awk '/^subject:/{sub(/^subject: /,""); gsub(/"/,""); print; exit}' "$DRAFT_DIR/$DATE.md")
KEYS=/opt/aionui/.claude/skills/api-keys-resolver/scripts/get-key.sh

MAUTIC_URL=$(bash "$KEYS" MAUTIC_API_URL)
MAUTIC_USER=$(bash "$KEYS" MAUTIC_API_USER)
MAUTIC_PASS=$(bash "$KEYS" MAUTIC_API_PASS)
SEGMENT_ID=$(bash "$KEYS" MAUTIC_SEGMENT_ID)

# 1) Create the email
EMAIL_ID=$(curl -s -u "$MAUTIC_USER:$MAUTIC_PASS" "$MAUTIC_URL/api/emails/new" \
  --data-urlencode "name=HHBN $DATE" \
  --data-urlencode "subject=$SUBJECT" \
  --data-urlencode "fromAddress=nate@healinghandsbynate.com" \
  --data-urlencode "fromName=Nate" \
  --data-urlencode "replyToAddress=nate@healinghandsbynate.com" \
  --data-urlencode "customHtml@$HTML" \
  --data-urlencode "emailType=list" \
  --data-urlencode "lists[]=$SEGMENT_ID" | jq -r '.email.id')

# 2) Send it
curl -s -u "$MAUTIC_USER:$MAUTIC_PASS" -X POST "$MAUTIC_URL/api/emails/$EMAIL_ID/send"

echo "Sent newsletter $DATE (Mautic email_id=$EMAIL_ID)"
```

⚠️ **Test this script with a test segment first**, not the live list, until
Nate's confirmed the Mautic config matches what's deployed.

## Where everything lives

| Asset | Path |
|---|---|
| Topic queue | `content/_topic-queue.yaml` |
| Blog drafts | `content/blog/_drafts/<slug>.md` |
| Published blog | `content/blog/<slug>.md` |
| Newsletter drafts | `newsletter-drafts/<YYYY-MM-DD>.{md,html}` |
| Blog skill | `/opt/aionui/.claude/skills/healing-hands-blog-generator/SKILL.md` |
| Newsletter skill | `/opt/aionui/.claude/skills/healing-hands-newsletter/SKILL.md` |
| Send driver (when written) | `scripts/send-newsletter.sh` |
| Site config / NAP | `src/lib/site.ts` |
| Schema | `src/lib/seo.ts` (`localBusinessSchema`, `faqSchema`, `serviceSchema`) |
| Blog template | `src/app/blog/[slug]/page.tsx` |
| Booking CTA | `src/components/BookingCTA.tsx` |
| Mautic lib | `src/lib/mautic.ts` |

## When to upgrade beyond this

- **Hit 20 topics in the queue:** Generate more via the skill itself or via
  `seo-keywords` skill against the live site to find new gaps.
- **List grows past 500 subscribers:** Add segmentation in Mautic (e.g.,
  by service interest) so newsletters can be lightly personalized.
- **Articles start ranking:** Add a "related posts" component at the bottom
  of `[slug]/page.tsx` to cross-link the cluster — boosts dwell time + SEO.
- **Reviews start coming in:** Wire `review-management` skill to auto-respond
  per the `reputation-respond` skill, then add review schema to the homepage.
