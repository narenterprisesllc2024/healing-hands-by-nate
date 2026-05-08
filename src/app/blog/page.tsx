import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostMeta } from "@/lib/blog";
import { site } from "@/lib/site";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Journal — Notes on Bodywork, Recovery & Self-Care",
  description: `Honest writing on massage, Reiki, life coaching, and self-care from ${site.practitioner.firstName}, a Licensed Massage Therapist with ${site.practitioner.yearsExperience}+ years experience in Union, MO.`,
  alternates: { canonical: `${site.url}/blog` }
};

export default async function BlogIndex() {
  const posts = await getAllPostMeta();
  return (
    <section className="container-wide py-20 lg:py-28">
      <p className="eyebrow">Journal</p>
      <h1 className="display mt-3 max-w-3xl">
        Notes from the table.
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-relaxed text-stone-700">
        Honest, useful writing on bodywork, recovery, and self-care that holds up between
        sessions. New posts when I have something worth saying.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <ul className="divide-y divide-stone-900/10">
            {posts.map((p) => (
              <li key={p.slug} className="py-8 first:pt-0">
                <Link href={`/blog/${p.slug}`} className="group block">
                  <p className="eyebrow">
                    {new Date(p.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}{" "}
                    · {p.readingMinutes} min read
                  </p>
                  <h2 className="mt-2 font-serif text-2xl tracking-tightest text-stone-900 group-hover:text-bronze-600 md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-prose text-stone-700">
                    {p.excerpt || p.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-medium text-bronze-600 group-hover:text-bronze-700">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
            {posts.length === 0 && (
              <li className="py-8 text-stone-500">First post coming soon.</li>
            )}
          </ul>
        </div>
        <aside className="lg:col-span-4">
          <div className="sticky top-28">
            <NewsletterForm />
          </div>
        </aside>
      </div>
    </section>
  );
}
