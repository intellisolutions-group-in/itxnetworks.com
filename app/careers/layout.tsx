import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";
import { company } from "@/lib/company";

export const metadata = createMetadata({
  title: "Careers",
  description: `Explore career opportunities at ${company.brandName}. Join our remote-friendly software development team across engineering, design, QA, and delivery.`,
  keywords: ["ITX Networks careers", "software jobs India", "remote developer jobs"],
  path: "/careers/",
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
