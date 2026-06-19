import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { SiteCta } from "@/components/site/site-cta";
import { PageSeo } from "@/components/site/page-seo";
import { company } from "@/lib/company";
import { createMetadata } from "@/lib/seo";

const PAGE_TITLE = "Why Choose Us";
const PAGE_DESCRIPTION = `Discover why organisations choose ${company.brandName} for software development—engineering discipline, transparent delivery, and long-term support.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["why choose ITX Networks", "software development partner India"],
  path: "/why-choose-us/",
});

const reasons = [
  {
    title: "Deep Engineering Focus",
    description:
      "We invest in architecture, code quality, and testability from the first sprint—not as afterthoughts before launch.",
  },
  {
    title: "India-Ready Delivery",
    description:
      "Our teams understand local business contexts, compliance conversations, and collaboration across Indian stakeholders.",
  },
  {
    title: "Transparent Communication",
    description:
      "Weekly demos, visible backlogs, and documented decisions keep projects predictable and stakeholders aligned.",
  },
  {
    title: "Full Lifecycle Support",
    description:
      "Beyond initial build, we offer maintenance, enhancements, and modernisation to protect your software investment.",
  },
  {
    title: "Flexible Engagement",
    description:
      "Fixed-scope projects, dedicated team extensions, and consulting engagements are structured to match your capacity and timeline.",
  },
  {
    title: "Security-Conscious Delivery",
    description:
      "Access control, secure SDLC practices, and environment separation are standard across our engineering workflows.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/why-choose-us/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/why-choose-us/" },
        ]}
      />
      <PageHero
        tag="WHY_CHOOSE_US"
        title="A Partner Built For Serious Software Delivery"
        description={`${company.brandName} combines technical depth with accountable project execution—helping organisations ship reliable software without unnecessary complexity.`}
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#1e1e1e]">
            {reasons.map((reason, index) => (
              <Stagger
                key={reason.title}
                index={index}
                className="border-b md:border-b-0 md:border-r border-[#1e1e1e] last:border-r-0 p-8 row-hover"
              >
                <span className="font-mono text-[10px] text-[#3a3a3a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl text-[#f2ede6] mt-3">{reason.title}</h2>
                <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">{reason.description}</p>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <SiteCta
        title="Experience The Difference"
        description="Start with a discovery conversation and see how our delivery model fits your organisation."
      />
    </PageLayout>
  );
}
