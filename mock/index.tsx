import { Project } from '@/types'

const GITHUB = 'https://github.com/LordwXdev'

export const PROJECTS: Project[] = [
  {
    title: 'Loopzz',
    description:
      'Music and live streaming platform. Artists upload tracks, go live and get tips. Fans chat in real time and find new music through a ranked feed.',
    category: 'Full-stack',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Docker'],
    githubUrl: `${GITHUB}/Loopzz`,
    featured: true,
  },
  {
    title: 'Aynix',
    description:
      'E-commerce marketplace for Haiti. Local vendors run their own stores, customers order from them. Built as a modular monolith so it can split into services later.',
    category: 'Backend',
    tech: ['TypeScript', 'Express 5', 'PostgreSQL', 'Prisma', 'JWT'],
    githubUrl: `${GITHUB}/aynix`,
    status: 'In progress',
    featured: true,
  },
  {
    title: 'Pale Kreyòl',
    description:
      'Web app to learn and promote Haitian Creole, with an AI chat helper and Stripe payments.',
    category: 'Full-stack',
    tech: ['React', 'Vite', 'Tailwind', 'Firebase', 'Stripe'],
    githubUrl: `${GITHUB}/pale-kreyol`,
    liveUrl: 'https://pale-kreyol.vercel.app/',
    featured: true,
  },
  {
    title: 'School Management',
    description:
      'System for running a school: students, teachers, attendance, fees, timetables and reports. Django API with a Next.js app for staff.',
    category: 'Full-stack',
    tech: ['Django', 'Python', 'Next.js', 'REST API'],
    githubUrl: `${GITHUB}/smanagement`,
    featured: true,
  },
  {
    title: 'Quote API on Kubernetes',
    description:
      'Small PHP REST API deployed on MicroK8s with autoscaling, health checks and NGINX ingress.',
    category: 'DevOps',
    tech: ['PHP', 'Docker', 'Kubernetes', 'NGINX'],
    githubUrl: `${GITHUB}/quote-api`,
  },
  {
    title: 'Text Analyzer',
    description:
      'Command-line tool that counts lines, words and characters, finds the most used words and searches a file. No memory leaks.',
    category: 'Systems',
    tech: ['C', 'CLI', 'Memory management'],
    githubUrl: `${GITHUB}/text-analyzer`,
  },
  {
    title: 'Contact Manager',
    description:
      'Terminal app to add, search, edit and delete contacts, saved to a file between runs.',
    category: 'Systems',
    tech: ['C', 'File I/O'],
    githubUrl: `${GITHUB}/contact-manager`,
  },
  {
    title: 'LeetCode Solutions',
    description: 'Over 140 solved problems, written in both C and C++.',
    category: 'Systems',
    tech: ['C', 'C++', 'Algorithms'],
    githubUrl: `${GITHUB}/Leetcode`,
  },
  {
    title: 'Console Toolkit',
    description: 'Menu-driven calculator in the terminal with safe input handling.',
    category: 'Systems',
    tech: ['C'],
    githubUrl: `${GITHUB}/console-toolkit`,
  },
]

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['C', 'C++', 'TypeScript', 'JavaScript', 'Python', 'PHP'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Django', 'REST APIs', 'Socket.IO'] },
  { group: 'Data & Ops', items: ['PostgreSQL', 'Prisma', 'Docker', 'Kubernetes', 'Linux', 'Git'] },
]

export const SOCIALS = {
  github: GITHUB,
  linkedin: 'https://linkedin.com/in/Lordwish-SYLVAINCE',
  email: 'lordwishsylvaince1236@gmail.com',
}
