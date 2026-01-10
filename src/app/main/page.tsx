import HeroSection from "@/components/Sections/HeroSection";
import { ServicesSection } from "@/components/Sections/ServicesSection";
import { PortfolioSection } from "@/components/Sections/PortfolioSection";
import { ExperienceTimeline } from "@/components/Sections/ExperienceTimeline";
import { TestimonialsSection } from "@/components/Sections/TestimonialsSection";
import { FAQSection } from "@/components/Sections/FAQSection";
import { BlogSection } from "@/components/Sections/BlogSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import Footer from "@/components/Layout/Footer";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10">
        <ServicesSection />
        <ExperienceTimeline />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}