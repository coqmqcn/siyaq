import "@/styles/globals.css";
import type { Metadata } from "next";
import { site as siteMeta } from "@/lib/meta";
import { Noto_Naskh_Arabic, Cairo, Inter } from "next/font/google";

const display = Noto_Naskh_Arabic({ subsets:["arabic"], weight:["400","700"], display:"swap", variable:"--font-display" });
const ui = Cairo({ subsets:["arabic"], weight:["400","600","700"], display:"swap", variable:"--font-ui" });
const latin = Inter({ subsets:["latin"], display:"swap", variable:"--font-latin" });

const S = siteMeta;

export const metadata: Metadata = {
  metadataBase: new URL(S.url),
  title: { default: S.nameEn, template: "%s — SIYAQ" },
  description: S.descriptionEn,
  openGraph: { title: S.nameEn, description: S.descriptionEn, type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" lang="ar" className={`${display.variable} ${ui.variable} ${latin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
