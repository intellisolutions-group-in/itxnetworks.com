import companyData from "@/data/company.json";

export type Company = typeof companyData;

export const company: Company = companyData;

export const siteUrl = `https://${company.domain}`;

export function formatEstablishedYear(): string {
  return String(company.establishedYear);
}

export function formatDomainRegisteredDate(): string {
  const date = new Date(company.domainRegisteredDate);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
