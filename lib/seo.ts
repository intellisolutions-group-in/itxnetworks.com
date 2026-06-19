import type { Metadata } from "next";
import { company, siteUrl } from "@/lib/company";

type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  type?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

/** Default share image — site icon until a dedicated OG asset is added. */
export const DEFAULT_OG_IMAGE = `${siteUrl}/icon.svg`;

export function buildPageUrl(path = ""): string {
  if (!path || path === "/") return `${siteUrl}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? `${siteUrl}${normalized}` : `${siteUrl}${normalized}/`;
}

function buildSharedMetadata(fullTitle: string, description: string, url: string, type: "website" | "article") {
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.brandName,
      locale: "en_IN",
      type,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 512,
          height: 512,
          alt: `${company.brandName} — Software Development in India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createMetadata({
  title,
  description,
  keywords = [],
  path = "",
  type = "website",
}: PageMeta): Metadata {
  const url = buildPageUrl(path);
  const fullTitle =
    path === "" || path === "/"
      ? `${company.brandName} — ${title}`
      : `${title} | ${company.brandName}`;

  return {
    ...buildSharedMetadata(fullTitle, description, url, type),
    keywords: [company.brandName, "software development", "IT services India", ...keywords],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    url: siteUrl,
    email: company.email,
    foundingDate: String(company.establishedYear),
    description: company.description,
    areaServed: {
      "@type": "Country",
      name: company.targetCountry,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brandName,
    url: siteUrl,
    description: company.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: company.brandName,
      url: siteUrl,
    },
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: buildPageUrl(path),
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: company.brandName,
      url: siteUrl,
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildPageUrl(item.path),
    })),
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: company.brandName,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: company.targetCountry,
    },
    url: buildPageUrl(path),
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; url: string; description?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function articleSchema(
  title: string,
  description: string,
  path: string,
  publishedDate: string,
  author: string
) {
  const url = buildPageUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: company.brandName,
      url: siteUrl,
    },
    datePublished: publishedDate,
    dateModified: publishedDate,
    image: DEFAULT_OG_IMAGE,
    url,
    mainEntityOfPage: url,
    inLanguage: "en-IN",
  };
}

export function flattenFaqItems(
  sections: { category: string; items: FaqItem[] }[]
): FaqItem[] {
  return sections.flatMap((section) => section.items);
}
