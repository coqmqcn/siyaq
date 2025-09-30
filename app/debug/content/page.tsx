import { allPosts, allProjects } from "contentlayer/generated";

export default function DebugContent() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-bold mb-6">🔍 Content Debug</h1>

      <h2 className="text-xl mb-3">Posts</h2>
      <ul className="mb-10 space-y-2">
        {allPosts.map((p) => (
          <li key={p._id} className="p-3 border border-white/10 rounded-md">
            <div><b>Title:</b> {p.title}</div>
            <div><b>Lang:</b> {p.lang}</div>
            <div><b>Slug:</b> {p.slug}</div>
            <div><b>Summary:</b> {p.summary}</div>
          </li>
        ))}
      </ul>

      <h2 className="text-xl mb-3">Projects</h2>
      <ul className="space-y-2">
        {allProjects.map((proj) => (
          <li key={proj._id} className="p-3 border border-white/10 rounded-md">
            <div><b>Title:</b> {proj.title}</div>
            <div><b>Lang:</b> {proj.lang}</div>
            <div><b>Slug:</b> {proj.slug}</div>
            <div><b>Summary:</b> {proj.summary}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
