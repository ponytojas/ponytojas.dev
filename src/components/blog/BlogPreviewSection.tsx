import Link from "next/link";
import { getLatestBlogPosts } from "@/data/blog";
import { BlogList } from "@/components/blog/BlogList";

export const BlogPreviewSection = () => {
  // Strip the load function before passing to client component
  const posts = getLatestBlogPosts(3).map(({ slug, title, date, excerpt, readTime, tags }) => ({
    slug,
    title,
    date,
    excerpt,
    readTime,
    tags,
  }));

  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container-custom">
        <div className="mb-16 md:mb-20">
          <span className="section-number text-sm font-mono text-brand-accent uppercase inline-block mb-6">
            Blog
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground text-balance">
            Latest writing
          </h2>
          <p className="mt-6 text-muted-foreground text-pretty max-w-2xl">
            Notes on engineering, product thinking, and the small details that make software feel
            calm and dependable.
          </p>
        </div>

        <BlogList posts={posts} />

        <div className="mt-10">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-foreground link-subtle">
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
};
