import { notFound } from "next/navigation";
import Link from "next/link";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { ServiceCard } from "@/components/site/service-card";
import { SiteCta } from "@/components/site/site-cta";
import { company } from "@/lib/company";
import { createMetadata, serviceSchema } from "@/lib/seo";
import { getRelatedServices, getServiceWithDetail, services } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceWithDetail(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    keywords: [service.title, service.category, "software development India"],
    path: `/services/${service.slug}/`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceWithDetail(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);
  const schema = serviceSchema(
    service.title,
    service.shortDescription,
    `/services/${service.slug}/`
  );

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        tag={service.category.toUpperCase()}
        title={service.title}
        description={service.shortDescription}
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <span className="sys-tag">SERVICE_OVERVIEW</span>
            <div className="mt-6 space-y-5">
              {service.contentParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm text-[#5a5a5a] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="border border-[#1e1e1e] h-fit">
            <div className="border-b border-[#1e1e1e] px-6 py-4">
              <span className="font-mono text-[10px] tracking-widest text-[#2196f3]">
                TECHNOLOGIES
              </span>
            </div>
            <div className="p-6 flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <Stagger key={tech} index={index}>
                  <span className="font-mono text-[10px] tracking-widest border border-[#1e1e1e] px-3 py-1.5 text-[#5a5a5a]">
                    {tech}
                  </span>
                </Stagger>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-[#1e1e1e] bg-[#080808]" delay={100}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <span className="sys-tag">KEY_BENEFITS</span>
          <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase">
            What You Gain
          </h2>
          <div className="mt-10 border border-[#1e1e1e]">
            {service.features.map((feature, index) => (
              <Stagger key={feature} index={index}>
                <div className="grid grid-cols-[56px_1fr] border-b border-[#1e1e1e] last:border-b-0 row-hover">
                  <div className="border-r border-[#1e1e1e] p-5 font-mono text-[10px] text-[#3a3a3a]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="p-5 text-sm text-[#5a5a5a] leading-relaxed">{feature}</div>
                </div>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-[#1e1e1e]" delay={150}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <span className="sys-tag">OUR_PROCESS</span>
          <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase">
            How We Deliver
          </h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#1e1e1e]">
            {service.processSteps.map((step, index) => (
              <Stagger
                key={step.title}
                index={index}
                className="border-b md:border-b-0 md:border-r border-[#1e1e1e] last:border-r-0 p-6"
              >
                <span className="font-mono text-[10px] text-[#2196f3]">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-[#f2ede6] mt-3">{step.title}</h3>
                <p className="mt-3 text-sm text-[#5a5a5a] leading-relaxed">{step.description}</p>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-[#1e1e1e]" delay={200}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="sys-tag">SERVICE_INQUIRY</span>
              <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase">
                Discuss {service.title}
              </h2>
              <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">
                Share your requirements and our team will respond with next steps for scoping and
                delivery planning.
              </p>
            </div>
            <ContactForm submitLabel="SEND_INQUIRY" />
          </div>
        </div>
      </AnimatedSection>

      {related.length > 0 && (
        <AnimatedSection className="border-b border-[#1e1e1e]" delay={250}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-4xl text-[#f2ede6] uppercase">Related Services</h2>
              <Link
                href="/services/"
                className="font-mono text-[11px] tracking-widest text-[#2196f3] hover:text-[#42a5f5]"
              >
                VIEW_ALL →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border border-[#1e1e1e]">
              {related.map((item, index) => (
                <Stagger key={item.slug} index={index}>
                  <ServiceCard service={item} />
                </Stagger>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <SiteCta
        title={`Start Your ${service.title} Project`}
        description={`Partner with ${company.brandName} for structured delivery and long-term support.`}
      />
    </PageLayout>
  );
}
