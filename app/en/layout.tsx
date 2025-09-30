import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" lang="en">
      <Header locale="en" />
      <main className="mt-20">{children}</main>
      <Footer locale="en" />
    </div>
  );
}
