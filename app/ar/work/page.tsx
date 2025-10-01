import { allProjects } from "contentlayer/generated";

export default function WorkPage() {
  const projects = [...allProjects]
    .filter((project) => project.lang === "ar")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <section className="container space-y-8 py-16" dir="rtl" lang="ar">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">أعمال مختارة</h1>
        <p className="text-[var(--content-dim)] max-w-prose">
          عينات من أحدث الشراكات المصممة للتجارة والثقافة ونمو هادئ.
        </p>
      </header>
      <ul className="grid gap-6">
        {projects.map((project) => (
          <li key={project.slug} className="rounded-lg border border-[var(--border-muted)] p-6">
            <h2 className="text-2xl font-medium">{project.title}</h2>
            <p className="text-[var(--content-dim)] mt-2">{project.summary}</p>
            <p className="text-sm text-[var(--content-muted)] mt-4">
              {new Date(project.date).toLocaleDateString("ar", {
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