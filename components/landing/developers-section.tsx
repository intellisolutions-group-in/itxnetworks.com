"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const TABS = [
  {
    label: "SCaffold",
    code: `npx create-app@latest client-portal
cd client-portal
npm install validation library form library

# Project structure
/src
  /components
  /lib
  /app`,
  },
  {
    label: "BUILD",
    code: `// Feature module — typed data layer
export async function getOrders(userId: string) {
  // Static mock — illustrative delivery pipeline sample
  return [{ id: "ord-001", userId, status: "fulfilled" }]
}

// Component consumes typed data
export function OrdersPanel({ userId }: { userId: string }) {
  // render list, filters, actions
}`,
  },
  {
    label: "DEPLOY",
    code: `# CI pipeline excerpt
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - checkout source
      - run: npm ci
      - run: npm run test
      - run: npm run build
  deploy:
    needs: build
    environment: production`,
  },
  {
    label: "TEST",
    code: `import { test, expect } from 'testing-framework'

test('checkout flow completes', async ({ page }) => {
  await page.goto('/checkout')
  await page.fill('#email', 'user@example.com')
  await page.click('button[type=submit]')
  await expect(page.getByText('Thank you')).toBeVisible()
})`,
  },
];

const STACK_PROPS = [
  { k: "Modern frameworks", v: "Web frameworks, server runtimes, enterprise platforms, and scripting languages." },
  { k: "Cloud-native delivery", v: "Public cloud, private cloud, containers, and orchestration." },
  { k: "Quality built-in", v: "Automated tests, code review, and staged releases." },
  { k: "Maintainable code", v: "Documentation, modular architecture, and handover support." },
];

export function DevelopersSection() {
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(false);
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

  const copy = () => {
    navigator.clipboard.writeText(TABS[tab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="developers"
      ref={ref}
      className="relative border-t border-[#1e1e1e] scroll-mt-[88px]"
      aria-labelledby="developers-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="sys-tag mb-3 block">ENGINEERING APPROACH</span>
          <h2
            id="developers-heading"
            className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]"
          >
            BUILT FOR<br />
            <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
              PRODUCTION
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 border-b border-[#1e1e1e]">
          <div className="border-r border-[#1e1e1e]">
            <div className="border-b border-[#1e1e1e] p-6">
              <p className="text-sm text-[#5a5a5a] leading-relaxed max-w-md">
                We engineer software with clean architecture, automated quality checks, and
                deployment practices suited to enterprise and growth-stage products across India.
              </p>
            </div>

            {STACK_PROPS.map((p, i) => (
              <div
                key={p.k}
                className={`border-b border-[#1e1e1e] px-6 py-5 row-hover transition-all duration-400 ${
                  vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 60 + 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] text-[#2196f3] tracking-wider">{p.k}</span>
                  <span className="font-mono text-[10px] text-[#3a3a3a]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#5a5a5a]">{p.v}</p>
              </div>
            ))}

            <div className="p-6 flex items-center gap-6">
              <Link href="/our-process/" className="font-mono text-[11px] text-[#2196f3] tracking-wider hover:underline">
                OUR PROCESS →
              </Link>
              <Link href="/services/" className="font-mono text-[11px] text-[#5a5a5a] tracking-wider hover:text-[#f2ede6] transition-colors">
                TECH STACK →
              </Link>
            </div>
          </div>

          <div
            className={`flex flex-col transition-all duration-600 delay-200 ${
              vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex border-b border-[#1e1e1e]">
              {TABS.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setTab(i)}
                  className={`flex-1 py-3 font-mono text-[10px] tracking-[0.15em] transition-colors relative ${
                    tab === i
                      ? "text-[#2196f3] bg-[#0e0e0e]"
                      : "text-[#3a3a3a] hover:text-[#5a5a5a] hover:bg-[#0a0a0a]"
                  }`}
                >
                  {t.label.toUpperCase()}
                  {tab === i && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[#2196f3]" />
                  )}
                </button>
              ))}
              <button
                type="button"
                onClick={copy}
                className="px-4 border-l border-[#1e1e1e] text-[#3a3a3a] hover:text-[#2196f3] transition-colors"
                aria-label="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex-1 bg-[#050505] p-6 font-mono text-[12px] min-h-[300px]">
              <pre>
                {TABS[tab].code.split("\n").map((line, li) => (
                  <div
                    key={`${tab}-${li}`}
                    className="leading-7 flex gap-4"
                    style={{ animation: `fade-up 0.25s ease ${li * 45}ms both` }}
                  >
                    <span className="text-[#2e2e2e] select-none w-4 text-right shrink-0">{li + 1}</span>
                    <span className="text-[#5a5a5a]">{line}</span>
                  </div>
                ))}
              </pre>
            </div>

            <div className="border-t border-[#1e1e1e] px-6 py-3 flex items-center justify-between bg-[#080808]">
              <span className="font-mono text-[10px] text-[#3a3a3a]">ITX Networks · delivery pipeline</span>
              <div className="flex items-center gap-2">
                <span className="status-pulse w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                <span className="font-mono text-[10px] text-[#22c55e]">READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
