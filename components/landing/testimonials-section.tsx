"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import testimonialsData from "@/data/testimonials.json";

const TESTIMONIALS = testimonialsData.slice(0, 4).map((item, index) => ({
  quote: item.quote,
  author: item.name,
  role: item.designation,
  metric: String(index + 1).padStart(2, "0"),
  metricLabel: "CLIENT FEEDBACK",
}));

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

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
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % TESTIMONIALS.length);
        setFading(false);
      }, 250);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" ref={ref} className="relative border-t border-[#1e1e1e] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 flex items-end justify-between transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="sys-tag">TESTIMONIALS</span>
          <div className="flex items-center gap-6">
            <Link
              href="/testimonials/"
              className="font-mono text-[11px] text-[#2196f3] tracking-wider hover:underline hidden sm:inline"
            >
              VIEW ALL →
            </Link>
            <span className="font-mono text-[10px] text-[#3a3a3a]">
              {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] border-b border-[#1e1e1e]">
          <div className="border-r border-[#1e1e1e] p-8 lg:p-12">
            <blockquote
              className={`transition-all duration-250 ${
                fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-3xl lg:text-5xl leading-[0.95] tracking-tight text-[#f2ede6] mb-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#2e2e2e] flex items-center justify-center bg-[#0e0e0e]">
                  <span className="font-display text-lg text-[#2196f3]">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#f2ede6] tracking-wider">{t.author}</p>
                  <p className="font-mono text-[10px] text-[#3a3a3a] tracking-wider">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          </div>

          <div className="flex flex-col">
            <div
              className={`flex-1 p-8 border-b border-[#1e1e1e] row-hover transition-all duration-250 ${
                fading ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="sys-tag text-[9px] mb-4 block">FEEDBACK</span>
              <div className="font-display text-6xl text-[#2196f3]">{t.metric}</div>
              <div className="font-mono text-[10px] text-[#3a3a3a] tracking-widest mt-2">
                {t.metricLabel}
              </div>
            </div>

            <div className="p-6 flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => {
                    setFading(true);
                    setTimeout(() => {
                      setActive(i);
                      setFading(false);
                    }, 250);
                  }}
                  className={`h-1 transition-all duration-300 ${
                    i === active ? "w-8 bg-[#2196f3]" : "w-2 bg-[#2e2e2e] hover:bg-[#5a5a5a]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
