// app/api/contact/route.ts
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { name="", email="", message="" } = await req.json().catch(()=>({}));
  if (String(name).length<2 || !String(email).includes("@") || String(message).length<10)
    return NextResponse.json({ ok:false, error:"invalid" }, { status:400 });
  console.log("[CONTACT]", { name, email, message });
  return NextResponse.json({ ok:true });
}
