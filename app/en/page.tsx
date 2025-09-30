import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";

export default function Page(){
  return (
    <>
      <Hero locale="en" />
      <SectionDivider />
      <section className="container pb-20">
        <h2 className="text-xl mb-3">Selected Services</h2>
        <p className="text-[var(--content-dim)] max-w-prose">
          Brand systems, fast Next.js websites, design systems, and performance tuning targeting 95+ Lighthouse.
        </p>
      </section>
    </>
  );
}
