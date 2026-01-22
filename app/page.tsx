import AppContainer from '@/components/layout/app-container'
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/app-header'
import Hero from './_components/hero-section' // updated Hero component
import AboutSection from './_components/about-section'
import ServiceSection from './_components/service-section'
import ProjectSection from './_components/project-section'
import TestimonialSection from './_components/testimonial-section'
import ContactSection from './_components/contact-section'
import { FadeIn } from '@/components/motion/fade-in'
import { SlideUp } from '@/components/motion/slide-up'

export default function Home() {
  return (
    <>
      <AppHeader />
      <AppContainer>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* Hero / Introduction */}
          <FadeIn>
            <Hero />
          </FadeIn>

          {/* About me */}
          <SlideUp>
            <AboutSection />
          </SlideUp>

          {/* Services */}
          <SlideUp>
            <ServiceSection />
          </SlideUp>

          {/* Projects */}
          <SlideUp>
            <ProjectSection />
          </SlideUp>

          {/* Testimonials */}
          <SlideUp>
            <TestimonialSection />
          </SlideUp>

          {/* Contact */}
          <SlideUp>
            <ContactSection />
          </SlideUp>
        </main>
      </AppContainer>
      <AppFooter />
    </>
  )
}
