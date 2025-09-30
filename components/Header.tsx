"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ locale }: { locale: "ar" | "en" }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  const t = (ar: string, en: string) => (locale === "ar" ? ar : en);
  const other = locale === "ar" ? "en" : "ar";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? "backdrop-blur bg-black/40 border-b border-white/10" : ""}`} role="navigation">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold tracking-wide">{t("سِيَاق","SIYAQ")}</Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href={`/${locale}/contact`}>{t("تواصَل","Contact")}</Link>
          <Link href={`/${other}`}>{other.toUpperCase()}</Link>
        </nav>
      </div>
       <div className="h-[2px] origin-left scale-x-0" id="progress"
           style={{ background: "linear-gradient(90deg,#C8A646,#D9C16E,#BAC2CF)" }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            var el = document.getElementById('progress');
            function on(){ var h=document.documentElement, m=h.scrollHeight-h.clientHeight; var p=m?(h.scrollTop/m):0; el.style.transform='scaleX('+p+')'; }
            document.addEventListener('scroll', on, {passive:true}); on();
          })();`
        }}
      />
    </header>
  );
}
