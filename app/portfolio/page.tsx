import portfolioData from "@/data/portfolio.json";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { SiteCta } from "@/components/site/site-cta";
import { company } from "@/lib/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Portfolio",
  description: `View case studies and project examples delivered by ${company.brandName} across web, mobile, enterprise, and integration programmes.`,
  keywords: ["software portfolio", "case studies", "project examples"],
  path: "/portfolio/",
});

export default function PortfolioPage() {
  return (
    <PageLayout>
      <PageHero
        tag="PORTFOLIO"
        title="Case Studies And Project Examples"
        description="Representative engagements demonstrating how we approach complex software challenges. Client names are anonymised to protect confidentiality."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 space-y-0">
          {portfolioData.map((project, index) => (
            <Stagger key={project.id} index={index}>
              <article className="border border-[#1e1e1e] border-b-0 last:border-b row-hover">
              <div className="grid lg:grid-cols-[56px_1fr]">
                <div className="border-b lg:border-b-0 lg:border-r border-[#1e1e1e] p-5 font-mono text-[10px] text-[#3a3a3a]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="sys-tag text-[9px]">{project.type}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl text-[#f2ede6]">
                    {project.title}
                  </h2>
                  <div className="mt-6 grid md:grid-cols-3 gap-6">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-[#2196f3] block mb-2">
                        CHALLENGE
                      </span>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-[#2196f3] block mb-2">
                        SOLUTION
                      </span>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-[#2196f3] block mb-2">
                        OUTCOME
                      </span>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] tracking-widest border border-[#1e1e1e] px-3 py-1.5 text-[#5a5a5a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
            </Stagger>
          ))}
        </div>
      </AnimatedSection>

      <SiteCta
        title="Have A Similar Challenge?"
        description="Share your context and we will outline a practical approach for discovery and delivery."
      />
    </PageLayout>
  );
}
