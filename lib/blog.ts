import blogData from "@/data/blog.json";

export type BlogPost = (typeof blogData)[number];

export const blogPosts: BlogPost[] = blogData;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);

  return blogPosts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
