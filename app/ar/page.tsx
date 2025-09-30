import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";

export default function Page(){
  return (
    <>
      <Hero locale="ar" />
      <SectionDivider />
      <section className="container pb-20">
        <h2 className="text-xl mb-3">خدمات مختارة</h2>
        <p className="text-[var(--content-dim)] max-w-prose">
          هوية بصرية، مواقع سريعة بـ Next.js، أنظمة تصميم، وتحسين أداء للوصول لـ +95 في Lighthouse.
        </p>
      </section>
    </>
  );
}
