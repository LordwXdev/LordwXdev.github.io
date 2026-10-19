import React from 'react'
import { ArrowUpRight, Boxes, Github, Layers, Server, Terminal } from 'lucide-react'
import { Project, ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

const CATEGORY_ICON: Record<ProjectCategory, React.ReactNode> = {
  'Full-stack': <Layers size={18} />,
  Backend: <Server size={18} />,
  Systems: <Terminal size={18} />,
  DevOps: <Boxes size={18} />,
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, category, tech, githubUrl, liveUrl, status, featured } = project
  const mainUrl = liveUrl ?? githubUrl

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50',
        featured && 'md:p-7',
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
            {CATEGORY_ICON[category]}
          </span>
          {category}
        </span>
        {status && (
          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-600 dark:text-yellow-400">
            {status}
          </span>
        )}
      </div>

      <h3 className={cn('font-bold tracking-tight', featured ? 'text-2xl' : 'text-lg')}>
        {/* the whole card is clickable through this link */}
        <a href={mainUrl} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
          {title}
        </a>
      </h3>
      <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <li key={t} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-foreground/80">
            {t}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github size={16} /> Code
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Live site <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
