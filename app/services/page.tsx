import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";
import { SiteCta } from "@/components/site/site-cta";
import { PageSeo } from "@/components/site/page-seo";
import { company } from "@/lib/company";
import { buildPageUrl, createMetadata, itemListSchema } from "@/lib/seo";
import { services } from "@/lib/services";

const PAGE_TITLE = "Services";
const PAGE_DESCRIPTION = `Explore software development services from ${company.brandName} including web, mobile, cloud, enterprise, and custom solutions.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["software development services", "web development", "mobile apps", "IT services India"],
  path: "/services/",
});

const categories = [...new Set(services.map((service) => service.category))];

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/services/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/services/" },
        ]}
        schemas={[
          itemListSchema(
            "Software Development Services",
            services.map((service) => ({
              name: service.title,
              url: buildPageUrl(`/services/${service.slug}/`),
              description: service.shortDescription,
            }))
          ),
        ]}
      />
      <PageHero
        tag="SERVICES"
        title="End-to-End Software Development Services"
        description={`${company.brandName} provides comprehensive IT and software development capabilities for organisations that need reliable engineering, clear communication, and solutions built for long-term growth.`}
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <span className="sys-tag">SERVICE_CATEGORIES</span>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Stagger key={category} index={index}>
                <span className="font-mono text-[10px] tracking-widest border border-[#1e1e1e] px-4 py-2 text-[#5a5a5a]">
                  {category.toUpperCase()}
                </span>
              </Stagger>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-0 border border-[#1e1e1e]">
            {services.map((service, index) => (
              <Stagger key={service.slug} index={index}>
                <ServiceCard service={service} />
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <SiteCta
        title="Need A Custom Engagement Model?"
        description="We offer fixed-scope delivery, team augmentation, and advisory consulting based on your priorities."
        primaryLabel="REQUEST_CONSULTATION"
      />
    </PageLayout>
  );
}
