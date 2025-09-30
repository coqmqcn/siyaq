import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import { absUrl } from "@/lib/urls";

export async function generateStaticParams() {
  return allPosts.filter((p) => p.lang === "en").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = allPosts.find((p) => p.slug === params.slug && p.lang === "en");
  if (!post) return {};
  const url = absUrl(`/en/blog/${post.slug}`);
  const og = absUrl(`/og?t=${encodeURIComponent(post.title)}`);
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      type: "article",
      images: [{ url: og, width: 1200, height: 630, alt: post.title }]
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.summary, images: [og] }
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug && p.lang === "en");
  if (!post) return notFound();
  return (
    <article className="container prose prose-invert py-16">
      <h1>{post.title}</h1>
      <Mdx code={post.body.code} />
    </article>
  );
}
