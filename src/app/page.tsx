import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Navbar is fixed, so it will float over everything else */}
      <Navbar />
      
      {/* HeroSection contains the bubble canvas and your intro */}
      <HeroSection />
      
      {/* Other sections will go below the HeroSection as you build them */}
    </main>
  );
}