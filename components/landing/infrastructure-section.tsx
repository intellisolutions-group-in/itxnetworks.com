"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DELIVERY_HUBS = [
  { city: "Mumbai", region: "IN-WEST", projects: "Web & ERP", latency: "Remote", load: 78 },
  { city: "Bengaluru", region: "IN-SOUTH", projects: "Mobile & Cloud", latency: "Remote", load: 85 },
  { city: "Hyderabad", region: "IN-SOUTH", projects: "Enterprise Apps", latency: "Remote", load: 72 },
  { city: "Pune", region: "IN-WEST", projects: "Custom Software", latency: "Remote", load: 68 },
  { city: "Delhi NCR", region: "IN-NORTH", projects: "Integrations", latency: "Remote", load: 74 },
  { city: "Pan-India", region: "REMOTE", projects: "Distributed Teams", latency: "Async", load: 91 },
];

export function InfrastructureSection() {
  const [vis, setVis] = useState(false);
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % DELIVERY_HUBS.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="infrastructure" ref={ref} className="relative border-t border-[#1e1e1e] bg-[#080808] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">DELIVERY NETWORK</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              INDIA<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                DELIVERY HUBS
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 text-right">
            {[
              { v: "Remote", l: "COLLABORATION" },
              { v: "Agile", l: "DELIVERY MODEL" },
              { v: "IST", l: "BUSINESS HOURS" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-[#2196f3]">{s.v}</div>
                <div className="font-mono text-[9px] text-[#3a3a3a] tracking-widest mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-[#1e1e1e]">
          <div className="grid grid-cols-[1fr_100px_120px_80px_120px] border-b border-[#1e1e1e] px-6 py-3">
            {["LOCATION", "REGION", "FOCUS", "MODE", "CAPACITY"].map((h) => (
              <span key={h} className="font-mono text-[9px] text-[#3a3a3a] tracking-widest">
                {h}
              </span>
            ))}
          </div>

          {DELIVERY_HUBS.map((r, i) => (
            <div
              key={r.city}
              className={`grid grid-cols-[1fr_100px_120px_80px_120px] px-6 py-5 border-b border-[#1e1e1e] last:border-b-0 transition-all duration-300 ${
                active === i ? "bg-[#0e0e0e]" : "hover:bg-[#0a0a0a]"
              } ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors shrink-0 ${
                    active === i ? "bg-[#2196f3]" : "bg-[#2e2e2e]"
                  }`}
                />
                <span className={`font-mono text-sm ${active === i ? "text-[#f2ede6]" : "text-[#5a5a5a]"}`}>
                  {r.city}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#3a3a3a] tracking-wider self-center">
                {r.region}
              </span>
              <span className={`font-mono text-[10px] self-center ${active === i ? "text-[#2196f3]" : "text-[#5a5a5a]"}`}>
                {r.projects}
              </span>
              <span className="font-mono text-sm text-[#5a5a5a] self-center">{r.latency}</span>
              <div className="flex items-center gap-2 self-center">
                <div className="flex-1 h-1 bg-[#1e1e1e]">
                  <div
                    className="h-full bg-[#2196f3] transition-all duration-500"
                    style={{ width: `${r.load}%`, opacity: active === i ? 1 : 0.4 }}
                  />
                </div>
                <span className="font-mono text-[10px] text-[#3a3a3a] w-7 text-right">{r.load}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="py-4 flex justify-end">
          <Link href="/contact/" className="font-mono text-[10px] text-[#2196f3] hover:underline">
            DISCUSS YOUR DELIVERY MODEL →
          </Link>
        </div>
      </div>
    </section>
  );
}
