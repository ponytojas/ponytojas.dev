"use client";

import { lazy, Suspense, useMemo } from "react";
import { getBlogPostBySlug } from "@/data/blog";

export const BlogPostContent = ({ slug }: { slug: string }) => {
  const Content = useMemo(() => {
    const post = getBlogPostBySlug(slug);
    if (!post) {
      return null;
    }
    return lazy(post.load);
  }, [slug]);

  if (!Content) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <Content className="prose prose-lg dark:prose-invert max-w-none" />
    </Suspense>
  );
};
