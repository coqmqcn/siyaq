export default function Footer({ locale }: { locale: "ar" | "en" }) {
  return (
    <footer role="contentinfo" className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[#cdd3df] grid md:grid-cols-3 gap-6">
        <div>© {new Date().getFullYear()} SIYAQ</div>
        <div className="md:col-span-2 text-right md:text-left">
          {locale === "ar" ? "استوديو رقمي يوازن بين التقنية والروح." : "A digital studio balancing tech and spirit."}
        </div>
      </div>
    </footer>
  );
}
