import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 30-Day Reset — A Structured Between-Sessions Program",
  description:
    "30 days. 2-3 minutes per day. A body that feels different by the end. From Nate — Licensed Massage Therapist, 12+ years on the table.",
  alternates: { canonical: "https://healinghandsbynate.com/go/30-day-reset" },
  openGraph: {
    title: "The 30-Day Reset — $79 one-time",
    description: "Structured 30-day program. Daily 2-3 minute practices. Real change.",
    url: "https://healinghandsbynate.com/go/30-day-reset"
  }
};

const STRIPE_URL = "https://buy.stripe.com/4gMfZhac3eZE1rU3WEabK0d";

export default function ResetFunnel() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-wide max-w-4xl text-center">
          <p className="eyebrow text-bronze-600">A 30-day program · $79 one-time</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            Thirty days. <span className="italic text-bronze-700">A body that feels different</span> by the end.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Two to three minutes a day. Thirty days. Four themed weeks. No equipment, no
            cohort, no live calls — just a structured between-sessions program built from
            12+ years on the table.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={STRIPE_URL}
              className="btn bg-bronze-500 px-8 py-3 text-base text-cream-50 hover:bg-bronze-600"
            >
              Start the 30-Day Reset — $79
            </a>
            <p className="text-xs text-stone-500">
              One-time payment · Yours to keep · No subscription
            </p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-t border-stone-900/10 bg-cream-200/40 py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Most people don't have a problem with self-care information.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            You already know you should stretch more. Sleep better. Move more. Care for your
            body. That's not the problem.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            The problem is structure. <strong>What</strong> to do. <strong>When</strong> to
            do it. <strong>How</strong> to make it stick past the first three days. Where
            to actually start.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            Most self-care programs hand you a binder of practices and tell you to "be
            consistent." That doesn't work. The reason: too much choice. Too much overwhelm.
            Too much "where do I start." So you don't start.
          </p>
          <p className="mt-6 font-serif text-xl italic text-stone-800">
            The 30-Day Reset fixes that.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-stone-500">A note from Nate</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            After 12+ years on the table, I built this program for the people who keep
            telling me "I should be doing more."
          </h2>
          <div className="prose-warm mt-6 space-y-4 text-stone-700">
            <p>
              I'm a licensed massage therapist in Union, Missouri. I've worked with thousands
              of bodies — desk workers, mowers, drivers, farmers, parents, retirees, athletes.
              The single most reliable predictor of who maintains the gains from a session
              isn't how hard they get worked on the table. It's whether they do daily care
              between sessions.
            </p>
            <p>
              The people who do — even small amounts — keep what we built. The people who
              don't are right back where they started in a week.
            </p>
            <p>
              I designed the 30-Day Reset for the people who want to be in the first group.
              People who want to actually do the work, but need someone to tell them exactly
              what to do today, then tomorrow, then the day after that. For 30 days, until
              the habits are set and you've felt the shift in your own body.
            </p>
            <p>
              This is the program I'd hand a friend who said "Nate, just tell me where to
              start." Now it's yours.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-stone-900/10 bg-forest-700 py-20 text-cream-100">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow text-bronze-500">What's included</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest text-cream-50 md:text-4xl">
            Everything you need to actually do the 30 days.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                The 30-Day Reset Master Ebook
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                A professionally designed PDF with one entry per day. Each day tells you
                exactly what to do, why it matters, and how long it takes (usually 2-3
                minutes).
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Organized into four themed weeks: Breath & Awareness, Mid-Back & Neck,
                Hips & Low Back, Sleep & Wind-Down.
              </p>
            </div>

            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                The Companion Workbook
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                A printable PDF tracker for all 30 days. Brief daily notes, weekly
                reflections, and a before-and-after body inventory.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                The tracking is what makes it stick. The Day 1 vs Day 30 comparison is
                what makes people keep going after the program ends.
              </p>
            </div>

            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Lifetime access
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Both PDFs are yours to keep. Do the 30 days again if you want, hand them to a
                friend, reference specific days years later. No expiration, no subscription.
              </p>
            </div>

            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                A clear path forward on Day 31
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                The program ends with a path: keep your built habits on your own, or roll
                into the $9/month Continuity membership for ongoing monthly content. No
                pressure either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE WEEKS */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-bronze-600">The structure</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            Four themed weeks that build on each other.
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                week: "Week 1",
                title: "Breath & Awareness",
                body: "The foundation. Learning to read your own body. Establishing the breath as your reset button."
              },
              {
                week: "Week 2",
                title: "Mid-Back & Neck",
                body: "The upper body that desk work, phones, and modern life have locked up. Restoration of mobility."
              },
              {
                week: "Week 3",
                title: "Hips & Low Back",
                body: "The lower body that sitting has shortened. Release of the patterns causing most chronic back pain."
              },
              {
                week: "Week 4",
                title: "Sleep & Wind-Down",
                body: "The recovery practice that makes everything else stick. Body-based sleep optimization."
              }
            ].map((w) => (
              <div key={w.title} className="flex gap-6">
                <span className="shrink-0 font-serif text-2xl italic text-bronze-600">
                  {w.week}
                </span>
                <div>
                  <h3 className="font-serif text-xl tracking-tightest">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{w.body}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-6 border-t border-stone-900/10 pt-6">
              <span className="shrink-0 font-serif text-2xl italic text-bronze-600">
                Days 29–30
              </span>
              <div>
                <h3 className="font-serif text-xl tracking-tightest">Integration & Review</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  Build your own ongoing daily practice from what worked. Compare your
                  Day 1 body to your Day 30 body. Decide what's next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / BIG CTA */}
      <section className="border-y border-stone-900/10 bg-cream-200/40 py-20">
        <div className="container-wide max-w-3xl text-center">
          <p className="eyebrow text-bronze-600">One-time purchase · Yours forever</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tightest md:text-5xl">
            $79.
          </h2>
          <p className="mt-3 text-stone-600">
            About what a single bodywork session costs. Without expiring.
          </p>

          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-bronze-500/30 bg-cream-50 p-8 shadow-lg shadow-bronze-500/10">
            <p className="font-serif text-2xl tracking-tightest">The 30-Day Reset</p>
            <p className="mt-2 text-sm text-stone-600">
              Master ebook + companion workbook + Day-31 next-step roadmap
            </p>
            <p className="mt-6 font-serif text-5xl tracking-tightest">$79</p>
            <p className="mt-1 text-xs text-stone-500">one-time, no subscription</p>
            <a
              href={STRIPE_URL}
              className="btn mt-6 block w-full bg-bronze-500 py-3 text-cream-50 hover:bg-bronze-600"
            >
              Buy the Reset
            </a>
            <p className="mt-3 text-xs text-stone-500">
              Secure checkout via Stripe · Instant download
            </p>
          </div>
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
                q: "Do I need to be flexible or in good shape to start?",
                a: "No. The program is designed for the body you have right now. The early days are observation and breath — no physical demands. The movement work builds gradually and is scaled to your current range. If you can sit on a couch and lie on a floor, you can do this."
              },
              {
                q: "How much time per day does this actually take?",
                a: "2-3 minutes to read the day's entry. 2-3 minutes to do the practice. Some days less. The maximum any single day asks of you is 10 minutes (the full wind-down sequence in Week 4)."
              },
              {
                q: "What if I miss a day?",
                a: "Pick up where you left off. The 30-day count matters less than the consistent return to practice. The program works if you do 30 days over 35 days. It works if you take a week off mid-program and finish later. Don't quit just because you missed a day."
              },
              {
                q: "Is this medical advice?",
                a: "No. This is educational, focused on between-sessions self-care for healthy adults. If you have acute injuries, undiagnosed pain, or significant medical conditions, see your physician first. The practices are generally safe but should not replace medical care."
              },
              {
                q: "What happens on Day 31?",
                a: "You'll see an option to roll into the $9/month Continuity membership for ongoing monthly content. No pressure — the program is yours to keep either way. Most people who finish either continue with their own daily practice OR step into Continuity to keep the momentum."
              },
              {
                q: "Refunds?",
                a: "If you do the program in good faith — actually do the daily practices for at least the first two weeks — and it doesn't work for your body, email me and we'll work it out. The work asks something of you; if you've shown up for it, I'll show up for you."
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
            30 days. About 90 minutes of your life total.
          </h2>
          <p className="mt-4 text-cream-200/85">
            Possibly a different relationship with your body by the end.
          </p>
          <div className="mt-8">
            <a
              href={STRIPE_URL}
              className="btn bg-bronze-500 px-8 py-3 text-cream-50 hover:bg-bronze-600"
            >
              Start the Reset — $79
            </a>
            <p className="mt-3 text-xs text-cream-200/60">
              One-time payment · Yours to keep · No subscription
            </p>
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
