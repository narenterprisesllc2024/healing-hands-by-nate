import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servingAreas, getServingArea } from "@/lib/serving";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { faqSchema, breadcrumbSchema } from "@/lib/seo";
import BookingCTA from "@/components/BookingCTA";

type Params = { slug: string };

export function generateStaticParams() {
  return servingAreas.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const a = getServingArea(params.slug);
  if (!a) return {};
  const url = `${site.url}/serving/${a.slug}`;
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: a.metaTitle,
      description: a.metaDescription,
      url,
      type: "article"
    }
  };
}

export default function ServingAreaPage({ params }: { params: Params }) {
  const a = getServingArea(params.slug);
  if (!a) notFound();

  // Show 4 most-relevant services as deep links
  const featuredServices = services.slice(0, 4);
  const others = servingAreas.filter((sa) => sa.slug !== a.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(a.faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Service Area", url: `${site.url}/serving` },
              { name: a.town, url: `${site.url}/serving/${a.slug}` }
            ])
          )
        }}
      />

      <article>
        <header className="container-wide pb-10 pt-16 lg:pt-24">
          <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-stone-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/serving" className="hover:text-stone-700">Service Area</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">{a.town}, {a.state}</span>
          </nav>
          <p className="eyebrow mt-8">{a.distanceMinutes} minute drive · serving</p>
          <h1 className="display mt-3 max-w-3xl">
            Massage therapist serving {a.town}, {a.state}
          </h1>
        </header>

        <div className="container-wide grid gap-12 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="prose-warm text-base lg:text-lg">
              <p>{a.intro}</p>
            </div>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Who comes in from {a.town}
              </h2>
              <ul className="mt-5 space-y-2.5 text-stone-700">
                {a.whoComesFromHere.map((w, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-bronze-600">·</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Most-booked sessions
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {featuredServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-2xl border border-stone-900/10 bg-cream-50/50 p-4 hover:border-bronze-500/40 hover:bg-cream-50"
                  >
                    <p className="font-serif text-lg tracking-tightest text-stone-900">
                      {s.name}
                    </p>
                    <p className="mt-1 text-sm text-stone-600">{s.duration}</p>
                  </Link>
                ))}
              </div>
              <p className="mt-5">
                <Link href="/services" className="text-bronze-600 hover:text-bronze-700">
                  See all services →
                </Link>
              </p>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Getting here from {a.town}
              </h2>
              <p className="mt-5 text-stone-700">{a.drivingNotes}</p>
            </section>

            <section className="mt-14">
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Common questions
              </h2>
              <div className="mt-5 space-y-6">
                {a.faqs.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-serif text-lg tracking-tightest text-stone-900">{f.q}</h3>
                    <p className="mt-2 text-stone-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <BookingCTA
                heading={`Book from ${a.town}`}
                body={`${a.distanceMinutes} min drive. ${site.contact.address.street}, ${site.contact.address.city}.`}
              />
              <div className="rounded-2xl border border-stone-900/10 bg-cream-50/60 p-7">
                <p className="eyebrow">Also serving</p>
                <ul className="mt-4 space-y-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/serving/${o.slug}`} className="group flex items-center justify-between">
                        <span className="font-serif text-lg tracking-tightest text-stone-900 group-hover:text-bronze-600">
                          {o.town}, {o.state}
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
