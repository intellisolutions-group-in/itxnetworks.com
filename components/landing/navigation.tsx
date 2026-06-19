"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { company } from "@/lib/company";
import { SiteLogo } from "@/components/site/site-logo";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about/" },
  { name: "SERVICES", href: "/services/" },
  { name: "PORTFOLIO", href: "/portfolio/" },
  { name: "CAREERS", href: "/careers/" },
  { name: "CONTACT", href: "/contact/" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

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
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050505]/95 backdrop-blur-sm border-b border-[#1e1e1e]" : "bg-transparent"
        }`}
      >
        <div className="border-b border-[#1e1e1e] px-6 lg:px-12 h-8 flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest uppercase">
            SYS:{company.brandName.replace(/\s/g, "_").toUpperCase()} &nbsp;/&nbsp; EST.{" "}
            {company.establishedYear}
          </span>
          <div className="hidden md:flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#3a3a3a]">
              <span className="text-[#22c55e]">●</span>&nbsp;DELIVERY_READY
            </span>
            <span className="font-mono text-[10px] text-[#3a3a3a] tabular-nums">{time} IST</span>
          </div>
        </div>

        <div className="px-6 lg:px-12 h-14 flex items-center justify-between">
          <SiteLogo showTagline />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.18em] text-[#5a5a5a] hover:text-[#2196f3] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/faq/"
              className="font-mono text-[11px] tracking-widest text-[#5a5a5a] hover:text-[#f2ede6] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact/"
              className="font-mono text-[11px] tracking-widest bg-[#2196f3] text-[#050505] px-5 h-9 flex items-center hover:bg-[#42a5f5] transition-colors font-semibold"
            >
              GET_IN_TOUCH →
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#f2ede6] p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#050505] flex flex-col transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "88px" }}
      >
        <div className="border-t border-[#1e1e1e] flex flex-col">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[#1e1e1e] px-8 py-7 font-display text-5xl tracking-wider text-[#f2ede6] hover:text-[#2196f3] transition-all duration-300 flex items-center justify-between ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {link.name}
              <span className="font-mono text-xs text-[#3a3a3a]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-auto p-8 border-t border-[#1e1e1e]">
          <Link
            href="/contact/"
            onClick={() => setOpen(false)}
            className="w-full block text-center font-mono text-sm tracking-widest bg-[#2196f3] text-[#050505] py-5 font-semibold"
          >
            GET_IN_TOUCH →
          </Link>
        </div>
      </div>
    </>
  );
}
