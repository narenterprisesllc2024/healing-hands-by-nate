---
type: upsell_email
tier_target: continuity (offering from 30-Day Reset)
trigger: 31 days after 30-Day Reset purchase
delivery: Mautic broadcast triggered by Stripe webhook + delayed send
status: draft
---

## Subject line options
- Day 31 — what's next for your body
- You finished the Reset. Here's the next step.
- 30 days down. Continuity is the next gear.

## From
- From name: Nate
- From email: nate@healinghandsbynate.com
- Reply-to: nate@healinghandsbynate.com

## Preview text
You did 30 days of consistent practice. Here's how to keep the momentum (or not).

---

## Body

Hey —

You finished the 30-Day Reset.

That's worth pausing on. Most people who buy 30-day programs don't finish them. You did. That tells me something about your relationship with your body and your capacity for consistent care.

So today — Day 31 — here's what I'd say if we were sitting across from each other.

**You have three real options. All of them are valid.**

---

**Option 1 — Keep your daily practice. Stop here.**

The Reset is yours to keep. The daily 15-minute practice you built on Day 29 is yours. If you stay consistent with it, you'll maintain the gains you made over the 30 days.

If this is your call — make it deliberately. Print your Day 29 practice list. Put it somewhere you'll see it. Trust the work you've already done.

The Reset was worth what you paid even if you stop here. You have lifelong practices that produce real results.

No follow-up. No more emails about this. We're good.

---

**Option 2 — Roll into Continuity ($9/mo). Keep the momentum.**

Continuity is the natural next step for most people who finish the Reset.

What you get:

- **A new monthly module + companion workbook every month** — fresh topics each month, building on what you learned in the Reset. TMJ, mid-back, hips, sleep, nervous system, more.
- **Full back-catalog access** — 12 modules + 12 workbooks already published, yours to work through at your own pace
- **$9/month** — about two coffee-shop visits

Why this works for Reset graduates: you've already proven you can do daily practice. Continuity feeds that habit with new content so you don't drift back to nothing.

**Start Continuity → [healinghandsbynate.com/go/continuity](https://healinghandsbynate.com/go/continuity)**

If you'd rather pay yearly: $97/year (saves you $11) — same link, pick yearly at checkout.

---

**Option 3 — Step up to Between Sessions ($19/mo) or Inner Circle ($39/mo)**

If the Reset showed you that you want MORE structured care:

- **Between Sessions ($19/mo)** — everything in Continuity PLUS a monthly seasonal bonus protocol calibrated to what bodies in this region are dealing with each month
- **Inner Circle ($39/mo)** — everything above PLUS 12 long-form deep cuts (15-20 page reference resources) with companion workbooks. The deepest tier.

For people with chronic issues, demanding physical jobs, or just genuine interest in understanding their body deeply — these tiers fit.

**See all options → [healinghandsbynate.com/membership](https://healinghandsbynate.com/membership)**

---

**A note from me:**

I won't email you about this again. The Reset was a one-time program. This is the one Day 31 offer — clean and clear, then I'm done bringing it up.

If you start Continuity (or Between Sessions or Inner Circle), you'll be in the regular member flow with monthly content and library access. If you don't, you stay subscribed to Friday Five (the free weekly email) and that's it.

Either way — thank you for doing the 30 days. Most people don't.

If your body wants hands-on work, [book a session](https://www.vagaro.com/essencesalonandspallc/services). I'm in Union, MO.

Take care of yourself.

— Nate

*Nate Ratcliff, LMT · Healing Hands By Nate · Union, MO*
*[healinghandsbynate.com](https://healinghandsbynate.com)*

---

## Notes for implementation
- Trigger: 31 days after 30-Day Reset purchase (Stripe webhook records purchase date → Mautic delayed send)
- Send via Mautic broadcast — needs new segment "30-Day Reset Buyers — Day 31"
- One-time send only (don't re-trigger if buyer purchases again)
- Track conversion: how many recipients click through and start Continuity
- A/B test subject lines if buyer volume gets high enough (start with first subject)
