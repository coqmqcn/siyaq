"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero({ locale }: { locale: "ar" | "en" }) {
  const T = (a: string, e: string) => (locale === "ar" ? a : e);

  return (
    <section className="relative overflow-hidden">
      {/* gradient halo background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-40 -top-24 h-[420px] rounded-[50%] blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(104,92,173,.18), transparent 70%), radial-gradient(40% 30% at 60% 40%, rgba(200,166,70,.12), transparent 60%)"
        }}
      />
      <div className="container pt-28 pb-16">
        <motion.h1
          className="font-serif"
          style={{ fontSize: "var(--fs-hero)", lineHeight: "var(--lh-tight)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,0.61,0.36,1] } }}
        >
          {T("تكنولوجيا تتنفس هدوءاً", "Technology that breathes calm")}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-prose text-[var(--content-dim)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: [0.22,0.61,0.36,1] } }}
        >
          {T(
            "نصنع تجارب رقمية عميقة بتوازن بين التقنية والروح — علامة عربية راقية بلمسات مغربية.",
            "We craft deep digital experiences that balance technology and spirit — elegant, contemplative, refined."
          )}
        </motion.p>

        <motion.div
          className="mt-8 flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.2 } }}
        >
          <Link href={`/${locale}/contact`}><Button className="sheen">{T("ابدأ مشروعك","Start a project")}</Button></Link>
          <Link href={`/${locale}/blog`}><Button variant="ghost">{T("المدونة","Blog")}</Button></Link>
        </motion.div>
      </div>
    </section>
  );
}
