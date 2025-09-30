// /app/sitemap.ts
import type { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";
import { absUrl } from "@/lib/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = [
    "",
    "/ar",
    "/en",
    "/ar/blog",
    "/en/blog",
    "/ar/contact",
    "/en/contact",
    "/ar/work",
    "/en/work"
  ].map((p) => ({
    url: absUrl(p),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  const posts = allPosts.map((p) => ({
    url: absUrl(`/${p.lang}/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...base, ...posts];
}
