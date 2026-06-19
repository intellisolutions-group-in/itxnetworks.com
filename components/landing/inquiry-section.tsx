import { ContactForm } from "@/components/site/contact-form";

export function InquirySection() {
  return (
    <section id="inquiry" className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="border-b border-[#1e1e1e] pb-8 mb-10">
          <span className="sys-tag">QUICK_INQUIRY</span>
          <h2 className="font-display text-6xl lg:text-7xl leading-[0.88] tracking-tight text-[#f2ede6] uppercase mt-4">
            START A<br />
            <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
              CONVERSATION
            </span>
          </h2>
          <p className="mt-6 text-sm text-[#5a5a5a] leading-relaxed max-w-2xl">
            Share your project requirements and our team will respond with practical next steps for
            discovery, scoping, and delivery planning.
          </p>
        </div>
        <div className="max-w-3xl">
          <ContactForm submitLabel="SUBMIT_INQUIRY" />
        </div>
      </div>
    </section>
  );
}
