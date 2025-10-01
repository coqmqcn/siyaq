import type { MetadataRoute } from "next";
import { site } from "@/lib/meta";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/rss`,
      changeFrequency: "weekly",
      priority: 0.3
    }
  ];
}