import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-stone-900/10 bg-forest-700 text-cream-200">
      <div className="container-wide grid grid-cols-1 gap-12 py-20 lg:grid-cols-4">
        <div>
          <h3 className="font-serif text-2xl tracking-tightest text-cream-50">
            {site.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
            {site.tagline}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-bronze-500">
            Located at
          </p>
          <p className="mt-2 text-sm text-cream-200">{site.contact.locatedAt}</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-bronze-500">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-cream-200/80 hover:text-cream-50"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-bronze-500">Visit</h4>
          <address className="mt-4 not-italic text-sm leading-relaxed text-cream-200/80">
            {site.contact.address.street}
            <br />
            {site.contact.address.city}, {site.contact.address.state}{" "}
            {site.contact.address.zip}
          </address>
          <p className="mt-4 text-sm">
            <a
              href={`tel:${site.contact.phoneRaw}`}
              className="text-cream-200/80 hover:text-cream-50"
            >
              {site.contact.phone}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href={`mailto:${site.contact.email}`}
              className="text-cream-200/80 hover:text-cream-50"
            >
              {site.contact.email}
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-bronze-500">Hours</h4>
          <ul className="mt-4 space-y-1.5 text-sm text-cream-200/80">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-cream-200/60">
                  {h.open && h.close ? `${formatHour(h.open)} – ${formatHour(h.close)}` : h.note}
                </span>
              </li>
            ))}
          </ul>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-6 bg-bronze-500 text-cream-50 hover:bg-bronze-600"
          >
            Book Online
          </a>
        </div>
      </div>

      <div className="border-t border-cream-200/10">
        <div className="container-wide flex flex-col items-start justify-between gap-3 py-6 text-xs text-cream-200/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Crafted with intention in {site.contact.address.city}, {site.contact.address.state}.
          </p>
        </div>
      </div>
    </footer>
  );
}

function formatHour(time: string) {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m === 0 ? `${hour}${ampm}` : `${hour}:${m.toString().padStart(2, "0")}${ampm}`;
}
