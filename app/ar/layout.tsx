import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="ar" />
      <main className="mt-20">{children}</main>
      <Footer locale="ar" />
    </>
  );
}
