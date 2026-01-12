import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Navbar is fixed, it will float over the Hero */}
      <Navbar />
      
      {/* HeroSection contains the bubble canvas */}
      <HeroSection />
      
      {/* Uncomment these only after you create the files to avoid the crash */}
      {/* <PortfolioSection /> */}
    </main>
  );
}