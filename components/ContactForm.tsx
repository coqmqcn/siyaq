// components/ContactForm.tsx
"use client";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function ContactForm({ locale }: { locale: "ar" | "en" }) {
  const T = (a: string, e: string) => (locale === "ar" ? a : e);
  const [status, setStatus] = useState<"idle"|"ok"|"err"|"loading">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = { name:String(fd.get("name")||""), email:String(fd.get("email")||""), message:String(fd.get("message")||"") };
    try {
      const r = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(payload) });
      const j = await r.json(); setStatus(j.ok?"ok":"err"); if (j.ok) e.currentTarget.reset();
    } catch { setStatus("err"); }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
      <div>
        <label className="mb-2 block text-sm text-[#cdd3df]" htmlFor="name">{T("الاسم","Name")}</label>
        <input id="name" name="name" required className="w-full bg-[#0f1016] border border-white/10 rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)]" />
      </div>
      <div>
        <label className="mb-2 block text-sm text-[#cdd3df]" htmlFor="email">{T("البريد","Email")}</label>
        <input id="email" name="email" type="email" required className="w-full bg-[#0f1016] border border-white/10 rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)]" />
      </div>
      <div>
        <label className="mb-2 block text-sm text-[#cdd3df]" htmlFor="message">{T("رسالتك","Message")}</label>
        <textarea id="message" name="message" required className="h-32 w-full bg-[#0f1016] border border-white/10 rounded-md px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)]" />
      </div>
      <Button type="submit" disabled={status==="loading"}>{status==="loading"?T("جارٍ الإرسال…","Sending…"):T("إرسال","Send")}</Button>
      {status==="ok" && <p className="text-green-400">{T("تم الإرسال بنجاح.","Sent successfully.")}</p>}
      {status==="err" && <p className="text-red-400">{T("تحقق من الحقول أو أعد المحاولة.","Check fields or retry.")}</p>}
    </form>
  );
}
