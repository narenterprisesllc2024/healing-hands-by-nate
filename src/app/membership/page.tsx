import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Membership — Between Sessions",
  description:
    "Monthly self-care modules, recovery protocols, and practitioner guidance that hold the ground you gain on the table. From Nate — Licensed Massage Therapist, 12+ years.",
  openGraph: {
    title: "Membership — Between Sessions | Healing Hands By Nate",
    description:
      "Monthly self-care modules and recovery protocols from a licensed massage therapist with 12+ years on the table.",
    url: `${site.url}/membership`
  }
};

const tiers = [
  {
    name: "Friday Five",
    slug: "free",
    price: "Free",
    interval: "",
    description:
      "Five bullets every Friday. Stretches, tools, honest notes from the table. No fluff.",
    features: [
      "Weekly email — 5 practical bullets",
      "Blog post highlights",
      "Seasonal self-care notes"
    ],
    cta: null, // handled by inline newsletter form
    highlight: false
  },
  {
    name: "Continuity",
    slug: "continuity",
    price: "$9",
    interval: "/mo",
    description:
      "One new between-sessions module every month, plus the full back-catalog. The same guidance I'd write on the back of a card after your session — productized so it's always there.",
    features: [
      "1 new module per month (PDF + video)",
      "Full back-catalog access",
      "Stretches, protocols, and recovery sequences",
      "Cancel anytime"
    ],
    href: "https://buy.stripe.com/8x2eVddof3gW0nQ3WEabK0a",
    highlight: false
  },
  {
    name: "Between Sessions",
    slug: "between-sessions",
    price: "$19",
    interval: "/mo",
    description:
      "Everything in Continuity, plus a monthly bonus protocol — seasonal recovery sequences timed to what your body is actually dealing with right now.",
    features: [
      "Everything in Continuity",
      "Monthly bonus protocol (seasonal recovery)",
      "2 touchpoints per month",
      "Cancel anytime"
    ],
    href: "https://buy.stripe.com/28EdR94RJ18O1rU3WEabK0b",
    highlight: true
  },
  {
    name: "Inner Circle",
    slug: "inner-circle",
    price: "$39",
    interval: "/mo",
    description:
      "Everything above, plus you can ask me questions and I'll answer them. Monthly async voice Q&A — I batch your questions and record honest answers. Quarterly long-form deep cuts.",
    features: [
      "Everything in Between Sessions",
      "Monthly async voice Q&A from Nate",
      "Quarterly long-form PDF deep cut (15-25 pages)",
      "Cancel anytime"
    ],
    href: "https://buy.stripe.com/dRm8wP5VN6t89Yq8cUabK0c",
    highlight: false
  }
];

