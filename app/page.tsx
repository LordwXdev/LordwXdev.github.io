import AppHeader from '@/components/layout/app-header'
import AppFooter from '@/components/layout/app-footer'
import Hero from './_components/hero-section'
import AboutSection from './_components/about-section'
import ServiceSection from './_components/service-section'
import ProjectSection from './_components/project-section'
import ContactSection from './_components/contact-section'

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full transition-colors duration-300">
      <AppHeader />
      
      <main className="w-full mt-[-10px] bg-background">
        
        <Hero />
        
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