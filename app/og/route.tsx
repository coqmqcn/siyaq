// app/og/route.tsx
import React from "react";
import { ImageResponse } from "next/og";

// Run on the edge for speed
export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("t") || "Hello world!";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 60,
          lineHeight: 1.1,
          background:
            "radial-gradient(60% 40% at 50% 0%, #141625, #0b0b0d 60%)",
          color: "white",
        }}
      >
        {title}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}   
// lib/meta.ts
