import { lazy } from "react";
import type { ComponentType } from "react";

type MDXProps = { className?: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags?: string[];
  load: () => Promise<{ default: ComponentType<MDXProps> }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dont-know-how-many-screws",
    title: "You Don't Know How Many Screws You Have",
    date: "2026-02-04",
    excerpt: "When having data doesn't mean understanding anything",
    readTime: "4 min read",
    tags: ["Product", "Data", "BI"],
    load: () => import("@/content/blog/dont-know-how-many-screws.mdx"),
  },
  {
    slug: "everything-possible-doesnt-mean-everything-right",
    title:
      "If everything is possible, why do we keep building the wrong thing?",
    date: "2026-02-02",
    excerpt:
      "Stop asking “what should we add next?” and start asking “what for?”, because every new feature brings new support… and sometimes it doesn't even bring real usage.",
    readTime: "5 min read",
    tags: ["Product", "Engineering", "Build"],
    load: () =>
      import("@/content/blog/everything-possible-doesnt-mean-everything-right.mdx"),
  },
];

export const blogPostComponentsBySlug: Record<
  string,
  ComponentType<MDXProps>
> = Object.fromEntries(blogPosts.map((p) => [p.slug, lazy(p.load)]));

const byDateDesc = (a: BlogPost, b: BlogPost) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const getAllBlogPosts = () => [...blogPosts].sort(byDateDesc);
export const getLatestBlogPosts = (count = 3) =>
  getAllBlogPosts().slice(0, count);
export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
