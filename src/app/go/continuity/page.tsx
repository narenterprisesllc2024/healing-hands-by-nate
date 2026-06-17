import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Continuity — Monthly Between-Sessions Care",
  description:
    "$9/month. One new PDF module + companion workbook every month. Full back-catalog access. The ongoing self-care library from Nate — Licensed Massage Therapist, 12+ years on the table.",
  alternates: { canonical: "https://healinghandsbynate.com/go/continuity" },
  openGraph: {
    title: "Continuity — $9/mo or $97/yr",
    description: "Monthly between-sessions modules + workbooks. Cancel anytime.",
    url: "https://healinghandsbynate.com/go/continuity"
  }
};

const TIER_ID = "6a2c281ada72f1000177e8a3";
const MONTHLY_URL = `https://ghost.mysoviai.com/#/portal/signup/${TIER_ID}/monthly`;
const YEARLY_URL = `https://ghost.mysoviai.com/#/portal/signup/${TIER_ID}/yearly`;

export default function ContinuityFunnel() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-wide max-w-4xl text-center">
          <p className="eyebrow text-bronze-600">Recurring membership · $9/mo or $97/yr</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            <span className="italic text-bronze-700">Hold the ground</span> you gain on the table.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            One new between-sessions module every month. Companion workbook for each.
            Full back-catalog. The same guidance I'd write on the back of a card after
            your session — productized so it's always there when you need it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={MONTHLY_URL}
              className="btn bg-bronze-500 px-8 py-3 text-base text-cream-50 hover:bg-bronze-600"
            >
              Start Continuity — $9/month
            </a>
            <a
              href={YEARLY_URL}
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-bronze-600"
            >
              Or pay $97/year and save $11
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-t border-stone-900/10 bg-cream-200/40 py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Most of what I do on the table gets undone in the first week.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Not because the work didn't land. Because life keeps loading the same patterns.
            Sitting in the same chair. Driving the same commute. Lifting the same kids.
            Carrying the same stress.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            The clients whose bodywork actually holds are the ones doing daily care between
            sessions. The ones who don't end up back where they started in a week — and
            wondering why bodywork "doesn't really work for them."
          </p>
          <p className="mt-6 font-serif text-xl italic text-stone-800">
            Continuity is the structure that makes the in-between work happen.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-stone-500">A note from Nate</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            After 12+ years on the table, I know exactly what most clients need between
            sessions.
          </h2>
          <div className="prose-warm mt-6 space-y-4 text-stone-700">
            <p>
              I'm a licensed massage therapist in Union, Missouri. I've worked with thousands
              of bodies and I've watched the same patterns play out year after year. The
              client comes in, we work, they leave loose. Within a week, the patterns are
              back — because nothing changed between sessions.
            </p>
            <p>
              I used to send people home with notes scribbled on intake forms. "Do this
              stretch every day." "Heat on the low back nightly." "Open-book stretch
              before bed." It helped, but it was unsystematic and inconsistent.
            </p>
            <p>
              Continuity is the productized version. One new module each month — written
              PDF guide plus companion workbook — that gives you the between-sessions
              practices for one specific area or theme. The whole library stays accessible
              as long as you're subscribed.
            </p>
            <p>
              At $9/month, it's the cheapest path I can offer to actually keep the work
              I do on the table from disappearing by the next visit.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-stone-900/10 bg-forest-700 py-20 text-cream-100">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow text-bronze-500">What's included</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest text-cream-50 md:text-4xl">
            Every month: a new module, a companion workbook, full back-catalog access.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                One new module each month
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Written PDF guide (8-12 pages). Specific area or theme — TMJ, hips,
                mid-back, sleep, stress, nervous system, more. Voice-matched to how I
                actually talk on the table.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Companion workbook
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Printable PDF workbook for each module. Self-assessments, 7-day trackers,
                reflection prompts. The tracking is what makes the practices stick.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Full back-catalog access
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Everything previously published is yours. Twelve months in, you have a
                full year of modules. Cancel and come back later? The catalog returns
                with you.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Cancel anytime
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                No contracts, no cancellation hoops. If the content stops earning the
                $9, stop paying. I'd rather you come back later than resent the charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-y border-stone-900/10 bg-cream-200/40 py-20">
        <div className="container-wide max-w-4xl text-center">
          <p className="eyebrow text-bronze-600">Founding-member pricing</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            Lock in today's pricing. Prices rise when video content ships.
          </h2>
          <p className="mt-3 text-stone-600">
            Right now: PDF + companion workbook. Self-directed. When video walkthroughs
            launch, prices go up. Subscribers grandfather in.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            {/* Monthly */}
            <div className="rounded-2xl border border-stone-900/10 bg-cream-50 p-8 text-left">
              <p className="font-serif text-xl tracking-tightest">Monthly</p>
              <p className="mt-3 font-serif text-5xl tracking-tightest">$9</p>
              <p className="mt-1 text-sm text-stone-500">per month · cancel anytime</p>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-700">
                <li>· 1 new PDF module per month</li>
                <li>· Companion workbook for each</li>
                <li>· Full back-catalog access</li>
                <li>· Cancel anytime</li>
              </ul>
              <a
                href={MONTHLY_URL}
                className="btn-primary mt-8 block w-full py-3 text-center"
              >
                Start monthly — $9/mo
              </a>
            </div>

            {/* Yearly */}
            <div className="relative rounded-2xl border border-bronze-500 bg-cream-50 p-8 text-left shadow-lg shadow-bronze-500/10">
              <span className="absolute -top-3 left-6 rounded-full bg-bronze-500 px-4 py-1 text-xs font-medium tracking-wide text-cream-50">
                Save $11
              </span>
              <p className="font-serif text-xl tracking-tightest">Yearly</p>
              <p className="mt-3 font-serif text-5xl tracking-tightest">$97</p>
              <p className="mt-1 text-sm text-stone-500">per year · save $11 vs monthly</p>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-700">
                <li>· Everything in monthly</li>
                <li>· Two months free vs monthly billing</li>
                <li>· One charge per year</li>
                <li>· Cancel anytime</li>
              </ul>
              <a
                href={YEARLY_URL}
                className="btn mt-8 block w-full bg-bronze-500 py-3 text-center text-cream-50 hover:bg-bronze-600"
              >
                Start yearly — $97/yr
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
                q: "Do I need to be a current massage client?",
                a: "No. The modules are useful for anyone with a body that sits, stands, drives, mows, lifts kids, or carries stress. Current clients get extra context because they know the table work — but the content stands on its own."
              },
              {
                q: "What format are the modules?",
                a: "Written PDF guide (8-12 pages, printable) with a companion workbook for the practices, prompts, and trackers. Self-directed — read it, do the work, come back to it. Video walkthroughs are on the roadmap and will be added at a later stage; when that happens, prices go up. Lock in today's pricing now."
              },
              {
                q: "How many modules will I have access to?",
                a: "On day 1, you have full back-catalog access — everything previously published. A new module ships each month. Twelve months in, you have a year of content. Two years in, two years."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. No contracts, no hoops. If the content isn't earning the price, stop paying. I'd rather you come back later than resent the charge."
              },
              {
                q: "What if I want more depth?",
                a: "Continuity is the baseline. If you want more, Between Sessions ($19/mo) adds monthly bonus protocols. Inner Circle ($39/mo) adds long-form deep-cut reference resources. You can upgrade anytime from your member portal."
              },
              {
                q: "How is this different from the 30-Day Reset?",
                a: "The 30-Day Reset is a structured one-time program — $79 one-time, finite, yours forever. Continuity is ongoing monthly content — $9/month, recurring, always adding. Most people use the Reset to build the habit, then roll into Continuity to keep the momentum."
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
            $9/month. Less than two coffee shop visits.
          </h2>
          <p className="mt-4 text-cream-200/85">
            The ongoing self-care library that keeps the bodywork holding.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={MONTHLY_URL}
              className="btn bg-bronze-500 px-8 py-3 text-cream-50 hover:bg-bronze-600"
            >
              Start Continuity — $9/month
            </a>
            <a
              href={YEARLY_URL}
              className="text-sm text-cream-200/85 underline underline-offset-2 hover:text-bronze-500"
            >
              Or pay $97/year (save $11)
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
