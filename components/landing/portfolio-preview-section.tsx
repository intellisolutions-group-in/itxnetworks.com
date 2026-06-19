"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import portfolioData from "@/data/portfolio.json";

const PREVIEW = portfolioData.slice(0, 3);

export function PortfolioPreviewSection() {
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
      id="portfolio-preview"
      ref={ref}
      className="relative border-t border-[#1e1e1e] bg-[#080808] scroll-mt-[88px]"
      aria-labelledby="portfolio-preview-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">PORTFOLIO</span>
            <h2
              id="portfolio-preview-heading"
              className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]"
            >
              RECENT<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                CASE STUDIES
              </span>
            </h2>
          </div>
          <Link
            href="/portfolio/"
            className="font-mono text-[11px] text-[#2196f3] tracking-wider hover:underline"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>

        <div className="border-b border-[#1e1e1e]">
          {PREVIEW.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-[56px_1fr] border-b border-[#1e1e1e] last:border-b-0 row-hover transition-all duration-500 ${
                vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="border-r border-[#1e1e1e] p-5 font-mono text-[10px] text-[#3a3a3a]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="p-6 lg:p-8">
                <span className="sys-tag text-[9px]">{project.type}</span>
                <h3 className="font-display text-3xl text-[#f2ede6] mt-3">{project.title}</h3>
                <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed max-w-3xl">
                  {project.challenge}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-widest border border-[#1e1e1e] px-3 py-1 text-[#5a5a5a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
