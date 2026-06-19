import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { conditions, getCondition } from "@/lib/conditions";
import { site } from "@/lib/site";
import { faqSchema, breadcrumbSchema } from "@/lib/seo";
import BookingCTA from "@/components/BookingCTA";

type Params = { slug: string };

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const c = getCondition(params.slug);
  if (!c) return {};
  const url = `${site.url}/conditions/${c.slug}`;
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      type: "article"
    }
  };
}

export default function ConditionPage({ params }: { params: Params }) {
  const c = getCondition(params.slug);
  if (!c) notFound();

  const others = conditions.filter((co) => co.slug !== c.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(c.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Conditions", url: `${site.url}/conditions` },
              { name: c.name, url: `${site.url}/conditions/${c.slug}` }
            ])
          )
        }}
      />

      <article>
        <header className="container-wide pb-10 pt-16 lg:pt-24">
          <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-stone-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/conditions" className="hover:text-stone-700">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">{c.name}</span>
          </nav>
          <p className="eyebrow mt-8">Get help with</p>
          <h1 className="display mt-3 max-w-3xl">{c.name}</h1>
          <p className="mt-5 max-w-prose text-lg italic text-bronze-500">{c.tagline}</p>
        </header>

        <div className="container-wide grid gap-12 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="prose-warm text-base lg:text-lg">
              <p>{c.intro}</p>
            </div>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Why it happens
              </h2>
              <ul className="mt-5 space-y-2.5 text-stone-700">
                {c.whyItHappens.map((w, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-bronze-600">·</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                What helps
              </h2>
              <div className="mt-5 space-y-5">
                {c.whatHelps.map((m, i) => (
                  <div key={i} className="rounded-2xl border border-stone-900/10 bg-cream-50/50 p-5">
                    <Link href={`/services/${m.slug}`} className="font-serif text-lg tracking-tightest text-stone-900 hover:text-bronze-600">
                      {m.modality} →
                    </Link>
                    <p className="mt-2 text-stone-700">{m.why}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Try first at home
              </h2>
              <ul className="mt-5 space-y-2.5 text-stone-700">
                {c.selfCareFirst.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-bronze-600">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                When to book a session
              </h2>
              <ul className="mt-5 space-y-2.5 text-stone-700">
                {c.whenToCallProfessional.map((w, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-bronze-600">·</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14 rounded-2xl border border-stone-900/10 bg-cream-100/60 p-6">
              <h2 className="font-serif text-xl tracking-tightest text-stone-900">
                Straight talk: when this isn't my work
              </h2>
              <p className="mt-3 text-stone-700">{c.whenToReferOut}</p>
            </section>

            {c.faqs.length > 0 && (
              <section className="mt-14">
                <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                  Common questions
                </h2>
                <div className="mt-5 space-y-6">
                  {c.faqs.map((f, i) => (
                    <div key={i}>
                      <h3 className="font-serif text-lg tracking-tightest text-stone-900">{f.q}</h3>
                      <p className="mt-2 text-stone-700">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <BookingCTA
                heading={`Book a session for ${c.shortName.toLowerCase()}`}
                body={`60 or 90 minutes. Booking through Vagaro at ${site.contact.locatedAt}.`}
              />
              <div className="rounded-2xl border border-stone-900/10 bg-cream-50/60 p-7">
                <p className="eyebrow">Other things I help with</p>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/conditions/${o.slug}`} className="group flex items-center justify-between">
                        <span className="font-serif text-lg tracking-tightest text-stone-900 group-hover:text-bronze-600">
                          {o.name}
                        </span>
                        <span className="text-stone-500 group-hover:text-bronze-600">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <BookingCTA variant="section" />
    </>
  );
}
