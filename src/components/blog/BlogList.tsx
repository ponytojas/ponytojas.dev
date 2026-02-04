"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { formatDate } from "@/lib/formatDate";

// Type for blog post data passed to this client component (excludes the load function)
type BlogPostData = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags?: string[];
};

type BlogListProps = {
  posts: BlogPostData[];
};

export const BlogList = ({ posts }: BlogListProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-t border-border">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          className="border-b border-border py-10 md:py-12 group"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.4,
            delay: prefersReducedMotion ? 0 : index * 0.08,
            ease: [0.33, 1, 0.68, 1],
          }}
          whileHover={prefersReducedMotion ? undefined : { x: 4 }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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

            <h3 className="text-2xl md:text-3xl font-medium text-foreground text-balance">
              <Link href={`/blog/${post.slug}`} className="link-subtle">
                {post.title}
              </Link>
            </h3>

            <p className="text-muted-foreground text-pretty">{post.excerpt}</p>

            {post.tags && post.tags.length > 0 ? (
              <motion.div
                className="flex flex-wrap gap-2"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.1 + index * 0.08 }}
              >
                {post.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={`${post.slug}-${tag}`}
                    className="text-xs font-mono text-muted-foreground/70 border border-border rounded-full px-3 py-1 transition-colors hover:border-brand-accent hover:text-muted-foreground"
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.15 + index * 0.08 + tagIndex * 0.03,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            ) : null}
          </div>
        </motion.article>
      ))}
    </div>
  );
};
