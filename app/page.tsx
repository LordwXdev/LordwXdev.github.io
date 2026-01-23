import AppContainer from '@/components/layout/app-container'
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/app-header'
import Hero from './_components/hero-section'
import AboutSection from './_components/about-section'
import ServiceSection from './_components/service-section'
import ProjectSection from './_components/project-section'
import TestimonialSection from './_components/testimonial-section'
import ContactSection from './_components/contact-section'
import { FadeIn } from '@/components/motion/fade-in'
import { SlideUp } from '@/components/motion/slide-up'

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full transition-colors duration-300">
      <AppHeader />
      
      {/* - mt-[80px]: Clears the navbar.
        - w-full: Takes up 100% of the screen width (no side margins).
        - px-0: Removes internal horizontal padding.
      */}
      <main className="w-full mt-[-10px] bg-background">
        
        <Hero />
        
        {/* Sections below the Hero */}
        <div className="w-full">
          <AboutSection />
          <ServiceSection />
          <ProjectSection />
          <ContactSection />
        </div>
        
      </main>
      
      
      <AppFooter />
    </div>
  )
}