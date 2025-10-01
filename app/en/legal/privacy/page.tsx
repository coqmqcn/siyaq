const sections = [
  {
    title: "What we collect",
    body: "We only gather information you choose to send us through the contact form or email."
  },
  {
    title: "How we use it",
    body: "Details are used to reply to enquiries and shape project proposals. We do not sell or share your data."
  },
  {
    title: "How to reach us",
    body: "Send an email to studio@siyaq.studio to review, update, or delete any information."
  }
];

export default function PrivacyPage() {
  return (
    <section className="container space-y-8 py-16" lang="en">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Privacy Notice</h1>
        <p className="text-[var(--content-dim)] max-w-prose">
          We keep data practices straightforward and respectful.
        </p>
      </header>
      <dl className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-lg border border-[var(--border-muted)] p-6">
            <dt className="text-xl font-medium">{section.title}</dt>
            <dd className="text-[var(--content-dim)] mt-2">{section.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}