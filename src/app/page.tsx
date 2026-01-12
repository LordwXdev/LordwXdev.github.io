import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      
      {/* Add your other sections here as you build them:
          <AboutSection />
          <ServicesSection />
          <Footer />
      */}
    </main>
  );
}