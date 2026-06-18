---
tier: free
type: welcome_email
trigger: new free-tier subscriber (Friday Five)
delivery: Mautic (existing automation) or Ghost native
status: draft
---

## Subject line options
- Welcome to Friday Five — here's what's coming
- You're in. Friday Five — one short email each week.
- Welcome from Nate — here's how this works

## From
- From name: Nate
- From email: nate@healinghandsbynate.com (or current sender)
- Reply-to: nate@healinghandsbynate.com

## Preview text
Five short bullets every Friday. A move, a tool, a nugget, a practice, a seasonal note. Nothing else.

---

## Body

Hey —

You signed up for Friday Five. Here's what that means.

**Every Friday, you get one short email.** Five bullets. A move, a tool, a nugget, a practice, a seasonal note. Always practical. Always something you can actually use. Always short.

I'm Nate — licensed massage therapist in Union, Missouri. After 12+ years on the table, I've seen the same patterns over and over. Friday Five is the distilled version — the stuff I'd write on the back of a card after your session, sent to you weekly.

You'll also get the occasional Journal post when something's worth saying. Never more than once or twice a week. Always optional reading.

If you ever want to unsubscribe, the link's at the bottom of every email. No hard feelings.

**A couple things worth knowing about as a Friday Five subscriber:**

If at some point you want more than the weekly bullets — modules and workbooks and seasonal protocols — the paid membership is at [healinghandsbynate.com/membership](https://healinghandsbynate.com/membership). Three tiers, $9/mo to $39/mo. No pressure.

If your body is bothering you in a way that feels like more than between-sessions care, [book a session](https://www.vagaro.com/essencesalonandspallc/services). Massage therapy, Reiki, life coaching. Union, MO.

Talk Friday.

— Nate

*Nate Ratcliff, LMT · Healing Hands By Nate · Union, MO*
*[healinghandsbynate.com](https://healinghandsbynate.com)*

---

## Notes for implementation
- Plain-text version should be auto-generated from this; HTML version uses the existing Mautic template styling
- Send immediately on subscribe (no delay)
- Add subscriber to "HHBN Friday Five" segment (id=2 per existing automation)
- After this welcome, the regular Friday cron handles ongoing delivery
