import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { SiteCta } from "@/components/site/site-cta";
import { PageSeo } from "@/components/site/page-seo";
import { company, formatEstablishedYear } from "@/lib/company";
import { createMetadata } from "@/lib/seo";

const PAGE_TITLE = "About Us";
const PAGE_DESCRIPTION = `Learn about ${company.brandName}, an India-focused IT and software development company established in ${company.establishedYear}.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["about ITX Networks", "software company India", "IT services"],
  path: "/about/",
});

const values = [
  {
    title: "Engineering Discipline",
    description:
      "We favour maintainable architecture, clear documentation, and predictable delivery over shortcuts that create long-term risk.",
  },
  {
    title: "Transparent Partnership",
    description:
      "Clients receive honest progress reporting, visible backlogs, and collaborative decision-making throughout every engagement.",
  },
  {
    title: "Business Alignment",
    description:
      "Technology choices are guided by operational outcomes, user needs, and measurable value—not trends for their own sake.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We refine processes, tooling, and quality practices so each release is more reliable than the last.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/about/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/about/" },
        ]}
      />
      <PageHero
        tag="ABOUT_US"
        title="Building Software That Powers Modern Business"
        description={`${company.brandName} is an IT and software development company serving organisations across ${company.targetCountry}. Since ${formatEstablishedYear()}, we have helped teams design, build, and evolve digital products with a focus on quality engineering and long-term partnership.`}
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="sys-tag">COMPANY_OVERVIEW</span>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f2ede6] mt-4 uppercase leading-[0.9]">
              Trusted Delivery Since {formatEstablishedYear()}
            </h2>
            <p className="mt-6 text-sm text-[#5a5a5a] leading-relaxed">
              Since {formatEstablishedYear()}, we have supported organisations that need dependable
              engineering capacity and strategic guidance across {company.targetCountry}.
            </p>
            <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">
              From web and mobile applications to enterprise platforms, APIs, and modernisation
              programmes, we deliver solutions that integrate with your existing operations and scale
              as requirements evolve.
            </p>
          </div>
          <div className="border border-[#1e1e1e]">
            {[
              { label: "ESTABLISHED", value: formatEstablishedYear() },
              { label: "INDUSTRY", value: company.industry },
              { label: "MARKET_FOCUS", value: company.targetCountry },
              { label: "CONTACT", value: company.email },
            ].map((item, index) => (
              <Stagger key={item.label} index={index}>
                <div className="flex items-center justify-between border-b border-[#1e1e1e] last:border-b-0 px-6 py-5 row-hover">
                  <span className="font-mono text-[10px] tracking-widest text-[#3a3a3a]">
                    {item.label}
                  </span>
                  <span className="font-mono text-sm text-[#f2ede6]">{item.value}</span>
                </div>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-[#1e1e1e] bg-[#080808]" delay={100}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-0 border border-[#1e1e1e]">
            {[
              {
                tag: "MISSION",
                text: "To deliver robust, maintainable software that helps Indian businesses operate more efficiently, serve customers better, and adapt confidently to change.",
              },
              {
                tag: "VISION",
                text: "To be recognised as an engineering partner that combines technical depth, design clarity, and accountable delivery across every stage of the software lifecycle.",
              },
              {
                tag: "EXPERTISE",
                text: "Web platforms, mobile apps, desktop software, cloud-native systems, integrations, quality assurance, and ongoing support for production environments.",
              },
            ].map((item, index) => (
              <Stagger
                key={item.tag}
                index={index}
                className={`border-b lg:border-b-0 lg:border-r border-[#1e1e1e] last:border-r-0 p-8 row-hover`}
              >
                <span className="sys-tag">{item.tag}</span>
                <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">{item.text}</p>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-[#1e1e1e]" delay={150}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <span className="sys-tag">OUR_VALUES</span>
          <h2 className="font-display text-4xl text-[#f2ede6] mt-4 uppercase">
            Principles That Guide Every Project
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-0 border border-[#1e1e1e]">
            {values.map((value, index) => (
              <Stagger
                key={value.title}
                index={index}
                className="border-b md:border-b-0 md:border-r border-[#1e1e1e] last:border-r-0 p-8 row-hover"
              >
                <h3 className="font-display text-2xl text-[#2196f3]">{value.title.toUpperCase()}</h3>
                <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">{value.description}</p>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <SiteCta
        title="Ready To Work With Us?"
        description="Tell us about your product goals and we will propose a practical delivery approach."
      />
    </PageLayout>
  );
}
