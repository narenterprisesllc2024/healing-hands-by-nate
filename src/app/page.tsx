import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import BookingCTA from "@/components/BookingCTA";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-100">
        <div className="container-wide grid items-center gap-12 pb-16 pt-12 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow">Massage · Reiki · Coaching · Union, MO</p>
            <h1 className="display-xl mt-5">
              Therapeutic touch
              <br />
              that <em className="not-italic text-bronze-600">actually</em> moves
              the needle.
            </h1>
            <p className="mt-7 max-w-prose text-lg leading-relaxed text-stone-700">
              I'm {site.practitioner.firstName} — Licensed Massage Therapist, Reiki
              Master, and Certified Life Coach with {site.practitioner.yearsExperience}+
              years in the room. The work I do is deliberate, attentive, and rooted in
              what your body is actually asking for. No rushed sessions. No template
              massages. Just real bodywork from someone who's been doing this a while.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Book a Session
              </a>
              <Link href="/services" className="btn-secondary">
                Browse Services
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-900/10 pt-8 text-sm">
              <div>
                <dt className="eyebrow">Experience</dt>
                <dd className="mt-1 font-serif text-2xl tracking-tightest text-stone-900">
                  {site.practitioner.yearsExperience}+ yrs
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Modalities</dt>
                <dd className="mt-1 font-serif text-2xl tracking-tightest text-stone-900">
                  {services.length}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Located</dt>
                <dd className="mt-1 font-serif text-2xl tracking-tightest text-stone-900">
                  Union, MO
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-700">
              <Image
                src="/photos/nate-hero.jpg"
                alt={`${site.practitioner.firstName} — ${site.practitioner.fullTitle}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent p-8">
                <div className="rounded-xl bg-cream-100/95 px-5 py-4 text-stone-900 shadow-xl backdrop-blur">
                  <p className="font-serif text-lg leading-snug tracking-tightest">
                    &ldquo;Slow down. Drop in. Let your body tell us where to start.&rdquo;
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-bronze-500">
                    — {site.practitioner.firstName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-stone-900/10 bg-cream-200/50">
        <div className="container-wide grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          {site.practitioner.credentials.map((c) => (
            <div key={c} className="flex items-center gap-3">
              <span className="h-8 w-px bg-bronze-500" />
              <span className="font-serif text-base tracking-tightest text-stone-900">
                {c}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-wide py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">What I offer</p>
            <h2 className="display mt-3">
              Ten ways back into your body.
            </h2>
            <p className="mt-5 max-w-prose text-stone-700">
              Every body is asking for something specific. Pick what you know you need —
              or call and we'll figure it out together.
            </p>
            <Link href="/services" className="mt-7 inline-flex text-sm font-medium text-bronze-600 hover:text-bronze-700">
              See all services →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-forest-700 text-cream-100">
        <div className="container-wide grid items-center gap-12 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-700">
              <Image
                src="/photos/nate-about.jpg"
                alt={`${site.practitioner.firstName}, ${site.practitioner.fullTitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow text-bronze-500">About Nate</p>
            <h2 className="display mt-3 text-cream-50">
              Twelve years in. Still learning.
            </h2>
            <div className="prose-warm mt-6 text-cream-200/85">
              <p>
                Bodywork chose me before I chose it. After a decade plus on the table —
                hands on thousands of bodies — I've stopped pretending there's one right
                way. Some clients need deep tissue and brutal honesty. Some need Reiki
                and ten minutes of nothing. Most need both, in some order, depending on
                the week.
              </p>
              <p>
                I trained in massage. I became a Reiki Master. I got certified as a Life
                Coach because I kept watching people's bodies tell stories their words
                hadn't caught up to yet. The work is integrated now — and it's better
                for it.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-medium text-bronze-500 hover:text-bronze-500"
            >
              Read the longer story →
            </Link>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="container-wide py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Free download</p>
            <h2 className="display mt-3">The Neck Reset</h2>
            <p className="mt-5 max-w-prose text-stone-700">
              A short PDF I put together for clients between sessions — the exact
              self-care sequence I walk people through when their neck has had it.
              Five minutes, no equipment, real relief. Drop your email and I'll send
              it over.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-stone-700">
              <li className="flex gap-3"><span className="text-bronze-600">·</span> Three releases for the muscles that drive most neck pain</li>
              <li className="flex gap-3"><span className="text-bronze-600">·</span> When to push and when to back off</li>
              <li className="flex gap-3"><span className="text-bronze-600">·</span> The breathing piece nobody tells you about</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-stone-900/10 bg-cream-200/40 p-8">
              <p className="eyebrow">Get the guide</p>
              <h3 className="mt-2 font-serif text-2xl tracking-tightest">
                Neck Reset PDF
              </h3>
              <p className="mt-2 text-sm text-stone-700">
                Sent straight to your inbox. No spam — just the occasional note worth opening.
              </p>
              <div className="mt-5">
                <NewsletterForm
                  variant="leadMagnet"
                  source="neck-reset"
                  cta="Send the PDF"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA variant="section" />
    </>
  );
}
