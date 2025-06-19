import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Models from "@/components/Models";
import Privacy from "@/components/Privacy";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Models />
        <Privacy />
        <Download />
      </main>
      <Footer />
    </>
  );
}