export type ProjectCategory = 'Full-stack' | 'Backend' | 'Systems' | 'DevOps'

export type Project = {
  title: string
  description: string
  category: ProjectCategory
  tech: string[]
  githubUrl: string
  liveUrl?: string
  status?: string
  featured?: boolean
}

export interface HeaderItem {
  id: string
  name: string
  link: string
}
