import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/site/page-layout";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: {
    absolute: `Page Not Found | ${company.brandName}`,
  },
  description: `The page you requested could not be found on ${company.brandName}.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <PageLayout>
      <section
        className="relative border-b border-[#1e1e1e] grid-bg pt-[88px]"
        aria-labelledby="not-found-title"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#2196f3] mb-4">— 404</p>
          <h1
            id="not-found-title"
            className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tight text-[#f2ede6] uppercase max-w-4xl"
          >
            Page Not Found
          </h1>
          <p className="mt-8 text-base text-[#5a5a5a] leading-relaxed max-w-2xl">
            The page you are looking for may have been moved, removed, or never existed. Use the
            links below to continue browsing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#2196f3] text-[#050505] font-mono text-sm tracking-widest px-6 py-4 hover:bg-[#42a5f5] transition-colors font-semibold"
            >
              BACK TO HOME →
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center border border-[#1e1e1e] text-[#f2ede6] font-mono text-sm tracking-widest px-6 py-4 hover:border-[#2196f3]/40 hover:text-[#2196f3] transition-colors"
            >
              CONTACT US →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
