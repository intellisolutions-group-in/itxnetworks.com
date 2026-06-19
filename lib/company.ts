import companyData from "@/data/company.json";

export type Company = typeof companyData;

export const company: Company = companyData;

export const siteUrl = `https://${company.domain}`;

export function formatEstablishedYear(): string {
  return String(company.establishedYear);
}

/** Full years since domain registration — used for experience and credibility metrics. */
export function getDomainAgeYears(asOf: Date = new Date()): number {
  const registered = new Date(company.domainRegisteredDate);
  let years = asOf.getFullYear() - registered.getFullYear();
  const monthDiff = asOf.getMonth() - registered.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && asOf.getDate() < registered.getDate())) {
    years--;
  }
  return years;
}

export function formatDomainRegisteredDate(): string {
  const date = new Date(company.domainRegisteredDate);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
