const services = [
  {
    title: "Brand Systems",
    description: "Cohesive identities that scale across print and product."
  },
  {
    title: "Interface Craft",
    description: "Human-centered digital experiences tuned for clarity and calm."
  },
  {
    title: "Content Strategy",
    description: "Narratives and structures that let products speak with purpose."
  }
];

export default function ServicesPage() {
  return (
    <section className="container space-y-8 py-16" lang="en">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Services</h1>
        <p className="text-[var(--content-dim)] max-w-prose">
          Partnerships shaped around focus, cultural depth, and measurable calm.
        </p>
      </header>
      <ul className="grid gap-6 sm:grid-cols-2">
        {services.map((item) => (
          <li key={item.title} className="rounded-lg border border-[var(--border-muted)] p-6">
            <h2 className="text-xl font-medium">{item.title}</h2>
            <p className="text-[var(--content-dim)] mt-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}