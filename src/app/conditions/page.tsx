import type { Metadata } from "next";
import Link from "next/link";
import { conditions } from "@/lib/conditions";
import { site } from "@/lib/site";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: { absolute: `Conditions I Help With — ${site.name}` },
  description: `Real help for neck pain, lower back pain, desk job shoulders, tension headaches, and chronic stress — from a Licensed Massage Therapist in Union, Missouri with 12+ years on the table.`,
  alternates: { canonical: `${site.url}/conditions` }
};

export default function ConditionsIndexPage() {
  return (
    <>
      <section className="container-wide py-20 lg:py-28">
        <p className="eyebrow">What I help with</p>
        <h1 className="display mt-3 max-w-3xl">
          Most people come in for one of these.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-stone-700">
          Massage isn't one-size-fits-all. The right kind of work depends on what's actually
          going on in your body. Pick the thing that sounds closest to what you're dealing
          with — each page walks through what's likely causing it, what helps, what to try
          first, and when to book.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <Link
              key={c.slug}
              href={`/conditions/${c.slug}`}
              className="group rounded-2xl border border-stone-900/10 bg-cream-50/60 p-7 transition hover:border-bronze-500/40 hover:bg-cream-50"
            >
              <h2 className="font-serif text-xl tracking-tightest text-stone-900 group-hover:text-bronze-600">
                {c.name}
              </h2>
              <p className="mt-3 text-stone-700">{c.tagline}</p>
              <p className="mt-4 text-sm font-medium text-bronze-600 group-hover:text-bronze-700">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <BookingCTA variant="section" />
    </>
  );
}
