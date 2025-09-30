// /middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1) Ignore Next internals, assets, API, and DEBUG tools
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/og") ||
    pathname.startsWith("/rss") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/debug") ||      // <-- allow /debug/*
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 2) If already prefixed with a locale, allow through
  if (pathname.startsWith("/ar") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // 3) Default locale: ar
  const url = req.nextUrl.clone();
  url.pathname = `/ar${pathname}`;
  return NextResponse.redirect(url);
}

// Only run on real paths (not files)
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
