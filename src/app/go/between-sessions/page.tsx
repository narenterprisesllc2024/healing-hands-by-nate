import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Between Sessions — Monthly Modules + Bonus Protocols",
  description:
    "$19/month. Everything in Continuity plus a monthly bonus protocol — seasonal recovery sequences timed to what your body is dealing with right now. Cancel anytime.",
  alternates: { canonical: "https://healinghandsbynate.com/go/between-sessions" },
  openGraph: {
    title: "Between Sessions — $19/mo or $197/yr",
    description: "Monthly modules + workbooks + seasonal bonus protocols.",
    url: "https://healinghandsbynate.com/go/between-sessions"
  }
};

const TIER_ID = "6a2c281bda72f1000177e8aa";
const MONTHLY_URL = `https://ghost.mysoviai.com/#/portal/signup/${TIER_ID}/monthly`;
const YEARLY_URL = `https://ghost.mysoviai.com/#/portal/signup/${TIER_ID}/yearly`;

export default function BetweenSessionsFunnel() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-wide max-w-4xl text-center">
          <p className="eyebrow text-bronze-600">Most popular · $19/mo or $197/yr</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            <span className="italic text-bronze-700">Two touchpoints a month.</span> Timed to what your body is actually dealing with.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Everything in Continuity — a new monthly module + companion workbook — plus a
            seasonal bonus protocol each month. Mowing-season low back in May. Air-conditioning
            tension in June. Hunting-season shoulders in October. Holiday stress in November.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={MONTHLY_URL}
              className="btn bg-bronze-500 px-8 py-3 text-base text-cream-50 hover:bg-bronze-600"
            >
              Start Between Sessions — $19/month
            </a>
            <a
              href={YEARLY_URL}
              className="text-sm text-stone-600 underline underline-offset-2 hover:text-bronze-600"
            >
              Or pay $197/year and save $31
            </a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-t border-stone-900/10 bg-cream-200/40 py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Your body's needs change with the seasons.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            The same body has different problems in May than in November. Mowing in May
            locks up the low back. Driving in August wrecks the right hip. Hunting in
            October destroys the shoulder. Holiday stress in November lands in the jaw.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            A generic self-care library doesn't address this. Seasonal protocols do.
            Between Sessions ships a new one each month — the one your body actually
            needs that month.
          </p>
          <p className="mt-6 font-serif text-xl italic text-stone-800">
            Two touchpoints a month: the monthly module + the seasonal bonus protocol.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-stone-500">A note from Nate</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            Twelve seasonal bonuses, mapped to twelve months. Mostly Missouri-specific.
          </h2>
          <div className="prose-warm mt-6 space-y-4 text-stone-700">
            <p>
              I'm a licensed massage therapist in Union, Missouri. Most of my practice is
              local — Franklin County, the surrounding counties, plus commuters who drive
              into St. Louis or out to St. Charles.
            </p>
            <p>
              These bodies have predictable seasonal patterns. Mowing season hits low backs
              in May. AC tension hits necks in June. Trucker recovery matters all summer.
              Farmer recovery after haying in July and August. Hunting-season shoulders in
              October. Holiday stress in November. Year-end nervous system reset in December.
            </p>
            <p>
              The Between Sessions tier ships these as monthly bonus protocols on top of the
              Continuity modules. Two touchpoints a month, each calibrated to what your body
              is actually dealing with at that point in the year.
            </p>
            <p>
              At $19/month, it's the sweet spot for most people — more depth than Continuity
              alone, less commitment than Inner Circle.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="border-t border-stone-900/10 bg-forest-700 py-20 text-cream-100">
        <div className="container-wide max-w-4xl">
          <p className="eyebrow text-bronze-500">What's included</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest text-cream-50 md:text-4xl">
            Everything in Continuity + a monthly bonus protocol.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Everything in Continuity
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                One new monthly module + companion workbook. Full back-catalog access.
                The core between-sessions library.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Monthly bonus protocol
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Seasonal recovery sequences timed to the month. Specific, focused PDFs —
                like a quick-reference for what your body is actually dealing with right
                now.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Full back-catalog of both
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Modules AND bonus protocols going back to launch. A year in, you have 24
                resources. Two years in, 48.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200/15 bg-forest-700/40 p-6">
              <p className="font-serif text-xl tracking-tightest text-cream-50">
                Cancel anytime
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
                Same as Continuity. No contracts, no hoops. Cancel and come back later if
                that fits your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE BONUSES */}
      <section className="bg-cream-100 py-20">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-bronze-600">Sample bonus protocols (you get all 12)</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tightest md:text-4xl">
            The kind of seasonal specificity that makes the difference.
          </h2>
          <div className="mt-10 space-y-4">
            {[
              { season: "May", title: "Post-Mowing Recovery — the 15-minute window that saves you three days of limping" },
              { season: "June", title: "The Air-Conditioning Body Reset — the summer tension pattern nobody talks about" },
              { season: "August", title: "Driving and Trucker Recovery — the undo sequence for hours behind the wheel" },
              { season: "September", title: "Farmer Recovery: Post-Haying — for the hardest two days of the agricultural year" },
              { season: "October", title: "Hunting-Season Shoulder Reset — for sitting cold-still then hauling 150 pounds" },
              { season: "November", title: "Holiday Stress Body Scan — for the kind of tension that doesn't come from physical work" }
            ].map((b) => (
              <div key={b.season} className="flex gap-4 rounded-xl border border-stone-900/10 bg-cream-200/30 px-5 py-4">
                <span className="shrink-0 font-serif text-base italic text-bronze-700">
                  {b.season}
                </span>
                <p className="text-sm text-stone-700">{b.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone-500">Plus six more covering January through April and July.</p>
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
              <p className="mt-3 font-serif text-5xl tracking-tightest">$19</p>
              <p className="mt-1 text-sm text-stone-500">per month · cancel anytime</p>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-700">
                <li>· Everything in Continuity</li>
                <li>· Monthly seasonal bonus protocol</li>
                <li>· 2 touchpoints per month</li>
                <li>· Cancel anytime</li>
              </ul>
              <a
                href={MONTHLY_URL}
                className="btn-primary mt-8 block w-full py-3 text-center"
              >
                Start monthly — $19/mo
              </a>
            </div>

            <div className="relative rounded-2xl border border-bronze-500 bg-cream-50 p-8 text-left shadow-lg shadow-bronze-500/10">
              <span className="absolute -top-3 left-6 rounded-full bg-bronze-500 px-4 py-1 text-xs font-medium tracking-wide text-cream-50">
                Save $31
              </span>
              <p className="font-serif text-xl tracking-tightest">Yearly</p>
              <p className="mt-3 font-serif text-5xl tracking-tightest">$197</p>
              <p className="mt-1 text-sm text-stone-500">per year · save $31 vs monthly</p>
              <ul className="mt-6 space-y-2.5 text-sm text-stone-700">
                <li>· Everything in monthly</li>
                <li>· About 14% off vs monthly billing</li>
                <li>· One charge per year</li>
                <li>· Cancel anytime</li>
              </ul>
              <a
                href={YEARLY_URL}
                className="btn mt-8 block w-full bg-bronze-500 py-3 text-center text-cream-50 hover:bg-bronze-600"
              >
                Start yearly — $197/yr
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
                q: "What's the difference between Continuity and Between Sessions?",
                a: "Continuity ($9/mo) gets you the monthly module and back-catalog. Between Sessions ($19/mo) adds a monthly bonus protocol — a targeted seasonal recovery sequence timed to what bodies in this region are actually dealing with that month."
              },
              {
                q: "I don't live in Missouri — are the bonuses still relevant?",
                a: "Yes. The seasonal patterns aren't strictly Missouri-specific. AC tension happens anywhere there's air conditioning. Mowing-season patterns happen anywhere with lawns. Hunting protocols apply anywhere people hunt. Holiday stress is universal. The Missouri-specific framing makes them feel grounded — but the patterns are broadly applicable."
              },
              {
                q: "Can I downgrade to Continuity if Between Sessions is too much?",
                a: "Yes. Manage your subscription in your member portal — change tier anytime. Same Stripe billing, same cancellation policy, same back-catalog."
              },
              {
                q: "What's the upgrade path?",
                a: "Inner Circle ($39/mo) adds 12 long-form deep cuts (15-20 page reference resources on specific topics) with companion workbooks. It's the deepest tier."
              },
              {
                q: "What format are the bonus protocols?",
                a: "Same as the monthly modules — written PDF with companion workbook where appropriate. Shorter than the monthly modules (4-6 pages typical), more focused, designed as quick-reference for the specific seasonal pattern."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. No contracts, no hoops. If the content isn't earning the price, stop paying."
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
            $19/month. The sweet-spot tier for most people.
          </h2>
          <p className="mt-4 text-cream-200/85">
            Modules + workbooks + seasonal bonuses. Two touchpoints a month, calibrated to
            the season.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={MONTHLY_URL}
              className="btn bg-bronze-500 px-8 py-3 text-cream-50 hover:bg-bronze-600"
            >
              Start Between Sessions — $19/month
            </a>
            <a
              href={YEARLY_URL}
              className="text-sm text-cream-200/85 underline underline-offset-2 hover:text-bronze-500"
            >
              Or pay $197/year (save $31)
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
