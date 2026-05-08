import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: `About ${site.practitioner.firstName} — ${site.practitioner.fullTitle}`,
  description: `${site.practitioner.yearsExperience}+ years as a Licensed Massage Therapist, Reiki Master, and Certified Life Coach in Union, Missouri. Meet Nate and learn how he works.`,
  alternates: { canonical: `${site.url}/about` }
};

export default function AboutPage() {
  return (
    <>
      <section className="container-wide py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-28 relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-700">
              <Image
                src="/photos/nate-portrait.jpg"
                alt={`${site.practitioner.firstName}, ${site.practitioner.fullTitle}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h1 className="display mt-3">
              Hi — I'm {site.practitioner.firstName}.
            </h1>
            <div className="prose-warm mt-8">
              <p>
                I've been doing bodywork for {site.practitioner.yearsExperience}+ years.
                Long enough to have stopped chasing technique for technique's sake, and
                long enough to know that the most powerful thing on any given day is
                rarely the fanciest tool in the kit.
              </p>
              <p>
                I started in massage. Swedish, deep tissue, the standard track. Within a
                couple years I realized that for a lot of clients, the muscle was just
                the doorway — what was actually stuck was further in. That sent me to
                Reiki, and eventually to becoming a Reiki Master. The energy work
                changed how I did the manual work, and the manual work kept me grounded
                in what bodies actually do.
              </p>
              <p>
                Coaching came later. I kept noticing that clients would lie down with
                shoulder pain and get up wanting to talk about a job they hated, or a
                marriage they were avoiding, or a version of themselves they'd lost
                track of. The body knows first. So I trained, got certified, and added
                coaching to the practice. Now I get to work with people on both
                sides of the conversation.
              </p>
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                How I work
              </h2>
              <p>
                Three things, every session:
              </p>
              <ol className="space-y-3 list-decimal pl-5">
                <li>
                  <strong className="text-stone-900">Listen first.</strong> I want to
                  know what your body has been doing — not just what hurts. The story
                  matters.
                </li>
                <li>
                  <strong className="text-stone-900">Work with what's there.</strong>{" "}
                  Plans get adjusted. If you came in for deep tissue but your nervous
                  system needs Swedish today, we'll have that conversation.
                </li>
                <li>
                  <strong className="text-stone-900">Send you home with something
                  to do.</strong> I'm not the whole solution. Two sessions a month plus
                  the right home practice will outperform weekly massage and no
                  homework, every time.
                </li>
              </ol>
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Credentials
              </h2>
              <ul className="space-y-2">
                {site.practitioner.credentials.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="text-bronze-600">·</span> {c}
                  </li>
                ))}
              </ul>
              <h2 className="font-serif text-2xl tracking-tightest text-stone-900">
                Where you'll find me
              </h2>
              <p>
                I see clients out of <strong>{site.contact.locatedAt}</strong> at{" "}
                {site.contact.address.street}, {site.contact.address.city},{" "}
                {site.contact.address.state} {site.contact.address.zip}. Sessions
                Mondays, Wednesdays, and Fridays from 9 to 5, plus Saturdays by
                appointment. All booking goes through Vagaro — link below.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/services" className="btn-secondary mr-3">
                See services
              </Link>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA variant="section" />
    </>
  );
}
