import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className="w-full min-h-screen grid-rows-auto">
      <Header />

      {/* Sections */}
      <main className="min-w-full min-h-screen">
        <HeroSection />
      </main>

      <footer className="w-full max-w-container text-center">footer</footer>
    </div>
  );
}
