"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import servicesData from "@/data/services.json";

const FEATURED = servicesData.slice(0, 4).map((service, index) => ({
  id: String(index + 1).padStart(2, "0"),
  tag: service.category.toUpperCase(),
  title: service.title.toUpperCase().replace(/ /g, "\n"),
  desc: service.shortDescription,
  slug: service.slug,
  stat: { v: String(index + 1), l: "core service" },
}));

function FeatureRow({ f, index }: { f: (typeof FEATURED)[0]; index: number }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Link
        href={`/services/${f.slug}/`}
        className="group block border-b border-[#1e1e1e] row-hover"
      >
      <div className="grid grid-cols-[56px_1fr] lg:grid-cols-[56px_260px_1fr_160px] gap-0">
        <div className="border-r border-[#1e1e1e] p-5 flex items-start pt-6">
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">{f.id}</span>
        </div>
        <div className="border-r border-[#1e1e1e] p-6 flex flex-col gap-3">
          <span className="sys-tag text-[9px]">{f.tag}</span>
          <h3 className="font-display text-3xl lg:text-4xl leading-[0.9] text-[#f2ede6] group-hover:text-[#2196f3] transition-colors duration-300 whitespace-pre-line">
            {f.title}
          </h3>
        </div>
        <div className="col-span-2 lg:col-span-1 border-r border-[#1e1e1e] p-6 flex items-center">
          <p className="text-sm text-[#5a5a5a] leading-relaxed max-w-lg">{f.desc}</p>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-center p-6">
          <div className="font-mono text-[11px] text-[#2196f3] tracking-widest group-hover:underline">
            VIEW →
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export function FeaturesSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services-preview" className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`grid grid-cols-[56px_1fr] lg:grid-cols-[56px_260px_1fr_160px] border-b border-[#1e1e1e] transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="border-r border-[#1e1e1e] p-5" />
          <div className="col-span-2 lg:col-span-3 p-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="sys-tag mb-4 block">SERVICES</span>
              <h2 className="font-display text-6xl lg:text-8xl text-[#f2ede6] leading-[0.88] tracking-tight">
                SOFTWARE<br />
                <span
                  className="text-[#3a3a3a]"
                  style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}
                >
                  CAPABILITIES
                </span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-[#3a3a3a] tracking-widest max-w-[220px] text-right hidden lg:block">
              WEB &nbsp;/&nbsp; MOBILE &nbsp;/&nbsp; CLOUD &nbsp;/&nbsp; ENTERPRISE
            </p>
          </div>
        </div>

        {FEATURED.map((f, i) => (
          <FeatureRow key={f.slug} f={f} index={i} />
        ))}

        <div className="grid grid-cols-[56px_1fr] border-b border-[#1e1e1e]">
          <div className="border-r border-[#1e1e1e]" />
          <div className="p-6 flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#3a3a3a]">
              18 SPECIALIST SERVICE AREAS AVAILABLE
            </span>
            <Link
              href="/services/"
              className="font-mono text-xs text-[#2196f3] hover:underline tracking-wider"
            >
              VIEW ALL SERVICES →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
