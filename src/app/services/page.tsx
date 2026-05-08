import type { Metadata } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Services — Massage, Reiki & Coaching in Union, MO",
  description: `All ${services.length} services offered by ${site.practitioner.firstName} at ${site.name}: Swedish, deep tissue, sports, Reiki, Lomi Lomi, hot stone, trigger point, lymphatic drainage, cupping, and life coaching.`,
  alternates: { canonical: `${site.url}/services` }
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-wide py-20 lg:py-28">
        <p className="eyebrow">Services</p>
        <h1 className="display mt-3 max-w-3xl">
          Bodywork that meets you where you are.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-stone-700">
          {services.length} modalities, one practitioner. You don't need to know exactly
          what you need before you book — call or send a message and we'll figure out
          where to start. Most clients end up doing a few different services over time,
          depending on what their body is asking for that month.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <BookingCTA variant="section" />
    </>
  );
}
