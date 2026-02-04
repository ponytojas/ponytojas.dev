"use client";

import { Suspense } from "react";
import { blogPostComponentsBySlug } from "@/data/blog";

export const BlogPostContent = ({ slug }: { slug: string }) => {
  const Content = blogPostComponentsBySlug[slug];
  if (!Content) return null;

  return (
    <Suspense fallback={null}>
      <Content className="prose prose-lg dark:prose-invert max-w-none" />
    </Suspense>
  );
};
