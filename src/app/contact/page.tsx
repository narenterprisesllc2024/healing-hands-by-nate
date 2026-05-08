import type { Metadata } from "next";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.practitioner.firstName} at ${site.name}. Questions before booking? Looking for a service that's not listed? Send a message.`,
  alternates: { canonical: `${site.url}/contact` }
};

export default function ContactPage() {
  return (
    <section className="container-wide grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
      <div className="lg:col-span-5">
        <p className="eyebrow">Get in touch</p>
        <h1 className="display mt-3">Have a question? Send a message.</h1>
        <p className="mt-6 max-w-prose text-stone-700">
          For booking, the fastest path is{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="text-bronze-600 underline underline-offset-4 hover:text-bronze-700"
          >
            Vagaro
          </a>
          . For everything else — questions before your first session, custom service
          requests, gift sessions, anything — drop a note and I'll come back to you
          within a day or two.
        </p>

        <div className="mt-10 space-y-6">
          <Detail label="Phone" value={site.contact.phone} href={`tel:${site.contact.phoneRaw}`} />
          <Detail label="Email" value={site.contact.email} href={`mailto:${site.contact.email}`} />
          <Detail
            label="Visit"
            value={`${site.contact.locatedAt} · ${site.contact.address.street}, ${site.contact.address.city}, ${site.contact.address.state} ${site.contact.address.zip}`}
          />
          <Detail label="Hours" value={site.hoursDisplay} />
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-stone-900/10 bg-cream-50/60 p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      {href ? (
        <a
          href={href}
          className="mt-1 block font-serif text-lg tracking-tightest text-stone-900 hover:text-bronze-600"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 font-serif text-lg tracking-tightest text-stone-900">{value}</p>
      )}
    </div>
  );
}
