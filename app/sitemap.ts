import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/company";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";

export const dynamic = "force-static";

const staticPages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "about/", priority: 0.9, changeFrequency: "monthly" },
  { path: "services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "contact/", priority: 0.9, changeFrequency: "monthly" },
  { path: "why-choose-us/", priority: 0.8, changeFrequency: "monthly" },
  { path: "our-process/", priority: 0.8, changeFrequency: "monthly" },
  { path: "portfolio/", priority: 0.8, changeFrequency: "monthly" },
  { path: "testimonials/", priority: 0.7, changeFrequency: "monthly" },
  { path: "careers/", priority: 0.8, changeFrequency: "weekly" },
  { path: "blog/", priority: 0.8, changeFrequency: "weekly" },
  { path: "faq/", priority: 0.7, changeFrequency: "monthly" },
  { path: "privacy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "terms/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
