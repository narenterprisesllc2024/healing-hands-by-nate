"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About Nate" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-900/5 bg-cream-100/85 backdrop-blur">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/photos/logo-horizontal.jpg"
            alt={site.name}
            width={1500}
            height={500}
            priority
            className="h-12 w-auto rounded-md md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm tracking-wide text-stone-700 hover:text-bronze-600"
            >
              {n.label}
            </Link>
          ))}
          <a href={site.bookingUrl} target="_blank" rel="noopener" className="btn-primary">
            Book a Session
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-stone-900" />
            <span className="block h-px w-6 bg-stone-900" />
            <span className="block h-px w-6 bg-stone-900" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-900/5 bg-cream-100 md:hidden">
          <div className="container-wide flex flex-col gap-1 py-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-base text-stone-800"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="btn-primary mt-3 self-start"
              onClick={() => setOpen(false)}
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
