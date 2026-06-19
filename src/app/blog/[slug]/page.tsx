import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostMeta, getPost } from "@/lib/blog";
import { site } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import BookingCTA from "@/components/BookingCTA";
import NewsletterForm from "@/components/NewsletterForm";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = await getAllPostMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: ["Nate Ratcliff"]
    }
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              slug: post.slug,
              title: post.title,
              description: post.description,
              date: post.date,
              readingMinutes: post.readingMinutes
            })
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Journal", url: `${site.url}/blog` },
              { name: post.title, url: `${site.url}/blog/${post.slug}` }
            ])
          )
        }}
      />

      <article className="container-wide py-16 lg:py-24">
        <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-stone-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-stone-700">Journal</Link>
        </nav>

        <header className="mt-8 max-w-3xl">
          <p className="eyebrow">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}{" "}
            · {post.readingMinutes} min read
          </p>
          <h1 className="display mt-3">{post.title}</h1>
          {post.description && (
            <p className="mt-5 text-lg italic text-bronze-500">{post.description}</p>
          )}
          <p className="mt-6 text-sm text-stone-600">
            Written by{" "}
            <Link href="/about" className="font-medium text-bronze-700 hover:text-bronze-800">
              Nate Ratcliff, LMT
            </Link>
            {" "}— Licensed Massage Therapist, Reiki Master, 12+ years on the table in Union, MO
          </p>
        </header>

        <div
          className="prose-warm prose-blog mt-12 max-w-prose text-base lg:text-lg"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-16 max-w-prose space-y-6">
          <NewsletterForm />
          <BookingCTA />
        </div>
      </article>
    </>
  );
}
