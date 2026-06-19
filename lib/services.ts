import servicesData from "@/data/services.json";
import { getServiceDetail, type ServiceDetail } from "@/lib/service-details";
import { serviceExpansions } from "@/lib/service-expansions";

export type Service = (typeof servicesData)[number];

export const services: Service[] = servicesData;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceWithDetail(slug: string): (Service & ServiceDetail) | undefined {
  const service = getServiceBySlug(slug);
  const detail = getServiceDetail(slug);
  if (!service || !detail) return undefined;
  const expansions = serviceExpansions[slug] ?? [];
  return {
    ...service,
    ...detail,
    contentParagraphs: [...detail.contentParagraphs, ...expansions],
  };
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => Boolean(service));
}
