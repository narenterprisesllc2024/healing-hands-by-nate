import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyNewsletterBar from "@/components/StickyNewsletterBar";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`
  },
  description: `Therapeutic massage, Reiki, and life coaching in Union, Missouri with ${site.practitioner.firstName} — ${site.practitioner.fullTitle}, ${site.practitioner.yearsExperience}+ years experience.`,
  keywords: [
    "massage Union MO",
    "massage therapist Union Missouri",
    "deep tissue massage Union",
    "Swedish massage Union MO",
    "Reiki Union Missouri",
    "sports massage Franklin County",
    "life coach Union MO",
    "Lomi Lomi Missouri"
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: `Therapeutic massage, Reiki, and coaching in Union, MO with ${site.practitioner.yearsExperience}+ years experience.`,
    url: site.url,
    locale: "en_US",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    images: ["/og-default.jpg"]
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        {/* Umami analytics — privacy-first, self-hosted on umami.mysoviai.com */}
        <script
          defer
          src="https://umami.mysoviai.com/script.js"
          data-website-id="7865b4c2-420b-4a66-bfd0-8c86ed8b07e0"
          data-domains="healinghandsbynate.com"
        />
      </head>
      <body className="bg-cream-100 text-stone-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyNewsletterBar />
      </body>
    </html>
  );
}
