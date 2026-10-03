import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const body = import.meta.env.SITE_ENV === "staging"
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", site)}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
