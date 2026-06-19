"use client";

import { useEffect, useState } from "react";
import { formatEstablishedYear } from "@/lib/company";
import { AgentParticleCanvas } from "./agent-particle-canvas";

const VERBS = ["DESIGN", "BUILD", "DEPLOY", "SCALE", "SUPPORT"];



export function HeroSection() {
  const [verbIdx, setVerbIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  useEffect(() => {
    const id = setInterval(() => setVerbIdx(v => (v + 1) % VERBS.length), 640);
    return () => clearInterval(id);
  }, []);



  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg pt-[88px]" aria-labelledby="hero-heading">
      {/* Particle canvas — right half of hero, full height, behind content */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none z-0">
        <AgentParticleCanvas className="w-full h-full" />
      </div>
      {/* Blue radial glow — reinforces canvas area */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(33,150,243,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28 w-full">



        {/* ── MAIN LAYOUT ─── */}
        <div className="grid lg:grid-cols-[1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN */}
          <div>
            {/* Giant headline */}
            <div
              className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Line 1 */}
              <div className="overflow-hidden">
                <p className="font-mono text-[11px] tracking-[0.2em] text-[#2196f3] mb-4">
                  — ITX NETWORKS · SOFTWARE DEVELOPMENT
                </p>
              </div>

              <h1
                id="hero-heading"
                className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-tight uppercase"
              >
                <span className="block text-[#f2ede6]">SOFTWARE WE</span>
                <span
                  className="relative block overflow-hidden h-[clamp(4rem,14vw,12rem)] leading-[0.88] text-[#2196f3]"
                  aria-live="polite"
                >
                  <span
                    key={verbIdx}
                    className="absolute inset-0"
                    style={{ animation: "fade-up 0.1s ease forwards" }}
                  >
                    {VERBS[verbIdx]}
                  </span>
                </span>
                <span className="block text-[#f2ede6]">DELIVER</span>
                <span className="sr-only">
                  IT and software development company in India — custom web, mobile, cloud, and
                  enterprise solutions
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <div
              className={`mt-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <p className="text-base text-[#5a5a5a] leading-relaxed max-w-xl">
                Custom web, mobile, cloud, and enterprise software for organisations across India. ITX Networks combines engineering discipline, transparent delivery, and long-term support.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 w-fit">
                <a
                  href="/contact/"
                  className="group inline-flex items-center gap-8 bg-[#2196f3] text-[#050505] font-mono text-sm tracking-widest px-6 py-4 hover:bg-[#42a5f5] transition-colors font-semibold whitespace-nowrap"
                >
                  START A PROJECT
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="/services/"
                  className="group inline-flex items-center gap-8 border border-[#1e1e1e] text-[#f2ede6] font-mono text-sm tracking-widest px-6 py-4 hover:border-[#2196f3]/40 hover:text-[#2196f3] transition-colors whitespace-nowrap"
                >
                  VIEW SERVICES
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 mt-5">
                <div className="flex -space-x-2">
                  {["#3b82f6","#a855f7","#ec4899","#2196f3"].map((c) => (
                    <div key={c} className="w-6 h-6 rounded-full border border-[#050505]" style={{ background: c }} />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-[#3a3a3a]">
                  Trusted software partner since {formatEstablishedYear()}
                </span>
              </div>
            </div>
          </div>


        </div>

      </div>

      {/* ── BOTTOM TICKER — full viewport width ─── */}
      <div
        className={`absolute bottom-0 left-0 right-0 border-t border-[#1e1e1e] py-5 transition-all duration-700 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="marquee-fast whitespace-nowrap flex gap-16">
            {[...Array(2)].map((_, rep) => (
              <span key={rep} className="inline-flex items-center gap-16">
                {[
                  "WEB DEVELOPMENT",
                  "MOBILE APPLICATIONS",
                  "ENTERPRISE SOFTWARE",
                  "CLOUD-NATIVE SYSTEMS",
                  "API INTEGRATION",
                  "UI/UX DESIGN",
                  "QUALITY ASSURANCE",
                  "MAINTENANCE & SUPPORT",
                ].map(item => (
                  <span key={item} className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#3a3a3a]">
                    <span className="w-1 h-1 bg-[#2196f3] inline-block shrink-0" />
                    {item}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
