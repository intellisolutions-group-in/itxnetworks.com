"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SiteCtaProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function SiteCta({
  title,
  description,
  primaryHref = "/contact/",
  primaryLabel = "START_A_PROJECT",
  secondaryHref = "/services/",
  secondaryLabel = "VIEW_SERVICES",
}: SiteCtaProps) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-t border-[#1e1e1e]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div
          className={`border border-[#1e1e1e] relative overflow-hidden transition-all duration-700 ${
            vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute top-0 left-0 w-16 h-16 border-r border-b border-[#2196f3]/30" />
          <div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-[#2196f3]/30" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-r border-t border-[#2196f3]/30" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-[#2196f3]/30" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(33,150,243,0.04) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 px-8 lg:px-16 py-14 lg:py-20 text-center">
            <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-[#f2ede6] uppercase mb-4">
              {title}
            </h2>
            <p className="font-mono text-sm text-[#5a5a5a] mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-4 bg-[#2196f3] text-[#050505] font-mono text-sm tracking-widest px-8 py-5 hover:bg-[#42a5f5] transition-colors font-semibold"
              >
                {primaryLabel}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={secondaryHref}
                className="group inline-flex items-center gap-4 border border-[#2e2e2e] text-[#5a5a5a] font-mono text-sm tracking-widest px-8 py-5 hover:border-[#2196f3]/40 hover:text-[#2196f3] transition-colors"
              >
                {secondaryLabel}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
