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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505]">
      <Navigation />
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
      <FooterSection />
    </main>
  );
}
