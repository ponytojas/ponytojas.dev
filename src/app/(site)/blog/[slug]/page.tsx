import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blog";
import { formatDate } from "@/lib/formatDate";
import { BlogPostContent } from "@/components/blog/BlogPostContent";

export const dynamicParams = false;

export const generateStaticParams = () =>
  getAllBlogPosts().map((post) => ({ slug: post.slug }));

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-24 md:py-32">
      <div className="container-custom">
        <div className="mb-10">
          <Link href="/blog" className="text-sm font-medium text-muted-foreground link-subtle">
            Back to blog
          </Link>
        </div>

        <header className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-4">
            <time
              className="text-xs font-mono text-muted-foreground tabular-nums"
              dateTime={post.date}
            >
              {formatDate(post.date)}
            </time>
            <span className="text-xs font-mono text-muted-foreground/70 tabular-nums">
              {post.readTime}
            </span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-muted-foreground text-pretty max-w-2xl">
            {post.excerpt}
          </p>
          {post.tags && post.tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={`${post.slug}-${tag}`}
                  className="text-xs font-mono text-muted-foreground/70 border border-border rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none text-pretty prose-headings:text-balance">
          <BlogPostContent slug={post.slug} />
        </article>
      </div>
    </div>
  );
}
