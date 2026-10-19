import AppHeader from '@/components/layout/app-header'
import AppFooter from '@/components/layout/app-footer'
import Hero from './_components/hero-section'
import AboutSection from './_components/about-section'
import ProjectSection from './_components/project-section'
import ContactSection from './_components/contact-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main>
        <Hero />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <AppFooter />
    </div>
  )
}
