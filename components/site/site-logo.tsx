import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

const LOGO_WIDTH = 3334;
const LOGO_HEIGHT = 834;

type SiteLogoProps = {
  size?: "header" | "footer";
  showTagline?: boolean;
};

export function SiteLogo({ size = "header", showTagline = false }: SiteLogoProps) {
  const logoHeight = size === "header" ? "h-8 md:h-auto" : "h-8";
  const logoSrc = company.logoPath ?? "/images/logo.png";

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label={`${company.brandName} home`}>
      <Image
        src={logoSrc}
        alt={`${company.brandName} logo`}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={`${logoHeight} w-auto`}
        priority={size === "header"}
      />
      {showTagline && (
        <span className="hidden lg:block font-mono text-[10px] text-[#3a3a3a] border-l border-[#1e1e1e] pl-3 ml-1 tracking-widest">
          SOFTWARE DEVELOPMENT
        </span>
      )}
    </Link>
  );
}
