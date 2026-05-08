import { site } from "./site";
import { services } from "./services";

export function localBusinessSchema() {
  const dayMap: Record<string, string> = {
    Monday: "Mo",
    Tuesday: "Tu",
    Wednesday: "We",
    Thursday: "Th",
    Friday: "Fr",
    Saturday: "Sa",
    Sunday: "Su"
  };
  const openingHours = site.hours
    .filter((h) => h.open && h.close)
    .map((h) => `${dayMap[h.day]} ${h.open}-${h.close}`);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "MedicalBusiness"],
    name: site.name,
    image: `${site.url}/og-default.png`,
    "@id": site.url,
    url: site.url,
    telephone: site.contact.phoneRaw,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.street,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      postalCode: site.contact.address.zip,
      addressCountry: site.contact.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.geo.lat,
      longitude: site.contact.geo.lng
    },
    openingHours,
    areaServed: site.serviceArea.map((city) => ({ "@type": "City", name: city })),
    description: `Therapeutic massage, Reiki, and life coaching in ${site.contact.address.city}, ${site.contact.address.state} with ${site.practitioner.firstName} — ${site.practitioner.fullTitle}, ${site.practitioner.yearsExperience}+ years experience.`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.tagline },
        url: `${site.url}/services/${s.slug}`
      }))
    }
  };
}

export function serviceSchema(slug: string) {
  const s = services.find((sv) => sv.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    serviceType: s.name,
    provider: { "@type": "LocalBusiness", name: site.name, "@id": site.url },
    areaServed: site.serviceArea.map((city) => ({ "@type": "City", name: city })),
    url: `${site.url}/services/${s.slug}`
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}
