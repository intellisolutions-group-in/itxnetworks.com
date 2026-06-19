"use client";

import { useEffect, useRef, useState } from "react";
import { siteMetrics } from "@/lib/site-metrics";

function AnimCounter({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(ease * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div
      ref={ref}
      className="font-display text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight text-[#f2ede6] tabular-nums"
    >
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </div>
  );
}

const SPRINT_DATA: number[] = (() => {
  const d: number[] = [];
  for (let i = 0; i < 90; i++) {
    if (i === 18 || i === 55) d.push(2);
    else if (i === 30 || i === 67) d.push(1);
    else d.push(0);
  }
  return d;
})();

const STATUS_COLOR: Record<number, string> = {
  0: "#22c55e",
  1: "#f59e0b",
  2: "#ef4444",
};

const METRICS = [
  {
    display: String(siteMetrics.establishedYear),
    label: "ESTABLISHED",
    sub: "long-term software delivery partner",
  },
  {
    end: siteMetrics.domainAgeYears,
    suffix: "+",
    label: "YEARS ACTIVE",
    sub: `software delivery since ${siteMetrics.establishedYear}`,
  },
  {
    end: siteMetrics.serviceAreaCount,
    suffix: "",
    label: "SERVICE AREAS",
    sub: "web, mobile, cloud, enterprise",
  },
  {
    end: siteMetrics.faqCount,
    suffix: "+",
    label: "FAQ ANSWERS",
    sub: "common client questions covered",
  },
];

export function MetricsSection() {
  const [vis, setVis] = useState(false);
  const [time, setTime] = useState("");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

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
      id="metrics"
      ref={ref}
      className="relative border-t border-[#1e1e1e] scroll-mt-[88px]"
      aria-labelledby="metrics-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`border-b border-[#1e1e1e] py-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 transition-all duration-500 ${
            vis ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <span className="sys-tag mb-3 block">COMPANY METRICS</span>
            <h2
              id="metrics-heading"
              className="font-display text-6xl lg:text-8xl leading-[0.88] tracking-tight text-[#f2ede6]"
            >
              DELIVERY YOU
              <br />
              <span style={{ WebkitTextStroke: "1px #3a3a3a", color: "transparent" }}>
                CAN TRACK
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] text-[#3a3a3a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block status-pulse" />
            <span className="text-[#22c55e]">ACTIVE</span>
            <span className="tabular-nums">{time} IST</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#1e1e1e]">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`border-r border-[#1e1e1e] last:border-r-0 border-b lg:border-b-0 p-6 lg:p-8 overflow-hidden transition-all duration-500 row-hover ${
                vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {"display" in m && m.display ? (
                <div className="font-display text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight text-[#f2ede6] tabular-nums">
                  {m.display}
                </div>
              ) : (
                <AnimCounter end={m.end!} suffix={m.suffix} />
              )}
              <div className="mt-3 font-mono text-[10px] text-[#2196f3] tracking-[0.18em]">
                {m.label}
              </div>
              <div className="mt-1 font-mono text-[10px] text-[#3a3a3a]">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="py-6">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest uppercase">
              Sprint delivery rhythm (90 days)
            </span>
            <span className="font-mono text-[10px] text-[#22c55e] tracking-widest">ON TRACK</span>
          </div>
          <div className="flex gap-[3px] items-end h-10">
            {SPRINT_DATA.map((status, i) => (
              <div
                key={i}
                title={status === 0 ? "On track" : status === 1 ? "At risk" : "Blocked"}
                className="flex-1 rounded-sm transition-opacity hover:opacity-80 cursor-default"
                style={{
                  height: status === 2 ? "100%" : status === 1 ? "80%" : "70%",
                  background: STATUS_COLOR[status],
                  alignSelf: "flex-end",
                  opacity: vis ? 1 : 0,
                  transition: `opacity 0.4s ease ${i * 8}ms, height 0.3s ease`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-[9px] text-[#3a3a3a]">90 days ago</span>
            <span className="font-mono text-[9px] text-[#3a3a3a]">Today</span>
          </div>
        </div>
      </div>
    </section>
  );
}
