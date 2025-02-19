import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <section className="bg-background-primary">
      <Navbar />
      <div className="pt-28 md:pt-16">{children}</div>
      <Footer />
    </section>
  );
}
