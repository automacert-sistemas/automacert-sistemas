// components
import Footer from "@/components/footer";
import Header from "@/components/header";
import CertificateSection from "@/components/sections/certificates";

// sections
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services";
import SolutionsSection from "@/components/sections/solutions";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />

      {/* Sections */}
      <main className="min-w-full grid grid-rows-[1fr_auto_1fr_1fr]">
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <CertificateSection />
      </main>

      <Footer />
    </div>
  );
}
