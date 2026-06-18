---
tier: 30-day-reset
price: $79 one-time
type: welcome_email
trigger: 30-Day Reset purchase (Stripe webhook)
delivery: Ghost or Mautic broadcast triggered by Stripe purchase
status: draft
---

## Subject line options
- Your 30-Day Reset is ready — Day 1 starts now
- You're in. The 30-Day Reset begins.
- Welcome to your 30-Day Reset — here's how to start

## From
- From name: Nate
- From email: nate@healinghandsbynate.com
- Reply-to: nate@healinghandsbynate.com

## Preview text
Master ebook + companion workbook attached. Day 1 takes 5 minutes total.

---

## Body

Hey —

You bought the 30-Day Reset. Here's what happens now.

**Your program materials:**

- **The 30-Day Reset Master Ebook** — [Download PDF](https://cloud.mysoviai.com/s/c2PmYS4jr7S6aD7) (30 daily entries, 4 themed weeks)
- **The Companion Workbook** — [Download PDF](https://cloud.mysoviai.com/s/JNTF4kTssqoPKD7) (daily tracker, weekly reflections, before/after body inventory)

Download both now. Save them somewhere you'll find them — your phone, your computer, your desktop. They're yours to keep forever.

**Recommended: print the workbook.** The tracking is what makes the 30 days actually shift something. Reading without tracking is forgettable. Tracking makes you notice.

**Today — Day 0 — do this:**

1. Open the workbook to the **Day 1 Body Inventory** (before you start Day 1)
2. Spend 5 minutes filling it out honestly
3. That's your baseline. You'll compare to it on Day 30.

Don't skip this step. The Day 1 vs Day 30 comparison is what makes most people keep going after the program ends.

**Tomorrow — Day 1 — do this:**

1. Open the master ebook to Day 1
2. Read the day's entry (1-2 minutes)
3. Do the practice (2-3 minutes)
4. Log briefly in the workbook (30 seconds)

Total time: 4-5 minutes. Same pattern every day for 30 days.

**The four weeks ahead:**

- **Week 1 — Breath & Awareness** — the foundation
- **Week 2 — Mid-Back & Neck** — restoration of mobility
- **Week 3 — Hips & Low Back** — release of stuck patterns
- **Week 4 — Sleep & Wind-Down** — the recovery practice that makes it all stick
- **Days 29-30 — Integration & Review** — build your own ongoing practice

**Two things I want you to know up front:**

1. **You don't have to be perfect.** If you miss a day, pick up where you left off. The 30-day count matters less than the consistent return to practice. Missing days happens.

2. **The program asks something of you, and I'll show up for you.** If you do the work in good faith — actually do the daily practices for at least the first two weeks — and it doesn't move anything for your body, email me. We'll work it out.

**On Day 31, you'll get one more email** about the natural next step (Continuity membership at $9/month for ongoing monthly content). No pressure — the Reset is yours either way.

But that's 31 days from now. Today's job is just to download the files and do the Day 1 inventory.

Let's begin.

— Nate

*Nate Ratcliff, LMT · Healing Hands By Nate · Union, MO*
*[healinghandsbynate.com](https://healinghandsbynate.com)*

---

## Notes for implementation
- Trigger: Stripe webhook on successful 30-Day Reset purchase
- Delivery: ideally via Mautic broadcast with file attachments embedded OR direct download links
- Add buyer to "30-Day Reset Purchasers" Mautic segment (new segment to create)
- Tag with purchase_date custom field (used by day-31 upsell trigger)
- Schedule day-31 upsell email automatically 31 days after purchase_date
