import type { Metadata } from "next";
import Link from "next/link";
import { servingAreas } from "@/lib/serving";
import { site } from "@/lib/site";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: { absolute: `Service Area — Towns I See Clients From | ${site.name}` },
  description: `Serving Union, Washington, Pacific, Sullivan, St. Clair, and the greater Franklin County, Missouri area. 12+ years of therapeutic massage from the practice in downtown Union.`,
  alternates: { canonical: `${site.url}/serving` }
};

export default function ServingIndexPage() {
  return (
    <>
      <section className="container-wide py-20 lg:py-28">
        <p className="eyebrow">Service Area</p>
        <h1 className="display mt-3 max-w-3xl">
          Where my clients drive in from.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-stone-700">
          The practice is in downtown Union, Missouri — at {site.contact.address.street}, inside
          {" "}{site.contact.locatedAt}. Most of my regulars are within a 30-minute drive. If
          you're in any of these towns, here's what to know about coming in.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servingAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/serving/${a.slug}`}
              className="group rounded-2xl border border-stone-900/10 bg-cream-50/60 p-7 transition hover:border-bronze-500/40 hover:bg-cream-50"
            >
              <p className="eyebrow">{a.distanceMinutes} min drive</p>
              <h2 className="mt-3 font-serif text-xl tracking-tightest text-stone-900 group-hover:text-bronze-600">
                {a.town}, {a.state}
              </h2>
              <p className="mt-4 text-sm font-medium text-bronze-600 group-hover:text-bronze-700">
                Coming in from {a.town} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <BookingCTA variant="section" />
    </>
  );
}
