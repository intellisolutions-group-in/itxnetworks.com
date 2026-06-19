import type { ReactNode } from "react";
import { PageSeo } from "@/components/site/page-seo";
import { createMetadata } from "@/lib/seo";
import { company } from "@/lib/company";

const PAGE_TITLE = "Careers";
const PAGE_DESCRIPTION = `Explore career opportunities at ${company.brandName}. Join our India-based software development team across engineering, design, QA, and delivery.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["ITX Networks careers", "software jobs India", "developer jobs India"],
  path: "/careers/",
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageSeo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/careers/"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: PAGE_TITLE, path: "/careers/" },
        ]}
      />
      {children}
    </>
  );
}
