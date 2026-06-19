"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: "01",
    tag: "DISCOVER",
    title: "DEFINE\nREQUIREMENTS",
    desc: "We begin with discovery workshops to understand business goals, users, integrations, and success metrics before development starts.",
    code: `// Discovery output
const projectScope = {
  goals: ['Reduce manual work', 'Improve reporting'],
  users: ['Operations', 'Management'],
  integrations: ['ERP', 'Payment gateway'],
  milestones: ['MVP', 'Phase 2 rollout'],
}

// Shared understanding before build`,
  },
  {
    id: "02",
    tag: "BUILD",
    title: "AGILE\nDELIVERY",
    desc: "Iterative sprints with demos, code reviews, automated testing, and transparent backlog management keep delivery predictable.",
    code: `sprint({
  duration: '2 weeks',
  ceremonies: ['Planning', 'Demo', 'Retro'],
  quality: ['Code review', 'QA', 'Staging'],
  communication: 'Weekly status report',
})

// Visible progress every sprint`,
  },
  {
    id: "03",
    tag: "LAUNCH",
    title: "DEPLOY &\nSUPPORT",
    desc: "Production rollout includes monitoring, documentation, handover, and optional maintenance programmes for long-term stability.",
    code: `await deploy({
  environment: 'production',
  monitoring: true,
  runbooks: true,
  supportPlan: 'SLA-backed maintenance',
})

// Launch with operational readiness`,
  },
];

export function HowItWorksSection() {
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const step = STEPS[active];

  return (
    <section id="our-process" ref={ref} className="relative border-t border-[#1e1e1e] bg-[#080808] scroll-mt-[88px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">OUR PROCESS</span>
            <h2 className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]">
              FROM IDEA<br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                TO PRODUCTION
              </span>
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
            DISCOVER &nbsp;·&nbsp; BUILD &nbsp;·&nbsp; LAUNCH
          </span>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] border-b border-[#1e1e1e]">
          <div className="border-r border-[#1e1e1e]">
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`w-full text-left border-b border-[#1e1e1e] p-6 transition-all duration-200 group ${
                  active === i ? "bg-[#0e0e0e]" : "hover:bg-[#0a0a0a]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] text-[#3a3a3a] tracking-widest">{s.tag}</span>
                  <span className="font-mono text-[10px] text-[#3a3a3a]">{s.id}</span>
                </div>
                <h3
                  className={`font-display text-2xl leading-[0.9] transition-colors whitespace-pre-line ${
                    active === i ? "text-[#2196f3]" : "text-[#3a3a3a] group-hover:text-[#5a5a5a]"
                  }`}
                >
                  {s.title}
                </h3>
                {active === i && (
                  <div className="mt-4 h-px bg-[#1e1e1e] overflow-hidden">
                    <div
                      key={active}
                      className="h-full bg-[#2196f3]"
                      style={{ width: 0, animation: "draw-line 5s linear forwards" }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="border-r border-[#1e1e1e] p-8 flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#5a5a5a] leading-relaxed mb-8">{step.desc}</p>
                <Link
                  href="/our-process/"
                  className="inline-flex items-center gap-2 font-mono text-[11px] text-[#2196f3] tracking-wider hover:underline"
                >
                  FULL PROCESS →
                </Link>
              </div>
              <div className="mt-8 font-mono text-[10px] text-[#3a3a3a] border-t border-[#1e1e1e] pt-4">
                STEP &nbsp;{step.id} &nbsp;OF &nbsp;03
              </div>
            </div>

            <div className="bg-[#050505]">
              <div className="border-b border-[#1e1e1e] px-5 py-3 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#3a3a3a]">delivery-plan.ts</span>
                <div className="flex items-center gap-2">
                  <span className="status-pulse w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                  <span className="font-mono text-[10px] text-[#22c55e]">READY</span>
                </div>
              </div>
              <div className="p-6 font-mono text-[12px] min-h-[260px]">
                <pre>
                  {step.code.split("\n").map((line, li) => (
                    <div
                      key={`${active}-${li}`}
                      className="leading-7"
                      style={{ animation: `fade-up 0.3s ease ${li * 60}ms both` }}
                    >
                      <span className="text-[#3a3a3a] select-none w-5 inline-block text-right mr-4">
                        {li + 1}
                      </span>
                      <span className="text-[#5a5a5a]">{line}</span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
