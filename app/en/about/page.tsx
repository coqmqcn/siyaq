import type { Metadata } from "next";
import { site } from "@/lib/meta";

export const metadata: Metadata = {
  title: "About Siyaq",
  description: site.descriptionEn
};

export default function AboutPage() {
  return (
    <section className="container space-y-4 py-16" lang="en">
      <h1 className="text-3xl font-semibold">About Siyaq</h1>
      <p className="text-[var(--content-dim)] max-w-prose">
        {site.descriptionEn}
      </p>
    </section>
  );
}