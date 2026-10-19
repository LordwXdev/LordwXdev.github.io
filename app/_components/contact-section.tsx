import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SOCIALS } from '@/mock'

const ContactSection = () => {
  return (
    <section id="contact" className="pb-20 md:pb-28">
      <div className="app-container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center md:px-12 md:py-20">
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
          <p className="relative font-mono text-xs font-semibold tracking-widest text-primary uppercase">Contact</p>
          <h2 className="relative mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Let&apos;s build something.</h2>
          <p className="relative mx-auto mt-4 max-w-md text-muted-foreground">
            Have an internship, a project, or just want to talk code? My inbox is open.
          </p>

          <a
            href={`mailto:${SOCIALS.email}`}
            className="relative mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-colors hover:bg-primary/90"
          >
            <Mail size={18} /> Send me an email
          </a>

          <div className="relative mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Github size={16} /> GitHub
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
