import { allProjects } from "contentlayer/generated";

export default function WorkPage() {
  const projects = [...allProjects]
    .filter((project) => project.lang === "en")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <section className="container space-y-8 py-16" lang="en">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Selected Work</h1>
        <p className="text-[var(--content-dim)] max-w-prose">
          A sampling of recent collaborations shaped for commerce, culture, and calm growth.
        </p>
      </header>
      <ul className="grid gap-6">
        {projects.map((project) => (
          <li key={project.slug} className="rounded-lg border border-[var(--border-muted)] p-6">
            <h2 className="text-2xl font-medium">{project.title}</h2>
            <p className="text-[var(--content-dim)] mt-2">{project.summary}</p>
            <p className="text-sm text-[var(--content-muted)] mt-4">
              {new Date(project.date).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}