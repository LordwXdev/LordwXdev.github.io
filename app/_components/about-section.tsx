import React from 'react'
import { SKILLS } from '@/mock'
import SectionTitle from '@/components/custom/section-title'

const SPOKEN = ['Haitian Creole', 'French', 'English', 'Spanish', 'Mandarin']

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="app-container grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionTitle eyebrow="About" name="A bit about me" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a CS student from Haiti, now studying in Taipei. I started with C and C++ because I wanted to
              know what happens under the hood: memory, files, pointers, all of it.
            </p>
            <p>
              Now I spend most of my time on full-stack work. I like clean backend structure, simple APIs, and
              shipping things people can actually use, like tools built for the Haitian community.
            </p>
            <p>Right now I&apos;m looking for an internship where I can learn from a strong team.</p>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold">Languages I speak</h3>
            <div className="flex flex-wrap gap-2">
              {SPOKEN.map((l) => (
                <span key={l} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((g) => (
            <div key={g.group} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold text-primary">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
