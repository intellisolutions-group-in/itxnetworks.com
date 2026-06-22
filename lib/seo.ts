import type { Metadata } from "next";
import { company, siteUrl } from "@/lib/company";

type PageMeta = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

type CareerJob = {
  title: string;
  description: string;
  type: string;
  requirements: string[];
};

type PortfolioItem = {
  title: string;
  type: string;
  challenge: string;
  solution: string;
  outcome: string;
};

type TestimonialItem = {
  name: string;
  designation: string;
  quote: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const DEFAULT_OG_IMAGE = `${siteUrl}/images/logo.png`;

export function buildPageUrl(path = ""): string {
  if (!path || path === "/") return `${siteUrl}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? `${siteUrl}${normalized}` : `${siteUrl}${normalized}/`;
}

function buildSharedMetadata(
  fullTitle: string,
  description: string,
  url: string,
  type: "website" | "article",
  articleMeta?: Pick<PageMeta, "publishedTime" | "modifiedTime" | "authors">
) {
  const openGraph: Metadata["openGraph"] = {
    title: fullTitle,
    description,
    url,
    siteName: company.brandName,
    locale: "en_IN",
    type,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 3334,
        height: 834,
        alt: `${company.brandName} — Software Development in India`,
      },
    ],
  };

  if (type === "article" && articleMeta?.publishedTime) {
    openGraph.publishedTime = articleMeta.publishedTime;
    openGraph.modifiedTime = articleMeta.modifiedTime ?? articleMeta.publishedTime;
    if (articleMeta.authors?.length) {
      openGraph.authors = articleMeta.authors;
    }
  }

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    openGraph,
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
  publishedTime,
  modifiedTime,
  authors,
}: PageMeta): Metadata {
  const url = buildPageUrl(path);
  const fullTitle =
    path === "" || path === "/"
      ? `${company.brandName} — ${title}`
      : `${title} | ${company.brandName}`;

  const metadata: Metadata = {
    ...buildSharedMetadata(fullTitle, description, url, type, {
      publishedTime,
      modifiedTime,
      authors,
    }),
    keywords: [company.brandName, "software development", "IT services India", ...keywords],
  };

  if (type === "article" && authors?.length) {
    metadata.authors = authors.map((name) => ({ name }));
  }

  return metadata;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: DEFAULT_OG_IMAGE,
    },
    email: company.email,
    foundingDate: String(company.establishedYear),
    description: company.description,
    areaServed: {
      "@type": "Country",
      name: company.targetCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: company.email,
      availableLanguage: ["English"],
      areaServed: company.targetCountry,
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
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
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

export function contactPageSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description,
    url: buildPageUrl(path),
    inLanguage: "en-IN",
    mainEntity: {
      "@type": "Organization",
      name: company.brandName,
      url: siteUrl,
      email: company.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: company.email,
        availableLanguage: "English",
      },
    },
  };
}

const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  "Full-time": "FULL_TIME",
  "Part-time": "PART_TIME",
  Contract: "CONTRACTOR",
};

function defaultValidThrough(): string {
  const date = new Date();
  date.setMonth(date.getMonth() + 3);
  return date.toISOString().split("T")[0];
}

export function jobPostingSchema(job: CareerJob) {
  const description = [job.description, ...job.requirements.map((req) => `• ${req}`)].join("\n");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    datePosted: new Date().toISOString().split("T")[0],
    validThrough: defaultValidThrough(),
    employmentType: EMPLOYMENT_TYPE_MAP[job.type] ?? "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: company.brandName,
      sameAs: siteUrl,
      logo: DEFAULT_OG_IMAGE,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: company.targetCountry,
    },
    industry: company.industry,
  };
}

export function jobPostingsSchema(jobs: CareerJob[]) {
  return jobs.map((job) => jobPostingSchema(job));
}

export function testimonialReviewsSchema(items: TestimonialItem[]) {
  return items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: item.quote,
    author: {
      "@type": "Person",
      name: item.name,
      jobTitle: item.designation,
    },
    itemReviewed: {
      "@type": "Organization",
      name: company.brandName,
      url: siteUrl,
    },
  }));
}

export function portfolioItemListSchema(items: PortfolioItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Portfolio",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        genre: item.type,
        description: `${item.challenge} ${item.solution} ${item.outcome}`.trim(),
        creator: {
          "@type": "Organization",
          name: company.brandName,
          url: siteUrl,
        },
      },
    })),
  };
}

export function processStepsSchema(
  steps: { title: string; description: string }[],
  name = "Software Development Process"
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description: `Structured software development process used by ${company.brandName}.`,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}
