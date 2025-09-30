import ContactForm from "@/components/ContactForm";
export default function Contact(){
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-serif mb-4">Contact</h1>
      <ContactForm locale="en" />
    </section>
  );
}
