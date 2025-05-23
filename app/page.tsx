// components
import Footer from "@/components/footer";
import Header from "@/components/header";

// sections
import AboutUsSection from "@/components/sections/about-us";
import CertificateSection from "@/components/sections/certificates";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services";
import SolutionsSection from "@/components/sections/solutions";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />

      {/* Sections */}
      <main className="min-w-full grid grid-rows-[auto_auto_auto_1fr_1fr]">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <SolutionsSection />
        <CertificateSection />
      </main>

      <Footer />
    </div>
  );
}
