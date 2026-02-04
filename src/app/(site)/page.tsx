import { Hero } from "@/components/hero/Hero";
import { BlogPreviewSection } from "@/components/blog/BlogPreviewSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BlogPreviewSection />
    </div>
  );
}
