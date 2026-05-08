import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import BookingCTA from "@/components/BookingCTA";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const s = getService(params.slug);
  if (!s) return {};
  const url = `${site.url}/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url,
      type: "article"
    }
  };
}

export default function ServicePage({ params }: { params: Params }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const others = services.filter((sv) => sv.slug !== s.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(s.slug)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(s.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Services", url: `${site.url}/services` },
              { name: s.name, url: `${site.url}/services/${s.slug}` }
            ])
          )
        }}
      />

      <article>
        <header className="container-wide pb-10 pt-16 lg:pt-24">
          <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-stone-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-stone-700">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">{s.name}</span>
          </nav>
          <p className="eyebrow mt-8">{s.duration}</p>
          <h1 className="display mt-3 max-w-3xl">{s.name}</h1>
          <p className="mt-5 max-w-prose text-lg italic text-bronze-500">{s.tagline}</p>
        </header>

        <div className="container-wide grid gap-12 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="prose-warm text-base lg:text-lg">
              <p>{s.intro}</p>
            </div>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                What it helps with
              </h2>
              <ul className="mt-5 space-y-2.5 text-stone-700">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-bronze-600">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Especially good for
              </h2>
              <ul className="mt-5 grid gap-2.5 text-stone-700 sm:grid-cols-2">
                {s.goodFor.map((g) => (
                  <li key={g} className="flex gap-3">
                    <span className="text-bronze-600">·</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                What to expect
              </h2>
              <ol className="mt-5 space-y-3 text-stone-700">
                {s.whatToExpect.map((w, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-serif text-xl tracking-tightest text-bronze-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{w}</span>
                  </li>
                ))}
              </ol>
            </section>

            {s.faqs.length > 0 && (
              <section className="mt-14">
                <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                  Common questions
                </h2>
                <div className="mt-5 space-y-6">
                  {s.faqs.map((f, i) => (
                    <div key={i}>
                      <h3 className="font-serif text-lg tracking-tightest text-stone-900">
                        {f.q}
                      </h3>
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
                heading={`Book a ${s.shortName} session`}
                body={`${s.duration}. Booking through Vagaro at ${site.contact.locatedAt}.`}
              />
              <div className="rounded-2xl border border-stone-900/10 bg-cream-50/60 p-7">
                <p className="eyebrow">Other services</p>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/services/${o.slug}`}
                        className="group flex items-center justify-between"
                      >
                        <span className="font-serif text-lg tracking-tightest text-stone-900 group-hover:text-bronze-600">
                          {o.name}
                        </span>
                        <span className="text-stone-500 group-hover:text-bronze-600">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-5 inline-flex text-sm font-medium text-bronze-600 hover:text-bronze-700"
                >
                  See all services →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <BookingCTA variant="section" />
    </>
  );
}
