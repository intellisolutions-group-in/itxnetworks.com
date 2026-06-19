import Link from "next/link";
import { company } from "@/lib/company";

type SiteLogoProps = {
  size?: "header" | "footer";
  showTagline?: boolean;
};

export function SiteLogo({ size = "header", showTagline = false }: SiteLogoProps) {
  const logoHeight = size === "header" ? "h-8 md:h-10" : "h-8";

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Logo placeholder — replace with /images/logo.svg when available
      <Image
        src="/images/logo.svg"
        alt={`${company.brandName} Logo`}
        width={size === "header" ? 40 : 32}
        height={size === "header" ? 40 : 32}
        className={logoHeight}
      />
      */}
      <div
        className={`relative border border-[#2196f3] flex items-center justify-center ${
          size === "header" ? "w-7 h-7 md:w-8 md:h-8" : "w-8 h-8"
        }`}
      >
        <div className="w-2 h-2 bg-[#2196f3]" />
        <div className="absolute inset-0 bg-[#2196f3]/10 group-hover:bg-[#2196f3]/20 transition-colors" />
      </div>
      <span className={`font-display tracking-[0.12em] text-[#f2ede6] ${logoHeight} flex items-center text-xl md:text-2xl`}>
        {company.brandName.toUpperCase()}
      </span>
      {showTagline && (
        <span className="hidden lg:block font-mono text-[10px] text-[#3a3a3a] border-l border-[#1e1e1e] pl-3 ml-1 tracking-widest">
          SOFTWARE DEVELOPMENT
        </span>
      )}
    </Link>
  );
}
