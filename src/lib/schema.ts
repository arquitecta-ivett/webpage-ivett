import { absoluteUrl, img, photos, site } from "./site";
import type { Faq, Service } from "./services";
import type { Post } from "./posts";

const businessId = `${site.url}/#negocio`;
const personId = `${site.url}/#ivett`;

export function businessSchema() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["GeneralContractor", "LocalBusiness"],
        "@id": businessId,
        name: site.name,
        description:
          "Arquitecta directora de obra con más de 25 años de experiencia en remodelación, construcción, adecuación de locales y mantenimiento locativo en Medellín y Colombia.",
        url: site.url,
        image: img(photos.heroInterior, 1200),
        logo: absoluteUrl("/icon.svg"),
        telephone: `+${site.whatsapp}`,
        email: site.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        areaServed: [
          ...site.areaServed.map((name) => ({ "@type": "City", name })),
          { "@type": "Country", name: "Colombia" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
        ],
        founder: { "@id": personId },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.person,
        jobTitle: site.jobTitle,
        worksFor: { "@id": businessId },
        url: absoluteUrl("/arquitecta-ivett-diaz"),
        knowsAbout: [
          "Dirección de obra",
          "Remodelación de apartamentos",
          "Construcción de vivienda",
          "Acabados arquitectónicos",
          "Mantenimiento locativo",
          "NSR-10",
          "RETIE",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#web`,
        url: site.url,
        name: site.name,
        inLanguage: "es-CO",
        publisher: { "@id": businessId },
      },
    ],
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: absoluteUrl(`/servicios/${s.slug}`),
    image: img(s.image, 1200),
    provider: { "@id": businessId },
    areaServed: [{ "@type": "City", name: "Medellín" }, { "@type": "Country", name: "Colombia" }],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function articleSchema(p: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    image: img(p.image, 1200),
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    inLanguage: "es-CO",
    mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
    author: { "@id": personId, "@type": "Person", name: site.person },
    publisher: { "@id": businessId },
  };
}
