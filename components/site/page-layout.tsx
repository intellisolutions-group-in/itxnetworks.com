import { ReactNode } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505]">
      <Navigation />
      {children}
      <FooterSection />
    </main>
  );
}
