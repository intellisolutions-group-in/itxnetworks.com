"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { company } from "@/lib/company";
import { SiteLogo } from "@/components/site/site-logo";

const LINKS = {
  SERVICES: [
    { name: "All Services", href: "/services/" },
    { name: "Web Development", href: "/services/web-development/" },
    { name: "Mobile Apps", href: "/services/mobile-app-development/" },
    { name: "Custom Software", href: "/services/custom-software-development/" },
    { name: "Cloud Applications", href: "/services/cloud-applications/" },
  ],
  COMPANY: [
    { name: "About", href: "/about/" },
    { name: "Why Choose Us", href: "/why-choose-us/" },
    { name: "Our Process", href: "/our-process/" },
    { name: "Careers", href: "/careers/", badge: "HIRING" },
    { name: "Contact", href: "/contact/" },
  ],
  RESOURCES: [
    { name: "Blog", href: "/blog/" },
    { name: "Portfolio", href: "/portfolio/" },
    { name: "Testimonials", href: "/testimonials/" },
    { name: "FAQ", href: "/faq/" },
  ],
  LEGAL: [
    { name: "Privacy", href: "/privacy/" },
    { name: "Terms", href: "/terms/" },
  ],
};

export function FooterSection() {
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

  return (
    <footer className="relative border-t border-[#1e1e1e]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="border-b border-[#1e1e1e] py-12 grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <SiteLogo size="footer" />
            <p className="text-sm text-[#3a3a3a] leading-relaxed max-w-xs font-mono mt-5">
              {company.tagline}
            </p>
            <p className="font-mono text-[11px] text-[#5a5a5a] mt-4">
              <a href={`mailto:${company.email}`} className="hover:text-[#2196f3] transition-colors">
                {company.email}
              </a>
            </p>
            {/* Phone to be added later
            <p className="font-mono text-[11px] text-[#5a5a5a] mt-2">{company.phone}</p>
            */}
            {/* Social media links to be added later
            <div className="flex gap-5 mt-6">
              <a href="#" className="font-mono text-[10px] tracking-widest text-[#3a3a3a] hover:text-[#2196f3] transition-colors">
                INSTAGRAM ↗
              </a>
              <a href="#" className="font-mono text-[10px] tracking-widest text-[#3a3a3a] hover:text-[#2196f3] transition-colors">
                FACEBOOK ↗
              </a>
            </div>
            */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(LINKS).map(([section, links]) => (
              <div key={section}>
                <h3 className="font-mono text-[9px] tracking-[0.2em] text-[#2196f3] mb-5">
                  {section}
                </h3>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="font-mono text-[11px] text-[#3a3a3a] hover:text-[#f2ede6] transition-colors inline-flex items-center gap-2"
                      >
                        {l.name}
                        {"badge" in l && l.badge && (
                          <span className="text-[9px] border border-[#2196f3]/30 text-[#2196f3] px-1.5 py-0.5 tracking-wider">
                            {l.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#3a3a3a]">
            © {new Date().getFullYear()} {company.brandName.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-[#3a3a3a] tabular-nums">{time} IST</span>
            <div className="flex items-center gap-2">
              <span className="status-pulse w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
              <span className="font-mono text-[10px] text-[#22c55e] tracking-widest">
                DELIVERY_SYSTEMS_OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
