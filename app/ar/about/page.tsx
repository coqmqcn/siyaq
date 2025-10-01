import type { Metadata } from "next";
import { site } from "@/lib/meta";

export const metadata: Metadata = {
  title: "عن سياق",
  description: site.descriptionAr
};

export default function AboutPage() {
  return (
    <section className="container space-y-4 py-16" dir="rtl" lang="ar">
      <h1 className="text-3xl font-semibold">عن سياق</h1>
      <p className="text-[var(--content-dim)] max-w-prose">
        {site.descriptionAr}
      </p>
    </section>
  );
}