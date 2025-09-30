// /lib/urls.ts
import { site } from "@/lib/meta";

/** join a path to the site.url, ensuring a single slash */
export function absUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url.replace(/\/$/, "")}${clean}`;
}
