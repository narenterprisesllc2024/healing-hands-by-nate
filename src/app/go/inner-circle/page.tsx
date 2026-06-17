import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inner Circle — The Complete Library + Long-Form Deep Cuts",
  description:
    "$39/month. Everything in Between Sessions plus 12 long-form deep cuts (15-20 page reference resources) with companion workbooks. The deepest tier of the HHBN membership.",
  alternates: { canonical: "https://healinghandsbynate.com/go/inner-circle" },
  openGraph: {
    title: "Inner Circle — $39/mo or $397/yr",
    description: "Complete library + 12 long-form deep cuts with workbooks.",
    url: "https://healinghandsbynate.com/go/inner-circle"
  }
};

const TIER_ID = "6a2c281bda72f1000177e8b1";
const MONTHLY_URL = `https://ghost.mysoviai.com/#/portal/signup/${TIER_ID}/monthly`;
const YEARLY_URL = `https://ghost.mysoviai.com/#/portal/signup/${TIER_ID}/yearly`;

export default function InnerCircleFunnel() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-wide max-w-4xl text-center">
          <p className="eyebrow text-bronze-600">The deepest tier · $39/mo or $397/yr</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            <span className="italic text-bronze-700">Everything I've published.</span> Plus the deep cuts no other tier gets.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Monthly modules. Monthly seasonal bonuses. Plus 12 long-form deep cuts — 15-20 page
            reference resources on specific areas and topics, each with a companion
            workbook. Year-long reference material from 12+ years on the table.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={MONTHLY_URL}
              className="btn bg-bronze-500 px-8 py-3 text-base text-cream-50 hover:bg-bronze-600"
            >
              Start Inner Circle — $39/month
            </a>
            <a
              href={YEARLY_URL}
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-bronze-600"
            >
              Or pay $397/year and save $71
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-t border-stone-900/10 bg-cream-200/40 py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Some bodies need more than a monthly module can cover.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            If you have chronic low back pain that's been bothering you for years, a 10-page
            monthly module is a start — but not enough. You need a year-long reference
            covering anatomy, the patterns I see, self-assessment, daily maintenance, when to
            escalate, and stories from the table. Twenty pages, written like the conversation
            you'd have with me if you had unlimited session time.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            That's what the long-form deep cuts are. Twelve of them, each on a specific area
            or topic — lower back, neck, mid-back, nervous system, self-massage, recovery
            after 40, sleep, movement patterns, chronic pain, aging, caregiving, more.
          </p>
          <p className="mt-6 font-serif text-xl italic text-stone-800">
            Inner Circle exists for the people who want the deepest possible self-care toolkit.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-stone-500">A note from Nate</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            The deep cuts are what I wish I could send every client home with.
          </h2>
          <div className="prose-warm mt-6 space-y-4 text-stone-700">
            <p>
              I'm a licensed massage therapist in Union, Missouri. The clients who get the
              most out of bodywork are the ones who understand their own bodies — patterns,
              anatomy, signals, what helps, what doesn't.
            </p>
            <p>
              I can teach you a lot in a session. But there's only so much I can cover in 60
              or 90 minutes on the table. The deep cuts are what I wish I could hand every
              client to read between sessions — the full picture on lower back issues, the
              honest map of stress in the body, the realistic framework for aging, the actual
              science of sleep.
            </p>
            <p>
              Each deep cut is 15-20 pages. Reference material — you don't read it once and
              be done. You come back to it as your body changes, as life situations shift,
              as different sections become relevant.
            </p>
            <p>
              At $39/month, Inner Circle is for the people who want to invest in
              understanding their own bodies at a level most people never reach. If that's
              you, this is the tier.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-stone-900/10 bg-forest-700 py-20 text-cream-100">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow text-bronze-500">What's included</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest text-cream-50 md:text-4xl">
            Everything I publish. Plus the long-form deep cuts no other tier gets.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Everything in Between Sessions
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Monthly modules + workbooks. Monthly seasonal bonus protocols. Full
                back-catalog of both.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                12 long-form deep cuts
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                15-20 page reference PDFs. One new every month. Each goes deep on a specific
                area or topic — anatomy, patterns, self-assessment, daily practice,
                seasonal considerations, when to escalate.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Companion workbook for each deep cut
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Pattern self-assessments, 30-day trackers, seasonal check-ins, year-end
                inventories. Built to be used over months and years, not days.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Cancel anytime
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Same as the other tiers. No contracts, no hoops. Step down to Between
                Sessions or Continuity anytime if Inner Circle isn't right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE DEEP CUTS */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-bronze-600">The 12 deep cuts (you get all of them)</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            Year-long reference resources, one per month.
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {[
              "The Year of Your Lower Back",
              "The Year of Your Neck and Shoulders",
              "The Year of Your Mid-Back",
              "Nervous System Self-Assessment",
              "The Self-Massage Toolkit",
              "Recovery After 40",
              "The Stress-Body Connection",
              "Sleep As Foundation",
              "Movement Patterns for Daily Life",
              "Chronic Pain — The Long Game",
              "The Aging Body",
              "The Caregiver's Body"
            ].map((title) => (
              <div key={title} className="rounded-xl border border-stone-900/10 bg-cream-200/30 px-5 py-4 text-sm text-stone-700">
                {title}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-stone-600">
            Each one is 15-20 pages of structured reference material. Plus a companion
            workbook for each. Use them as needed — most people start with the deep cut
            most relevant to their current situation and reference others over time.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-y border-stone-900/10 bg-cream-200/40 py-20">
        <div className="container-wide max-w-4xl text-center">
          <p className="eyebrow text-bronze-600">Founding-member pricing</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            Lock in today's pricing. Prices rise when video content ships.
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-900/10 bg-cream-50 p-8 text-left">
              <p className="font-serif text-xl tracking-tightest">Monthly</p>
              <p className="mt-3 font-serif text-5xl tracking-tightest">$39</p>
              <p className="mt-1 text-sm text-stone-500">per month · cancel anytime</p>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-700">
                <li>· Everything in Between Sessions</li>
                <li>· 12 long-form deep cuts + workbooks</li>
                <li>· The deepest self-care toolkit</li>
                <li>· Cancel anytime</li>
              </ul>
              <a
                href={MONTHLY_URL}
                className="btn-primary mt-8 block w-full py-3 text-center"
              >
                Start monthly — $39/mo
              </a>
            </div>

            <div className="relative rounded-2xl border border-bronze-500 bg-cream-50 p-8 text-left shadow-lg shadow-bronze-500/10">
              <span className="absolute -top-3 left-6 rounded-full bg-bronze-500 px-4 py-1 text-xs font-medium tracking-wide text-cream-50">
                Save $71
              </span>
              <p className="font-serif text-xl tracking-tightest">Yearly</p>
              <p className="mt-3 font-serif text-5xl tracking-tightest">$397</p>
              <p className="mt-1 text-sm text-stone-500">per year · save $71 vs monthly</p>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-700">
                <li>· Everything in monthly</li>
                <li>· About 15% off vs monthly billing</li>
                <li>· One charge per year</li>
                <li>· Cancel anytime</li>
              </ul>
              <a
                href={YEARLY_URL}
                className="btn mt-8 block w-full bg-bronze-500 py-3 text-center text-cream-50 hover:bg-bronze-600"
              >
                Start yearly — $397/yr
              </a>
            </div>
          </div>

          <p className="mt-8 text-xs text-stone-500">
            Secure checkout via Stripe through the Ghost member portal · Cancel anytime
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Common questions
          </h2>
          <dl className="mt-10 divide-y divide-stone-900/10">
            {[
              {
                q: "Who is Inner Circle actually for?",
                a: "People who want to invest in deeply understanding their own bodies. People dealing with chronic issues that need more than a monthly module covers. Bodyworkers, healthcare workers, athletes, anyone whose body is their work. People who value reference resources they can use over years, not days."
              },
              {
                q: "How are the deep cuts different from the monthly modules?",
                a: "Modules are 8-12 pages, focused on between-sessions practice. Deep cuts are 15-20 pages, structured as year-long reference resources — full anatomy, patterns, self-assessment, daily practice, seasonal considerations, escalation guidance, and stories from the table. You don't read a deep cut once and be done. You come back to it as needed."
              },
              {
                q: "Do I get all 12 deep cuts on day 1?",
                a: "Yes — full back-catalog access from day 1. The library has been published. You don't have to wait twelve months to access all twelve."
              },
              {
                q: "Can I downgrade if Inner Circle is too much?",
                a: "Yes. Step down to Between Sessions ($19/mo) or Continuity ($9/mo) anytime from your member portal. Same Stripe billing."
              },
              {
                q: "What's the difference between Inner Circle and just buying books on these topics?",
                a: "The deep cuts are voice-matched to how I actually talk on the table — not abstract academic writing. They're informed by patterns I see in real bodies, not just literature. And they're updated and supplemented by the monthly module + bonus protocol cadence. Plus the workbooks are designed for actual use, not just reading."
              },
              {
                q: "Cancel anytime?",
                a: "Yes. No contracts, no hoops. If it's not earning the price, stop paying."
              }
            ].map((item, i) => (
              <div key={i} className="py-6">
                <dt className="font-serif text-lg tracking-tightest text-stone-900">
                  {item.q}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-stone-900/10 bg-forest-700 py-20 text-cream-100">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tightest text-cream-50 md:text-4xl">
            The deepest tier of the membership.
          </h2>
          <p className="mt-4 text-cream-200/85">
            For people who want to invest in understanding their own bodies at a level most
            people never reach.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={MONTHLY_URL}
              className="btn bg-bronze-500 px-8 py-3 text-cream-50 hover:bg-bronze-600"
            >
              Start Inner Circle — $39/month
            </a>
            <a
              href={YEARLY_URL}
              className="text-sm text-cream-200/85 underline underline-offset-2 hover:text-bronze-500"
            >
              Or pay $397/year (save $71)
            </a>
          </div>
        </div>
      </section>

      {/* Footer micro */}
      <div className="border-t border-stone-900/10 bg-cream-100 py-6 text-center text-xs text-stone-500">
        <Link href="/" className="hover:text-bronze-600">
          ← Back to healinghandsbynate.com
        </Link>
      </div>
    </>
  );
}
