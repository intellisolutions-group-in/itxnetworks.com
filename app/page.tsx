import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { CompanyIntroSection } from "@/components/landing/company-intro-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";
import { PortfolioPreviewSection } from "@/components/landing/portfolio-preview-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FaqPreviewSection } from "@/components/landing/faq-preview-section";
import { InquirySection } from "@/components/landing/inquiry-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { JsonLd } from "@/components/site/json-ld";
import { company } from "@/lib/company";
import { createMetadata, webPageSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "IT & Software Development Company in India",
  description: `${company.description} Serving organisations across ${company.targetCountry} with web, mobile, cloud, and enterprise software delivery.`,
  keywords: [
    "software development company India",
    "custom software India",
    "web development company",
    "mobile app development",
    "enterprise software development",
    "IT company India",
  ],
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          `${company.brandName} — IT & Software Development Company in India`,
          company.description,
          "/"
        )}
      />
      <Navigation />
      <main id="main-content" className="relative min-h-screen overflow-x-hidden bg-[#050505]">
        <HeroSection />
        <CompanyIntroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <InfrastructureSection />
        <MetricsSection />
        <IntegrationsSection />
        <SecuritySection />
        <DevelopersSection />
        <WhyChooseUsSection />
        <PortfolioPreviewSection />
        <TestimonialsSection />
        <FaqPreviewSection />
        <InquirySection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
