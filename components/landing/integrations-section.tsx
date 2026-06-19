"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ROW1 = [
  { name: "React", cat: "FRONTEND" },
  { name: "Next.js", cat: "WEB" },
  { name: "Node.js", cat: "BACKEND" },
  { name: ".NET", cat: "ENTERPRISE" },
  { name: "Java", cat: "BACKEND" },
  { name: "Python", cat: "DATA/API" },
  { name: "PostgreSQL", cat: "DATABASE" },
  { name: "MongoDB", cat: "DATABASE" },
  { name: "AWS", cat: "CLOUD" },
  { name: "Azure", cat: "CLOUD" },
];

const ROW2 = [
  { name: "Flutter", cat: "MOBILE" },
  { name: "React Native", cat: "MOBILE" },
  { name: "Docker", cat: "DEVOPS" },
  { name: "Kubernetes", cat: "DEVOPS" },
  { name: "Redis", cat: "CACHE" },
  { name: "GraphQL", cat: "API" },
  { name: "TypeScript", cat: "LANGUAGE" },
  { name: "Tailwind", cat: "UI" },
  { name: "GitHub", cat: "DELIVERY" },
  { name: "Figma", cat: "DESIGN" },
];

function IntChip({ name, cat }: { name: string; cat: string }) {
  return (
    <div className="shrink-0 flex items-center gap-4 border border-[#1e1e1e] px-5 py-3.5 hover:border-[#2196f3]/40 hover:bg-[#2196f3]/5 transition-all duration-200 cursor-default group">
      <span className="font-mono text-[9px] text-[#3a3a3a] tracking-widest">{cat}</span>
      <span className="font-display text-lg text-[#5a5a5a] group-hover:text-[#f2ede6] transition-colors">
        {name}
      </span>
    </div>
  );
}

export function IntegrationsSection() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <section id="integrations" className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">TECHNOLOGY STACK</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              MODERN<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                PLATFORMS.
              </span>
            </h2>
          </div>
          <p className="font-mono text-[10px] text-[#3a3a3a] max-w-[220px] text-right hidden lg:block leading-relaxed">
            WEB &nbsp;/&nbsp; MOBILE &nbsp;/&nbsp; CLOUD &nbsp;/&nbsp; DATA &nbsp;/&nbsp; DEVOPS
          </p>
        </div>
      </div>

      <div className="border-b border-[#1e1e1e] py-4 overflow-hidden">
        <div className="flex gap-3 marquee">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex gap-3 shrink-0">
              {ROW1.map((i) => (
                <IntChip key={`${i.name}-${ri}`} {...i} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-[#1e1e1e] py-4 overflow-hidden">
        <div className="flex gap-3" style={{ animation: "marquee 20s linear infinite reverse" }}>
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex gap-3 shrink-0">
              {ROW2.map((i) => (
                <IntChip key={`${i.name}-${ri}`} {...i} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-[#3a3a3a]">
          STACK SELECTED PER PROJECT REQUIREMENTS
        </span>
        <Link href="/services/" className="font-mono text-[10px] text-[#2196f3] hover:underline tracking-wider">
          VIEW SERVICES →
        </Link>
      </div>
    </section>
  );
}
