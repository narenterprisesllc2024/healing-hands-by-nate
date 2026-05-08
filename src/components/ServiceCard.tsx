import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-stone-900/10 bg-cream-50/60 p-7 transition hover:-translate-y-0.5 hover:border-bronze-500/40 hover:bg-cream-50"
    >
      <div>
        <p className="eyebrow">{service.duration}</p>
        <h3 className="mt-3 font-serif text-2xl tracking-tightest text-stone-900">
          {service.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-stone-700">{service.tagline}</p>
      </div>
      <span className="mt-6 inline-flex items-center text-sm font-medium text-bronze-600 group-hover:text-bronze-700">
        Learn more
        <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}
