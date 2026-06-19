import { AnimatedSection } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { PageSeo } from "@/components/site/page-seo";
import { company } from "@/lib/company";
import { createMetadata } from "@/lib/seo";

const PAGE_TITLE = "Privacy Policy";
const PAGE_DESCRIPTION = `Privacy policy for ${company.brandName} explaining how we collect, use, and protect information submitted through our website.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["privacy policy", "data protection"],
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/privacy/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/privacy/" },
        ]}
      />
      <PageHero
        tag="LEGAL"
        title="Privacy Policy"
        description={`This policy describes how ${company.brandName} handles information collected through our website.`}
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 max-w-4xl">
          <div className="prose-custom space-y-8 text-sm text-[#5a5a5a] leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">1. Introduction</h2>
              <p>
                {company.brandName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects
                your privacy. This Privacy Policy explains what information we collect when you visit
                our website, submit forms, or communicate with us, and how that information is used.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">2. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Contact details such as name, email address, and phone number when provided</li>
                <li>Professional information submitted through career applications</li>
                <li>Message content and enquiry details submitted via contact forms</li>
                <li>Technical data such as browser type, device information, and usage logs</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">3. How We Use Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to enquiries and service requests</li>
                <li>Review job applications and recruitment communications</li>
                <li>Improve website performance, security, and user experience</li>
                <li>Comply with applicable legal and regulatory obligations</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">4. Data Sharing</h2>
              <p>
                We do not sell personal information. Data may be shared with trusted service providers
                who assist in hosting, analytics, or communication services, subject to appropriate
                safeguards and only as necessary for legitimate business purposes.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">5. Data Retention</h2>
              <p>
                We retain information only for as long as required to fulfil the purposes described in
                this policy, unless a longer retention period is required by law or legitimate business
                needs such as dispute resolution.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">6. Security</h2>
              <p>
                We implement reasonable administrative and technical measures to protect information.
                However, no method of transmission over the internet is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">7. Your Rights</h2>
              <p>
                Depending on applicable law, you may request access, correction, or deletion of your
                personal information. To make a request, contact us at{" "}
                <a href={`mailto:${company.email}`} className="text-[#2196f3] hover:underline">
                  {company.email}
                </a>
                .
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">8. Updates</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page with
                a revised effective date. Continued use of the website after updates constitutes acceptance
                of the revised policy.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-[#f2ede6] mb-3">9. Contact</h2>
              <p>
                For privacy-related questions, email{" "}
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