const resetProgram = {
  name: "30-Day Reset",
  price: "$79",
  interval: " one-time",
  description:
    "A structured 30-day between-sessions program. Four weekly themes — breath, neck and mid-back, hips and low back, sleep and wind-down. Daily 2-3 minute practices. At day 31, you can roll into Continuity for $9/mo to keep the momentum.",
  features: [
    "30 daily practices (PDF + short video)",
    "4 themed weeks building on each other",
    "Self-paced — no live calls, no cohort pressure",
    "Day 31 optional transition to $9/mo Continuity"
  ],
  href: "https://buy.stripe.com/4gMfZhac3eZE1rU3WEabK0d"
};

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="container-wide max-w-4xl text-center">
          <p className="eyebrow">Membership</p>
          <h1 className="display mt-4">
            Hold the ground you gain on the table
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Most of what I do on the table gets undone in the first week.
            Not because the work didn't land — because life keeps loading
            the same patterns. These memberships give you the between-session
            tools to hold what we built.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.slug}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlight
                    ? "border-bronze-500 bg-cream-50 shadow-lg shadow-bronze-500/10"
                    : "border-stone-900/10 bg-cream-200/30"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-bronze-500 px-4 py-1 text-xs font-medium tracking-wide text-cream-50">
                    Most popular
                  </span>
                )}
                <h3 className="font-serif text-xl tracking-tightest">
                  {tier.name}
                </h3>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="font-serif text-3xl tracking-tightest">
                    {tier.price}
                  </span>
                  {tier.interval && (
                    <span className="text-sm text-stone-500">{tier.interval}</span>
                  )}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-stone-700">
                      <span className="mt-0.5 text-bronze-500" aria-hidden="true">
                        --
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {tier.cta === null ? (
                    <NewsletterForm
                      variant="leadMagnet"
                      source="membership-free"
                      cta="Join free"
                    />
                  ) : (
                    <a
                      href={tier.href}
                      className={`btn w-full ${
                        tier.highlight
                          ? "bg-bronze-500 text-cream-50 hover:bg-bronze-600"
                          : "btn-primary"
                      }`}
                    >
                      Start {tier.name}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Day Reset standalone section */}
      <section className="border-t border-stone-900/10 bg-forest-700 py-20 text-cream-100">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-bronze-500">Standalone program</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tightest text-cream-50 md:text-5xl">
              {resetProgram.name}
            </h2>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="font-serif text-3xl tracking-tightest text-cream-50">
                {resetProgram.price}
              </span>
              <span className="text-sm text-cream-200/70">
                {resetProgram.interval}
              </span>
            </p>
            <p className="mt-5 max-w-prose leading-relaxed text-cream-200/80">
              {resetProgram.description}
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              {resetProgram.features.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-cream-200/90"
                >
                  <span className="mt-0.5 text-bronze-500" aria-hidden="true">
                    --
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={resetProgram.href}
                className="btn bg-bronze-500 text-cream-50 hover:bg-bronze-600"
              >
                Start the 30-Day Reset
              </a>
            </div>
            <p className="mt-4 text-xs text-cream-200/50">
              Week 1: Breath &amp; Awareness. Week 2: Mid-Back &amp; Neck.
              Week 3: Hips &amp; Low Back. Week 4: Sleep &amp; Wind-Down.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            How it works
          </h2>
          <div className="mt-10 space-y-8">
            {[
              {
                step: "01",
                title: "Pick a tier",
                body: "Free gets you the Friday Five. Paid gets you the between-sessions library. More tier, more depth — but all of them are self-paced and pressure-free."
              },
              {
                step: "02",
                title: "Get your first module",
                body: "Each month, a new module lands — PDF guide plus a short video walkthrough. Stretches, recovery protocols, and honest context about what your body is doing and why."
              },
              {
                step: "03",
                title: "Use it between sessions",
                body: "The modules are designed for the days you're not on my table. 5-10 minutes of your time. Nothing to keep up with, nothing to fall behind on."
              }
            ].map((s) => (
              <div key={s.step} className="flex gap-6">
                <span className="font-serif text-2xl text-bronze-500">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-serif text-xl tracking-tightest">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / About */}
      <section className="border-t border-stone-900/10 py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Who's behind this
          </h2>
          <div className="prose-warm mt-6">
            <p>
              I'm Nate — licensed massage therapist, Reiki Master, and
              certified life coach working out of{" "}
              {site.contact.locatedAt} in {site.contact.address.city},{" "}
              {site.contact.address.state}. {site.practitioner.yearsExperience}+
              years on the table.
            </p>
            <p>
              The membership exists because I got tired of watching good
              session work disappear by the next visit. If I could send
              every client home with a card that said "do these three things
              this week," I would. This is that card — just better, and it
              keeps coming.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-900/10 py-20">
        <div className="container-wide max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Common questions
          </h2>
          <dl className="mt-10 divide-y divide-stone-900/10">
            {[
              {
                q: "Do I need to be a current massage client?",
                a: "No. The modules are useful for anyone with a body and a desk, a mower, or a truck. Current clients get extra context because they know the table work, but the content stands on its own."
              },
              {
                q: "What format are the modules?",
                a: "PDF guide (8-12 pages, printable) plus a short video walkthrough (5-10 min). You can read it, watch it, or both. The audio track from the video is available separately if you just want to listen."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. No contracts, no cancellation hoops. If the content isn't earning the price, stop paying. I'd rather you come back later than resent the charge."
              },
              {
                q: "What's the difference between Continuity and Between Sessions?",
                a: "Continuity gets you the monthly module and back-catalog. Between Sessions adds a monthly bonus protocol — a targeted seasonal recovery sequence timed to what bodies in this region are actually going through that month."
              },
              {
                q: "What's the Inner Circle?",
                a: "Everything in Between Sessions, plus you can submit questions and I'll answer them in a monthly voice recording. You also get a quarterly deep-cut PDF — 15-25 pages on a single topic, researched and written from the table."
              },
              {
                q: "What happens after the 30-Day Reset ends?",
                a: "On day 31 you'll get an option to roll into the Continuity membership at $9/mo. No pressure — the reset program is yours to keep either way."
              }
            ].map((item, i) => (
              <div key={i} className="py-6">
                <dt className="font-serif text-lg tracking-tightest text-stone-900">
                  {item.q}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-stone-900/10 bg-cream-200/50 py-20">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tightest md:text-4xl">
            Start with the free tier
          </h2>
          <p className="mt-4 text-stone-600">
            Five bullets every Friday. See if the voice fits.
            Upgrade when you're ready.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <NewsletterForm
              variant="leadMagnet"
              source="membership-bottom"
              cta="Join the Friday Five"
            />
          </div>
        </div>
      </section>

      {/* Contact footer note */}
      <div className="border-t border-stone-900/10 py-8 text-center text-sm text-stone-500">
        Questions? Email{" "}
        <a
          href={`mailto:${site.contact.email}`}
          className="text-bronze-600 hover:text-bronze-700"
        >
          {site.contact.email}
        </a>
      </div>
    </>
  );
}
