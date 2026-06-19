import Link from "next/link";
import { AnimatedSection, Stagger } from "@/components/site/animated-section";
import { PageLayout } from "@/components/site/page-layout";
import { PageHero } from "@/components/site/page-hero";
import { SiteCta } from "@/components/site/site-cta";
import { blogPosts, formatBlogDate } from "@/lib/blog";
import { company } from "@/lib/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: `Insights on software development, delivery, cloud, mobile, and quality engineering from ${company.brandName}.`,
  keywords: ["software development blog", "IT insights India", "technology articles"],
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHero
        tag="BLOG"
        title="Insights On Software Delivery And Technology"
        description="Practical perspectives on engineering, delivery, modernisation, and product development for organisations across India."
      />

      <AnimatedSection className="border-b border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="border border-[#1e1e1e]">
            {blogPosts.map((post, index) => (
              <Stagger key={post.slug} index={index}>
                <article className="border-b border-[#1e1e1e] last:border-b-0 row-hover">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="grid lg:grid-cols-[56px_1fr_160px] group"
                  >
                    <div className="border-b lg:border-b-0 lg:border-r border-[#1e1e1e] p-5 font-mono text-[10px] text-[#3a3a3a]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#1e1e1e]">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="sys-tag text-[9px]">{post.category}</span>
                        <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
                          {formatBlogDate(post.publishedDate)}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl lg:text-4xl text-[#f2ede6] group-hover:text-[#2196f3] transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-sm text-[#5a5a5a] leading-relaxed max-w-3xl">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] tracking-widest border border-[#1e1e1e] px-3 py-1 text-[#5a5a5a]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col justify-between min-h-[140px]">
                      <span className="font-mono text-[10px] text-[#3a3a3a] tracking-widest">
                        {post.readTime}
                      </span>
                      <span className="font-mono text-[11px] text-[#2196f3] group-hover:underline tracking-wider">
                        READ ARTICLE →
                      </span>
                    </div>
                  </Link>
                </article>
              </Stagger>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <SiteCta
        title="Need Help With Your Software Project?"
        description="Discuss your requirements with our team and receive a practical delivery recommendation."
        primaryLabel="CONTACT_US"
      />
    </PageLayout>
  );
}
