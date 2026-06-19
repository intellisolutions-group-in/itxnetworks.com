import faqData from "@/data/faq.json";
import portfolioData from "@/data/portfolio.json";
import { blogPosts } from "@/lib/blog";
import { company, getDomainAgeYears } from "@/lib/company";
import { services } from "@/lib/services";

const STATIC_PAGE_COUNT = 13;

export function getFaqCount(): number {
  return faqData.reduce((total, category) => total + category.items.length, 0);
}

export function getSitePageCount(): number {
  return STATIC_PAGE_COUNT + services.length + blogPosts.length;
}

/** Content counts derived from actual site data. */
export const siteMetrics = {
  establishedYear: company.establishedYear,
  domainAgeYears: getDomainAgeYears(),
  serviceAreaCount: services.length,
  caseStudyCount: portfolioData.length,
  faqCount: getFaqCount(),
  sitePageCount: getSitePageCount(),
} as const;
