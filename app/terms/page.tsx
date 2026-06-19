import { AnimatedSection } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { company } from "@/lib/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service governing use of the ${company.brandName} website and related digital services.`,
  keywords: ["terms of service", "website terms"],
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        tag="LEGAL"
        title="Terms of Service"
        description="Please read these terms carefully before using our website."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 max-w-4xl">
          <div className="space-y-8 text-sm text-[#5a5a5a] leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the {company.brandName} website, you agree to be bound by these
                Terms of Service. If you do not agree, please discontinue use of the website.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">2. Website Use</h2>
              <p>
                You may use this website for lawful purposes only. You agree not to misuse the site,
                attempt unauthorised access, interfere with functionality, or submit false or misleading
                information through forms or communications.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">3. Intellectual Property</h2>
              <p>
                Content on this website—including text, graphics, branding, and layout—is owned by or
                licensed to {company.brandName} unless otherwise stated. You may not reproduce, distribute,
                or create derivative works without prior written permission.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">4. Service Enquiries</h2>
              <p>
                Information on this website is provided for general informational purposes. Submitting a
                form or contacting us does not create a binding contract until both parties agree to
                specific commercial terms in writing.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">5. Disclaimer</h2>
              <p>
                The website and its content are provided on an &ldquo;as is&rdquo; basis. We make no
                warranties, express or implied, regarding accuracy, completeness, or fitness for a
                particular purpose, to the extent permitted by applicable law.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {company.brandName} shall not be liable for any
                indirect, incidental, special, or consequential damages arising from use of this website
                or reliance on its content.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">7. Third-Party Links</h2>
              <p>
                The website may contain links to third-party sites. We are not responsible for the content,
                policies, or practices of external websites and recommend reviewing their terms independently.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of courts in India, unless otherwise agreed in a separate written
                contract.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">9. Contact</h2>
              <p>
                Questions regarding these terms may be directed to{" "}
                <a href={`mailto:${company.email}`} className="text-[#2196f3] hover:underline">
                  {company.email}
                </a>
                .
              </p>
              <p className="mt-3 font-mono text-[11px] text-[#3a3a3a]">
                Last updated: June 2026
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
