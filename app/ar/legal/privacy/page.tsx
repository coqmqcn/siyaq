const sections = [
  {
    title: "ماذا نجمع",
    body: "لا نجمع إلا المعلومات التي تختار إرسالها عبر نموذج التواصل أو البريد الإلكتروني."
  },
  {
    title: "كيف نستخدمها",
    body: "نستخدم التفاصيل للرد على الاستفسارات وصياغة مقترحات المشاريع. لا نبيع بياناتك ولا نشاركها."
  },
  {
    title: "كيف تتواصل معنا",
    body: "أرسل رسالة إلى studio@siyaq.studio لعرض أي معلومات أو تحديثها أو حذفها."
  }
];

export default function PrivacyPage() {
  return (
    <section className="container space-y-8 py-16" dir="rtl" lang="ar">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">سياسة الخصوصية</h1>
        <p className="text-[var(--content-dim)] max-w-prose">
          نتعامل مع بياناتك ببساطة واحترام.
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