import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      aria-label={`Learn more about ${service.title}`}
      className="group border border-[#1e1e1e] row-hover block h-full"
    >
      <div className="border-b border-[#1e1e1e] p-5 flex items-center justify-between">
        <span className="sys-tag text-[9px]">{service.category}</span>
        <span className="font-mono text-[10px] text-[#3a3a3a] group-hover:text-[#2196f3] transition-colors">
          VIEW →
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl lg:text-3xl text-[#f2ede6] group-hover:text-[#2196f3] transition-colors duration-300">
          {service.title.toUpperCase()}
        </h3>
        <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed">
          {service.shortDescription}
        </p>
      </div>
    </Link>
  );
}
