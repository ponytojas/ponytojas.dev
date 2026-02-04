import { BlogList } from "@/components/blog/BlogList";
import { getAllBlogPosts } from "@/data/blog";

export default function BlogPage() {
  // Strip the load function before passing to client component
  const posts = getAllBlogPosts().map(({ slug, title, date, excerpt, readTime, tags }) => ({
    slug,
    title,
    date,
    excerpt,
    readTime,
    tags,
  }));

  return (
    <div className="py-24 md:py-32">
      <div className="container-custom">
        <div className="mb-16 md:mb-20">
          <span className="section-number text-sm font-mono text-brand-accent uppercase inline-block mb-6">
            Thoughts
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground text-balance">
            All posts
          </h1>
          <p className="mt-6 text-muted-foreground text-pretty max-w-2xl">
            Essays, notes, and small observations on engineering, product, and building with care.
          </p>
        </div>

        <BlogList posts={posts} />
      </div>
    </div>
  );
}
