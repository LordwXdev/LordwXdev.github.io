import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      {/* Comment these out until you create the files!
        <PortfolioSection />
        <ExperienceTimeline />
        <TestimonialsSection /> 
      */}
    </main>
  );
}