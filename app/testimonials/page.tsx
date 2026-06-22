import testimonialsData from "@/data/testimonials.json";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { SiteCta } from "@/components/site/site-cta";
import { PageSeo } from "@/components/site/page-seo";
import { company } from "@/lib/company";
import { createMetadata, testimonialReviewsSchema } from "@/lib/seo";

const PAGE_TITLE = "Testimonials";
const PAGE_DESCRIPTION = `Read client testimonials about working with ${company.brandName} on software development and IT delivery engagements.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["client testimonials", "software development reviews"],
  path: "/testimonials/",
});

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/testimonials/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/testimonials/" },
        ]}
        schemas={testimonialReviewsSchema(testimonialsData)}
      />
      <PageHero
        tag="TESTIMONIALS"
        title="What Clients Say About Our Delivery"
        description="Feedback from professionals who have partnered with us on software initiatives. Company names are withheld to respect confidentiality."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-0 border border-[#1e1e1e]">
            {testimonialsData.map((item, index) => (
              <Stagger
                key={item.id}
                index={index}
                className="border-b md:border-b-0 md:border-r border-[#1e1e1e] last:border-r-0 p-8 row-hover"
              >
                <blockquote>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-6 border-t border-[#1e1e1e] pt-4">
                    <cite className="not-italic font-display text-xl text-[#f2ede6]">{item.name}</cite>
                    <p className="font-mono text-[10px] tracking-widest text-[#3a3a3a] mt-1">
                      {item.designation}
                    </p>
                  </footer>
                </blockquote>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <SiteCta
        title="Become Our Next Success Story"
        description="Let us help you deliver software your teams and customers can rely on."
      />
    </PageLayout>
  );
}
