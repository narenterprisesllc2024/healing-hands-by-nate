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

type Tier = {
  name: string;
  slug: string;
  monthly_price: string;
  monthly_interval: string;
  yearly_price: string | null;
  yearly_interval: string | null;
  yearly_savings: string | null;
  description: string;
  features: string[];
  monthly_href: string | null;
  yearly_href: string | null;
  cta: null | "form";
  highlight: boolean;
};

const tiers: Tier[] = [
  {
    name: "Friday Five",
    slug: "free",
    monthly_price: "Free",
    monthly_interval: "",
    yearly_price: null,
    yearly_interval: null,
    yearly_savings: null,
    description:
      "Five bullets every Friday. Stretches, tools, honest notes from the table. No fluff.",
    features: [
      "Weekly email — 5 practical bullets",
      "Blog post highlights",
      "Seasonal self-care notes"
    ],
    monthly_href: null,
    yearly_href: null,
    cta: "form",
    highlight: false
  },
  {
    name: "Continuity",
    slug: "continuity",
    monthly_price: "$9",
    monthly_interval: "/mo",
    yearly_price: "$97",
    yearly_interval: "/yr",
    yearly_savings: "save $11",
    description:
      "One new between-sessions module every month, plus the full back-catalog. The same guidance I'd write on the back of a card after your session — productized so it's always there.",
    features: [
      "1 new PDF module per month + companion workbook",
      "Full back-catalog access",
      "Stretches, protocols, and recovery sequences",
      "Cancel anytime"
    ],
    monthly_href:
      "https://ghost.mysoviai.com/#/portal/signup/6a2c281ada72f1000177e8a3/monthly",
    yearly_href:
      "https://ghost.mysoviai.com/#/portal/signup/6a2c281ada72f1000177e8a3/yearly",
    cta: null,
    highlight: false
  },
  {
    name: "Between Sessions",
    slug: "between-sessions",
    monthly_price: "$19",
    monthly_interval: "/mo",
    yearly_price: "$197",
    yearly_interval: "/yr",
    yearly_savings: "save $31",
    description:
      "Everything in Continuity, plus a monthly bonus protocol — seasonal recovery sequences timed to what your body is actually dealing with right now.",
    features: [
      "Everything in Continuity",
      "Monthly bonus protocol (seasonal recovery)",
      "2 touchpoints per month",
      "Cancel anytime"
    ],
    monthly_href:
      "https://ghost.mysoviai.com/#/portal/signup/6a2c281bda72f1000177e8aa/monthly",
    yearly_href:
      "https://ghost.mysoviai.com/#/portal/signup/6a2c281bda72f1000177e8aa/yearly",
    cta: null,
    highlight: true
  },
  {
    name: "Inner Circle",
    slug: "inner-circle",
    monthly_price: "$39",
    monthly_interval: "/mo",
    yearly_price: "$397",
    yearly_interval: "/yr",
    yearly_savings: "save $71",
    description:
      "Everything above, plus a monthly long-form deep cut — 15-20 page PDF exploring one body or nervous-system topic at depth, with companion workbook. Members can submit questions; recurring themes become future deep cuts.",
    features: [
      "Everything in Between Sessions",
      "Monthly 15-20 page long-form deep cut PDF + workbook",
      "Member question intake — themes become future deep cuts",
      "Cancel anytime"
    ],
    monthly_href:
      "https://ghost.mysoviai.com/#/portal/signup/6a2c281bda72f1000177e8b1/monthly",
    yearly_href:
      "https://ghost.mysoviai.com/#/portal/signup/6a2c281bda72f1000177e8b1/yearly",
    cta: null,
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
    "30 daily PDF practices + companion workbook",
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

      {/* Early-member pricing notice */}
      <section className="pb-10">
        <div className="container-wide max-w-3xl">
          <div className="rounded-2xl border border-bronze-500/30 bg-bronze-500/5 px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-stone-700">
              <span className="font-medium text-bronze-700">Founding-member pricing.</span>{" "}
              Right now, every tier is PDF + companion workbook — built for self-directed
              learning. Video walkthroughs ship in a later stage. When they do, prices go up.
              Lock in today's pricing now and you keep it for as long as you stay subscribed.
            </p>
          </div>
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
                    {tier.monthly_price}
                  </span>
                  {tier.monthly_interval && (
                    <span className="text-sm text-stone-500">{tier.monthly_interval}</span>
                  )}
                </p>
                {tier.yearly_price && (
                  <p className="mt-1 text-xs text-stone-500">
                    or{" "}
                    <span className="font-medium text-stone-700">
                      {tier.yearly_price}
                      {tier.yearly_interval}
                    </span>{" "}
                    — <span className="text-bronze-600">{tier.yearly_savings}</span>
                  </p>
                )}
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
                <div className="mt-8 space-y-3">
                  {tier.cta === "form" ? (
                    <NewsletterForm
                      variant="leadMagnet"
                      source="membership-free"
                      cta="Join free"
                      stacked
                    />
                  ) : (
                    <>
                      {tier.monthly_href && (
                        <a
                          href={tier.monthly_href}
                          className={`btn w-full ${
                            tier.highlight
                              ? "bg-bronze-500 text-cream-50 hover:bg-bronze-600"
                              : "btn-primary"
                          }`}
                        >
                          Start monthly — {tier.monthly_price}
                          {tier.monthly_interval}
                        </a>
                      )}
                      {tier.yearly_href && (
                        <a
                          href={tier.yearly_href}
                          className="block text-center text-xs text-stone-500 underline underline-offset-2 hover:text-bronze-600"
                        >
                          Or pay yearly — {tier.yearly_price} ({tier.yearly_savings})
                        </a>
                      )}
                    </>
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
                body: "Each month, a new module lands — a written PDF guide with a companion workbook for the practices. Stretches, recovery protocols, and honest context about what your body is doing and why. Built for self-directed learning — read it, do it, come back to it."
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
                a: "Written PDF guides (8-12 pages, printable) with a companion workbook for the practices, prompts, and trackers. Self-directed — read it, do the work, come back to it. Video walkthroughs are on the roadmap and will be added at a later stage; when that happens, prices go up. Lock in today's pricing now."
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
                a: "Everything in Between Sessions, plus a monthly long-form deep cut — a 15-20 page written PDF + companion workbook exploring one body or nervous-system topic at depth. You can submit questions through your member portal; recurring themes shape future deep cuts. Monthly or yearly billing — pay yearly and save $71."
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
