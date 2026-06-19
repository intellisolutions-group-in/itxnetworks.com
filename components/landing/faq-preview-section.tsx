"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import faqData from "@/data/faq.json";
import { FaqAccordion } from "@/components/site/faq-accordion";

const previewItems = faqData.flatMap((section) => section.items).slice(0, 5);

export function FaqPreviewSection() {
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
    <section id="faq-preview" ref={ref} className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div
          className={`border-b border-[#1e1e1e] pb-8 mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">FAQ</span>
            <h2 className="font-display text-6xl lg:text-7xl leading-[0.88] tracking-tight text-[#f2ede6] uppercase">
              Common Questions
            </h2>
          </div>
          <Link
            href="/faq/"
            className="font-mono text-[11px] text-[#2196f3] tracking-wider hover:underline"
          >
            VIEW ALL FAQ →
          </Link>
        </div>
        <FaqAccordion items={previewItems} />
      </div>
    </section>
  );
}
