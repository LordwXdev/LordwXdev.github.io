import HeroSection from "@/components/Sections/HeroSection";
import { ServicesSection } from "@/components/Sections/ServicesSection";
import { PortfolioSection } from "@/components/Sections/PortfolioSection";
import { ExperienceTimeline } from "@/components/Sections/ExperienceTimeline";
import { TestimonialsSection } from "@/components/Sections/TestimonialsSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <ExperienceTimeline />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}