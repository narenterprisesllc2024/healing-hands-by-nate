import { site } from "./site";
import { services } from "./services";

// Stable @id values for entity linking across the site.
// These create explicit graph relationships that AI crawlers + search engines
// use to resolve "the practitioner who works for the business that offers these services."
export const ids = {
  business: `${site.url}/#business`,
  practitioner: `${site.url}/#practitioner`,
  website: `${site.url}/#website`
};

function sameAsForBusiness(): string[] {
  const out: string[] = [];
  if (site.socials.vagaro) out.push(site.socials.vagaro);
  if (site.socials.google) out.push(site.socials.google);
  if (site.socials.facebook) out.push(site.socials.facebook);
  if (site.socials.instagram) out.push(site.socials.instagram);
  return out;
}

// Inline Person object used inside @graph (no @context).
function personSchemaForGraph() {
  return {
    "@type": "Person",
    "@id": ids.practitioner,
    name: `${site.practitioner.firstName} Ratcliff`,
    givenName: site.practitioner.firstName,
    familyName: "Ratcliff",
    jobTitle: site.practitioner.fullTitle,
    description: `Licensed Massage Therapist, Reiki Master, and Certified Life Coach with ${site.practitioner.yearsExperience}+ years of experience. Practices in Union, Missouri.`,
    image: `${site.url}/photos/nate-portrait.jpg`,
    url: `${site.url}/about`,
    worksFor: { "@id": ids.business },
    hasCredential: site.practitioner.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: c
    })),
    knowsAbout: [
      "Swedish massage",
      "Deep tissue massage",
      "Sports massage",
      "Trigger point therapy",
      "Lomi Lomi massage",
      "Hot stone massage",
      "Reiki energy work",
      "Lymphatic drainage massage",
      "Cupping therapy",
      "Myofascial release",
      "Nervous system regulation",
      "Chronic pain relief",
      "Life coaching"
    ],
    workLocation: {
      "@type": "Place",
      name: site.contact.locatedAt,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.address.street,
        addressLocality: site.contact.address.city,
        addressRegion: site.contact.address.state,
        postalCode: site.contact.address.zip,
        addressCountry: site.contact.address.country
      }
    }
  };
}

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
    "@graph": [
      {
        "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "MedicalBusiness"],
        "@id": ids.business,
        name: site.name,
        image: `${site.url}/og-default.png`,
        url: site.url,
        telephone: site.contact.phoneRaw,
        email: site.contact.email,
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
        sameAs: sameAsForBusiness(),
        founder: { "@id": ids.practitioner },
        employee: { "@id": ids.practitioner },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, description: s.tagline },
            url: `${site.url}/services/${s.slug}`
          }))
        }
      },
      personSchemaForGraph(),
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: site.url,
        name: site.name,
        publisher: { "@id": ids.business }
      }
    ]
  };
}

// Stand-alone Person schema for the /about page (with @context).
export function personSchema() {
  return {
    "@context": "https://schema.org",
    ...personSchemaForGraph()
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
    provider: { "@type": "LocalBusiness", "@id": ids.business, name: site.name },
    areaServed: site.serviceArea.map((city) => ({ "@type": "City", name: city })),
    url: `${site.url}/services/${s.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: site.bookingUrl,
      seller: { "@id": ids.business }
    }
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  description?: string;
  date: string;
  modified?: string;
  readingMinutes?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || "",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${post.slug}` },
    url: `${site.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: { "@id": ids.practitioner },
    publisher: { "@id": ids.business },
    image: `${site.url}/og-default.png`,
    inLanguage: "en-US"
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
