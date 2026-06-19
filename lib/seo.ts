import type { Metadata } from "next";
import { company, siteUrl } from "@/lib/company";

type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
};

export function createMetadata({
  title,
  description,
  keywords = [],
  path = "",
}: PageMeta): Metadata {
  const url = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const fullTitle = path === "" || path === "/"
    ? `${company.brandName} — ${title}`
    : `${title} | ${company.brandName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      company.brandName,
      "software development",
      "IT services India",
      ...keywords,
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.brandName,
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: url,
    },
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
    areaServed: company.targetCountry,
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
    areaServed: company.targetCountry,
    url: `${siteUrl}${path}`,
  };
}

export function articleSchema(
  title: string,
  description: string,
  path: string,
  publishedDate: string,
  author: string
) {
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
    mainEntityOfPage: `${siteUrl}${path}`,
  };
}
