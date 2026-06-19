"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const REASONS = [
  {
    id: "01",
    title: "ENGINEERING DISCIPLINE",
    tagline: "Maintainable architecture",
    points: [
      "Structured code reviews and quality gates",
      "Documentation and knowledge transfer",
      "Testable, modular system design",
      "Long-term maintainability focus",
    ],
    cta: "OUR PROCESS",
    href: "/our-process/",
    highlight: false,
  },
  {
    id: "02",
    title: "TRANSPARENT DELIVERY",
    tagline: "Predictable project execution",
    points: [
      "Weekly demos and visible backlogs",
      "Clear scope and milestone reporting",
      "Honest risk communication",
      "Agile delivery with Indian teams",
      "Dedicated project coordination",
    ],
    cta: "WHY US",
    href: "/why-choose-us/",
    highlight: true,
  },
  {
    id: "03",
    title: "FULL LIFECYCLE SUPPORT",
    tagline: "Beyond initial launch",
    points: [
      "Maintenance and enhancement plans",
      "Modernisation and cloud migration",
      "Integration with existing systems",
      "Post-launch monitoring support",
    ],
    cta: "CONTACT US",
    href: "/contact/",
    highlight: false,
  },
];

export function WhyChooseUsSection() {
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
    <section id="why-choose-us" ref={ref} className="relative border-t border-[#1e1e1e] bg-[#080808] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">WHY CHOOSE US</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              BUILT FOR<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                SERIOUS DELIVERY
              </span>
            </h2>
          </div>
          <Link
            href="/why-choose-us/"
            className="font-mono text-[11px] text-[#2196f3] tracking-wider hover:underline"
          >
            LEARN MORE →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 border-b border-[#1e1e1e]">
          {REASONS.map((item, i) => (
            <div
              key={item.id}
              className={`border-r border-[#1e1e1e] last:border-r-0 relative transition-all duration-500 ${
                item.highlight ? "bg-[#0e0e0e]" : ""
              } ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {item.highlight && <div className="absolute top-0 left-0 right-0 h-px bg-[#2196f3]" />}

              <div className="p-8 border-b border-[#1e1e1e]">
                <span className="font-mono text-[9px] text-[#3a3a3a]">{item.id}</span>
                <h3 className="font-display text-3xl text-[#f2ede6] mt-3 mb-1">{item.title}</h3>
                <p className="font-mono text-[10px] text-[#3a3a3a] tracking-wider">{item.tagline}</p>
              </div>

              <ul className="p-8 space-y-3 border-b border-[#1e1e1e] min-h-[220px]">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-[#2196f3] font-mono text-[10px] mt-0.5 shrink-0">+</span>
                    <span className="font-mono text-[11px] text-[#5a5a5a]">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="p-8">
                <Link
                  href={item.href}
                  className={`w-full flex items-center justify-between font-mono text-[11px] tracking-widest px-5 py-4 transition-colors group ${
                    item.highlight
                      ? "bg-[#2196f3] text-[#050505] hover:bg-[#42a5f5] font-semibold"
                      : "border border-[#2e2e2e] text-[#5a5a5a] hover:border-[#2196f3]/40 hover:text-[#2196f3]"
                  }`}
                >
                  {item.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
