'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from '@/components/custom/project-card'
import SectionTitle from '@/components/custom/section-title'
import { PROJECTS, SOCIALS } from '@/mock'
import { ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

const FILTERS: ('All' | ProjectCategory)[] = ['All', 'Full-stack', 'Backend', 'Systems', 'DevOps']

// The grid has 6 columns on large screens: featured cards take half a row, the rest a third.
// If the last row would only have 2 small cards, stretch them to half each so there's no gap.
const lgSpan = (index: number, total: number, featured: boolean) => {
  if (featured) return 'lg:col-span-3'
  const featuredCount = PROJECTS.filter((p) => p.featured).length
  const smallTotal = total === PROJECTS.length ? total - featuredCount : total
  const smallIndex = total === PROJECTS.length ? index - featuredCount : index
  const inLastRow = smallIndex >= smallTotal - (smallTotal % 3)
  return smallTotal % 3 === 2 && inLastRow ? 'lg:col-span-3' : 'lg:col-span-2'
}

const ProjectSection = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')

  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="app-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionTitle eyebrow="Projects" name="Things I've built" />
            <p className="mt-3 max-w-lg text-muted-foreground">
              From full-stack apps to small C programs. Every one of them is on my GitHub.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => {
              const count = f === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={f === filter}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                    f === filter
                      ? 'border-primary bg-primary text-black'
                      : 'border-border text-muted-foreground hover:text-foreground',
                  )}
                >
                  {f} <span className="opacity-60">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className={cn(lgSpan(i, shown.length, filter === 'All' && !!p.featured))}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href={`${SOCIALS.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            See everything on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
