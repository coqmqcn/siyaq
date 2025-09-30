import Link from "next/link";
import { allPosts } from "contentlayer/generated";
export default function BlogAR(){
  const posts = allPosts.filter(p=>p.lang==="ar").sort((a,b)=>+new Date(b.date)-+new Date(a.date));
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-serif mb-6">المدونة</h1>
      <div className="grid gap-6">
        {posts.map(p=>(
          <Link key={p.slug} href={`/ar/blog/${p.slug}`} className="block p-5 border border-white/10 rounded-lg hover:border-[var(--accent-gold)]">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-[var(--content-dim)] mt-1">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
