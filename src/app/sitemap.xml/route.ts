export const dynamic = "force-static";
import { blogPosts } from "@/data/site";

export async function GET() {
  const baseUrl = "https://yang-yubo.vercel.app";

  const staticPages = ["", "/about", "/blog", "/projects", "/tools", "/contact"];
  const blogPages = blogPosts.map((p) => `/blog/${p.id}`);

  const urls = [...staticPages, ...blogPages]
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${path === "" ? "daily" : "weekly"}</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
