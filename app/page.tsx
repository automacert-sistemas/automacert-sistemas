import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid-rows-auto">
      <Header />

      {/* Sections */}
      <main className="min-w-full">
        <HeroSection />
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
