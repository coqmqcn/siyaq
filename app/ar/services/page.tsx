const services = [
  {
    title: "أنظمة الهوية",
    description: "هويات متماسكة تمتد عبر المطبوعات والمنتجات الرقمية."
  },
  {
    title: "صياغة الواجهات",
    description: "تجارب رقمية متمحورة حول الإنسان مضبوطة للوضوح والسكينة."
  },
  {
    title: "استراتيجية المحتوى",
    description: "سرديات وهياكل تمكّن المنتجات من الحديث بهدف واضح."
  }
];

export default function ServicesPage() {
  return (
    <section className="container space-y-8 py-16" dir="rtl" lang="ar">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">الخدمات</h1>
        <p className="text-[var(--content-dim)] max-w-prose">
          شراكات تُصمَّم حول التركيز والعمق الثقافي وطمأنينة قابلة للقياس.
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