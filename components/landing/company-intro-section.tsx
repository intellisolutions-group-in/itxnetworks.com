"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { company, formatEstablishedYear } from "@/lib/company";
import { siteMetrics } from "@/lib/site-metrics";

export function CompanyIntroSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about-preview"
      ref={ref}
      className="relative border-t border-[#1e1e1e] scroll-mt-[88px]"
      aria-labelledby="company-intro-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">COMPANY</span>
            <h2
              id="company-intro-heading"
              className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]"
            >
              ENGINEERING<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                PARTNER
              </span>
            </h2>
          </div>
          <p className="font-mono text-[10px] text-[#3a3a3a] tracking-widest max-w-xs lg:text-right">
            EST. {formatEstablishedYear()} &nbsp;/&nbsp; {company.targetCountry.toUpperCase()} &nbsp;/&nbsp;{" "}
            {company.industry.toUpperCase()}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] border-b border-[#1e1e1e]">
          <div className="border-r border-[#1e1e1e] p-8 lg:p-12 row-hover">
            <p className="text-sm text-[#5a5a5a] leading-relaxed">{company.description}</p>
            <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">
              Since {formatEstablishedYear()}, we have supported organisations that need dependable
              software delivery, clear communication, and maintainable systems built for the long term.
            </p>
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 mt-8 font-mono text-[11px] text-[#2196f3] tracking-wider hover:underline"
            >
              READ ABOUT US →
            </Link>
          </div>
          <div className="grid grid-cols-2">
            {[
              { v: String(siteMetrics.establishedYear), l: "established" },
              { v: `${siteMetrics.domainAgeYears}+`, l: "years active" },
              { v: String(siteMetrics.serviceAreaCount), l: "service areas" },
              { v: company.targetCountry, l: "delivery focus" },
            ].map((item) => (
              <div
                key={item.l}
                className="border-b border-r border-[#1e1e1e] last:border-r-0 p-6 row-hover flex flex-col justify-end min-h-[140px]"
              >
                <div className="font-display text-4xl text-[#2196f3]">{item.v}</div>
                <div className="font-mono text-[9px] text-[#3a3a3a] tracking-widest mt-2">
                  {item.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
