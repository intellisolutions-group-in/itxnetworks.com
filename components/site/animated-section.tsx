"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  as?: "section" | "div";
};

export function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0,
  as: Tag = "section",
}: AnimatedSectionProps) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.08 }
    );
    const node = ref.current;
    if (node) obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={ref as never}
      className={`transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  baseDelay?: number;
};

export function Stagger({ children, className = "", index = 0, baseDelay = 80 }: StaggerProps) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${index * baseDelay}ms` }}
    >
      {children}
    </div>
  );
}
