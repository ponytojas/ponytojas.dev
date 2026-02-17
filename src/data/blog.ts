import PostDontKnow from "@/mdx/blog/dont-know-how-many-screws.mdx";
import PostEverythingPossible from "@/mdx/blog/everything-possible-doesnt-mean-everything-right.mdx";

type MdxComponent = (...args: any[]) => any;

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags?: string[];
  Component: MdxComponent;
};

const asComponent = (component: unknown) => component as MdxComponent;

export const blogPosts: BlogPost[] = [
  {
    slug: "dont-know-how-many-screws",
    title: "You Don't Know How Many Screws You Have",
    date: "2026-02-04",
    excerpt: "When having data doesn't mean understanding anything",
    readTime: "4 min read",
    tags: ["Product", "Data", "BI"],
    Component: asComponent(PostDontKnow),
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
    Component: asComponent(PostEverythingPossible),
  },
];

const byDateDesc = (a: BlogPost, b: BlogPost) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export const getAllBlogPosts = () => [...blogPosts].sort(byDateDesc);
export const getLatestBlogPosts = (count = 3) =>
  getAllBlogPosts().slice(0, count);
export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
