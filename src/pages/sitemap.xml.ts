import type { APIRoute } from "astro";
import { featuredProjects } from "@/data/site";
import { getAllBlogPosts } from "@/data/blog";

export const GET: APIRoute = ({ site }) => {
  const paths = ["/", ...featuredProjects.map((project) => `/work/${project.slug}/`), ...getAllBlogPosts().map((post) => `/notes/${post.slug}/`)];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${new URL(path, site)}</loc></url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
