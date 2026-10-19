'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { PROJECTS, SOCIALS } from '@/mock'

const STATS = [
  { value: `${PROJECTS.length}`, label: 'Projects on GitHub' },
  { value: '140+', label: 'LeetCode problems solved' },
  { value: '5', label: 'Spoken languages' },
]

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* soft glow behind the hero */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="app-container relative grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Open to internships
            <span className="text-border">|</span>
            <MapPin size={12} /> Taipei / Remote
          </div>

          <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-primary">Lordwish</span>.
            <br />I build web apps, backends and tools in C.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m a computer science student who likes building real things. Lately that means a music streaming
            platform, a marketplace for Haiti, and a lot of C practice to understand how computers really work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-black transition-colors hover:bg-primary/90"
            >
              See my projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold transition-colors hover:bg-muted"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: SOCIALS.github, label: 'GitHub', icon: <Github size={20} /> },
                { href: SOCIALS.linkedin, label: 'LinkedIn', icon: <Linkedin size={20} /> },
                { href: `mailto:${SOCIALS.email}`, label: 'Email', icon: <Mail size={20} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-primary/80" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-[#f4f1ee]">
            <Image
              src="/images/user/avatar.png"
              alt="Portrait of Lordwish Sylvaince"
              fill
              priority
              sizes="340px"
              className="object-cover object-[58%_center]"
            />
          </div>
        </motion.div>
      </div>

      <div className="app-container relative mt-16">
        <dl className="grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse px-3 py-5 text-center sm:px-6">
              <dt className="text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
              <dd className="text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
