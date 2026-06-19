import faqData from "@/data/faq.json";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { SiteCta } from "@/components/site/site-cta";
import { PageSeo } from "@/components/site/page-seo";
import { company } from "@/lib/company";
import { createMetadata, faqPageSchema, flattenFaqItems } from "@/lib/seo";

const PAGE_TITLE = "FAQ";
const PAGE_DESCRIPTION = `Frequently asked questions about ${company.brandName} services, process, technology stack, and engagement models.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["software development FAQ", "IT services questions"],
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/faq/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/faq/" },
        ]}
        schemas={[faqPageSchema(flattenFaqItems(faqData))]}
      />
      <PageHero
        tag="FAQ"
        title="Frequently Asked Questions"
        description="Answers to common questions about our services, delivery approach, and how we partner with organisations across India."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 space-y-12">
          {faqData.map((section, index) => (
            <Stagger key={section.category} index={index}>
              <div>
                <span className="sys-tag">{section.category.toUpperCase()}</span>
                <h2 className="font-display text-3xl text-[#f2ede6] mt-4 mb-6 uppercase">
                  {section.category}
                </h2>
                <FaqAccordion items={section.items} />
              </div>
            </Stagger>
          ))}
        </div>
      </AnimatedSection>

      <SiteCta
        title="Still Have Questions?"
        description="Our team will respond with clear answers and practical next steps."
        primaryLabel="CONTACT_US"
      />
    </PageLayout>
  );
}
