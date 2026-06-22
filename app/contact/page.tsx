import { AnimatedSection } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { PageSeo } from "@/components/site/page-seo";
import { company } from "@/lib/company";
import { createMetadata, contactPageSchema } from "@/lib/seo";

const PAGE_TITLE = "Contact Us";
const PAGE_DESCRIPTION = `Contact ${company.brandName} for software development enquiries, project discussions, and partnership opportunities.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["contact ITX Networks", "software development enquiry", "IT consulting India"],
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/contact/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/contact/" },
        ]}
        schemas={[contactPageSchema(PAGE_TITLE, PAGE_DESCRIPTION, "/contact/")]}
      />
      <PageHero
        tag="CONTACT"
        title="Let's Discuss Your Software Requirements"
        description="Whether you are planning a new product, modernising legacy systems, or expanding your engineering capacity, our team is ready to help."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="sys-tag">GET_IN_TOUCH</span>
            <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase">
              Contact Information
            </h2>
            <div className="mt-8 border border-[#1e1e1e]">
              <div className="border-b border-[#1e1e1e] px-6 py-5 row-hover">
                <span className="font-mono text-[10px] tracking-widest text-[#3a3a3a] block mb-2">
                  EMAIL
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="font-mono text-sm text-[#f2ede6] hover:text-[#2196f3] transition-colors"
                >
                  {company.email}
                </a>
              </div>
              {/* Phone number to be added later
              <div className="border-b border-[#1e1e1e] px-6 py-5 row-hover">
                <span className="font-mono text-[10px] tracking-widest text-[#3a3a3a] block mb-2">
                  PHONE
                </span>
                <span className="font-mono text-sm text-[#f2ede6]">{company.phone}</span>
              </div>
              */}
              <div className="px-6 py-5 row-hover">
                <span className="font-mono text-[10px] tracking-widest text-[#3a3a3a] block mb-2">
                  BUSINESS_HOURS
                </span>
                <span className="font-mono text-sm text-[#f2ede6]">{company.businessHours}</span>
              </div>
            </div>

            {/* Office addresses to be added later
            <div className="mt-8">
              <span className="sys-tag">OFFICE_ADDRESSES</span>
            </div>
            */}
          </div>

          <div>
            <span className="sys-tag">CONTACT_FORM</span>
            <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase mb-8">
              Send A Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-[#1e1e1e] bg-[#080808]" delay={100}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <span className="sys-tag">LOCATION</span>
          <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase">
            Map Placeholder
          </h2>
          <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed max-w-2xl">
            Office location map will be added once address details are confirmed. We currently
            support remote collaboration with clients across India.
          </p>
          <div className="mt-8 border border-[#1e1e1e] h-64 flex items-center justify-center">
            <span className="font-mono text-[11px] tracking-widest text-[#3a3a3a]">
              MAP_INTEGRATION_PENDING
            </span>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
