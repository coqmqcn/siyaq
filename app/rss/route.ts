// /app/rss/route.ts
import { allPosts } from "contentlayer/generated";
import { site } from "@/lib/meta";
import { absUrl } from "@/lib/urls";

export const runtime = "edge";

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const items = [...allPosts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escape(site.nameEn)} — Feed</title>
  <link>${site.url}</link>
  <description>${escape(site.descriptionEn)}</description>
  ${items
    .map((p) => {
      const loc = `/${p.lang}/blog/${p.slug}`;
      return `<item>
  <title>${escape(p.title)}</title>
  <link>${absUrl(loc)}</link>
  <guid>${absUrl(loc)}</guid>
  <description>${escape(p.summary ?? "")}</description>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`;
    })
    .join("\n")}
</channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" }
  });
}
