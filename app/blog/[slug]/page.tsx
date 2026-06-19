import { notFound } from "next/navigation";
import Link from "next/link";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { SiteCta } from "@/components/site/site-cta";
import { PageSeo } from "@/components/site/page-seo";
import {
  blogPosts,
  formatBlogDate,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { articleSchema, createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, post.category, "software blog"],
    path: `/blog/${post.slug}/`,
    type: "article",
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const schema = articleSchema(
    post.title,
    post.excerpt,
    `/blog/${post.slug}/`,
    post.publishedDate,
    post.author
  );

  return (
    <PageLayout>
      <PageSeo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}/`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
        schemas={[schema]}
      />
      <article>
      <PageHero tag={post.category.toUpperCase()} title={post.title} description={post.excerpt}>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <span className="font-mono text-[11px] text-[#3a3a3a] tracking-widest">
            {formatBlogDate(post.publishedDate)}
          </span>
          <span className="font-mono text-[11px] text-[#3a3a3a] tracking-widest">
            {post.readTime}
          </span>
          <span className="font-mono text-[11px] text-[#3a3a3a] tracking-widest">
            {post.author}
          </span>
        </div>
      </PageHero>

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="sys-tag">ARTICLE</span>
            <div className="mt-8 space-y-6">
              {post.contentParagraphs.map((paragraph, index) => (
                <Stagger key={index} index={index} baseDelay={60}>
                  <p className="text-sm text-[#5a5a5a] leading-relaxed">{paragraph}</p>
                </Stagger>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2 border-t border-[#1e1e1e] pt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-widest border border-[#1e1e1e] px-3 py-1.5 text-[#5a5a5a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {related.length > 0 && (
        <AnimatedSection className="border-b border-[#1e1e1e] bg-[#080808]" delay={100}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-4xl text-[#f2ede6] uppercase">Related Articles</h2>
              <Link
                href="/blog/"
                className="font-mono text-[11px] tracking-widest text-[#2196f3] hover:underline"
              >
                VIEW ALL →
              </Link>
            </div>
            <div className="border border-[#1e1e1e]">
              {related.map((item, index) => (
                <Stagger key={item.slug} index={index}>
                  <Link
                    href={`/blog/${item.slug}/`}
                    className="block border-b border-[#1e1e1e] last:border-b-0 p-6 lg:p-8 row-hover group"
                  >
                    <span className="sys-tag text-[9px]">{item.category}</span>
                    <h3 className="font-display text-2xl text-[#f2ede6] mt-3 group-hover:text-[#2196f3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#5a5a5a] leading-relaxed max-w-2xl">
                      {item.excerpt}
                    </p>
                  </Link>
                </Stagger>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <SiteCta
        title="Ready To Start Your Next Project?"
        description="Share your software goals and we will help you plan the right delivery approach."
      />
      </article>
    </PageLayout>
  );
}
