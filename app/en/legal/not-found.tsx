export default function LegalNotFound() {
  return (
    <section className="container space-y-4 py-16" lang="en">
      <h1 className="text-3xl font-semibold">Document not found</h1>
      <p className="text-[var(--content-dim)] max-w-prose">
        The legal policy you requested does not exist. Please return to the main legal page.
      </p>
    </section>
  );
}