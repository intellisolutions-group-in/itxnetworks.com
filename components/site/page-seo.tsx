import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type PageSeoProps = {
  title: string;
  description: string;
  path: string;
  breadcrumbs: BreadcrumbItem[];
  schemas?: Record<string, unknown>[];
};

export function PageSeo({
  title,
  description,
  path,
  breadcrumbs,
  schemas = [],
}: PageSeoProps) {
  return (
    <JsonLd
      data={[
        breadcrumbSchema(breadcrumbs),
        webPageSchema(title, description, path),
        ...schemas,
      ]}
    />
  );
}
