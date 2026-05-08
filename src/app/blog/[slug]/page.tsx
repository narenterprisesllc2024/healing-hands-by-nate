import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostMeta, getPost } from "@/lib/blog";
import { site } from "@/lib/site";
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
      publishedTime: post.date
    }
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
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
  );
}
