import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { SiteCta } from "@/components/site/site-cta";
import { PageSeo } from "@/components/site/page-seo";
import { company } from "@/lib/company";
import { createMetadata, processStepsSchema } from "@/lib/seo";

const PAGE_TITLE = "Our Development Process";
const PAGE_DESCRIPTION = `Learn about ${company.brandName}'s software development process—from discovery and architecture to build, launch, and support.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["software development process", "agile delivery", "SDLC"],
  path: "/our-process/",
});

const steps = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description:
      "We map business goals, users, constraints, and success metrics. Workshops and documentation ensure shared understanding before development commitments.",
  },
  {
    step: "02",
    title: "Solution Design",
    description:
      "Architecture, technology selection, integration approach, and delivery roadmap are reviewed with your stakeholders and refined iteratively.",
  },
  {
    step: "03",
    title: "Agile Implementation",
    description:
      "Two-week sprints with demos, backlog refinement, code reviews, and automated quality checks keep progress visible and risks manageable.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Functional, regression, and performance testing validate readiness. Defects are triaged with clear severity and verification cycles.",
  },
  {
    step: "05",
    title: "Deployment & Handover",
    description:
      "Production rollout includes monitoring setup, runbooks, training, and knowledge transfer so your team can operate confidently.",
  },
  {
    step: "06",
    title: "Support & Evolution",
    description:
      "Post-launch maintenance, enhancements, and roadmap planning ensure your software continues to deliver value as needs change.",
  },
];

export default function OurProcessPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/our-process/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/our-process/" },
        ]}
        schemas={[
          processStepsSchema(
            steps.map((step) => ({ title: step.title, description: step.description })),
            PAGE_TITLE
          ),
        ]}
      />
      <PageHero
        tag="OUR_PROCESS"
        title="A Structured Path From Idea To Production"
        description="Our development process balances speed with discipline—giving you predictable delivery without sacrificing engineering quality."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="border border-[#1e1e1e]">
            {steps.map((item, index) => (
              <Stagger key={item.step} index={index}>
                <div className="grid lg:grid-cols-[80px_280px_1fr] border-b border-[#1e1e1e] last:border-b-0 row-hover">
                  <div className="border-b lg:border-b-0 lg:border-r border-[#1e1e1e] p-5 font-mono text-[10px] text-[#3a3a3a]">
                    {item.step}
                  </div>
                  <div className="border-b lg:border-b-0 lg:border-r border-[#1e1e1e] p-6">
                    <h2 className="font-display text-2xl lg:text-3xl text-[#f2ede6]">{item.title}</h2>
                  </div>
                  <div className="p-6 flex items-center">
                    <p className="text-sm text-[#5a5a5a] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <SiteCta
        title="See Our Process In Action"
        description="Book a consultation and we will walk through how this model applies to your project."
      />
    </PageLayout>
  );
}
