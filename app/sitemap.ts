import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/company";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";

export const dynamic = "force-static";

const staticPages = [
  "",
  "about/",
  "services/",
  "contact/",
  "careers/",
  "blog/",
  "portfolio/",
  "why-choose-us/",
  "our-process/",
  "faq/",
  "testimonials/",
  "privacy/",
  "terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
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
