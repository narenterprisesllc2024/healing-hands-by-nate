import { site } from "@/lib/site";

type Props = {
  variant?: "default" | "section";
  heading?: string;
  body?: string;
};

export default function BookingCTA({
  variant = "default",
  heading = "Ready to feel like yourself again?",
  body = `Booking happens through Vagaro at ${site.contact.locatedAt}. Pick a time that works, and I'll see you in the room.`
}: Props) {
  if (variant === "section") {
    return (
      <section className="mt-24 bg-forest-700 py-24 text-cream-100">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-bronze-500">Booking</p>
            <h2 className="display mt-3 text-cream-50">{heading}</h2>
            <p className="mt-5 max-w-prose text-cream-200/80">{body}</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="btn-primary bg-bronze-500 hover:bg-bronze-600"
            >
              Book on Vagaro →
            </a>
            <a
              href={`tel:${site.contact.phoneRaw}`}
              className="text-sm text-cream-200/70 hover:text-cream-50"
            >
              Or call {site.contact.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="rounded-2xl border border-stone-900/10 bg-cream-200/60 p-8">
      <h3 className="font-serif text-2xl tracking-tightest">{heading}</h3>
      <p className="mt-3 max-w-prose text-stone-700">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener"
          className="btn-primary"
        >
          Book on Vagaro
        </a>
        <a href={`tel:${site.contact.phoneRaw}`} className="btn-secondary">
          Call {site.contact.phone}
        </a>
      </div>
    </div>
  );
}
