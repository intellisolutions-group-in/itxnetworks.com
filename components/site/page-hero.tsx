"use client";

import { useEffect, useState, type ReactNode } from "react";

type PageHeroProps = {
  tag: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ tag, title, description, children }: PageHeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className="relative border-b border-[#1e1e1e] grid-bg pt-[88px] overflow-hidden"
      aria-labelledby="page-hero-title"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 40%, rgba(33,150,243,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <p
          className={`font-mono text-[11px] tracking-[0.2em] text-[#2196f3] mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          — {tag}
        </p>
        <h1
          id="page-hero-title"
          className={`font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-[#f2ede6] uppercase max-w-5xl transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-8 text-base text-[#5a5a5a] leading-relaxed max-w-3xl transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {description}
          </p>
        )}
        {children && (
          <div
            className={`mt-8 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
