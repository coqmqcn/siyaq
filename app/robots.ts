// /app/robots.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/meta";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url.replace(/\/$/, "")}/sitemap.xml`
  };
}
