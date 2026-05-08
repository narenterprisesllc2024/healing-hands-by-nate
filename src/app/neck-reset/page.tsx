import type { Metadata } from "next";
import { site } from "@/lib/site";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Free PDF: The Neck Reset",
  description:
    "Download Nate's Neck Reset — a 5-minute self-care sequence for chronic neck pain. Three releases, breathing technique, and when to push or back off.",
  alternates: { canonical: `${site.url}/neck-reset` }
};

export default function NeckResetLanding() {
  return (
    <section className="container-wide py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">Free download</p>
          <h1 className="display mt-3">The Neck Reset</h1>
          <p className="mt-5 text-lg italic text-bronze-500">
            Five minutes. No equipment. Real relief.
          </p>
          <div className="prose-warm mt-8">
            <p>
              I built this PDF for clients who text me at 11pm with "my neck is killing
              me, what do I do?" It's the same sequence I walk people through between
              sessions — the one that actually works when you do it.
            </p>
            <p>Inside:</p>
          </div>
          <ul className="mt-5 space-y-3 text-stone-700">
            <li className="flex gap-3">
              <span className="text-bronze-600">·</span>
              <span>Three releases for the muscles that drive most chronic neck pain (it's not the neck)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-bronze-600">·</span>
              <span>The breathing piece almost everybody skips — and why it changes everything</span>
            </li>
            <li className="flex gap-3">
              <span className="text-bronze-600">·</span>
              <span>When to push, when to back off, and when to come see me</span>
            </li>
            <li className="flex gap-3">
              <span className="text-bronze-600">·</span>
              <span>How often to do it (less than you'd think)</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-stone-900/10 bg-cream-200/40 p-8 md:p-10">
            <p className="eyebrow">Get the PDF</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tightest">
              Send me the guide
            </h2>
            <p className="mt-3 text-stone-700">
              I'll email it over right away. You'll also get the occasional Journal post —
              short, honest, and you can unsubscribe anytime.
            </p>
            <div className="mt-6">
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
  );
}
