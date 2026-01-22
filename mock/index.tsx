import { ProjectItem, Service, Testimonial } from '@/types'

export const SERVICES: Service[] = [
  {
    key: 'frontend',
    title: 'Frontend (React/Next.js)',
    description: 'Build fast, accessible UIs with solid SEO and Core Web Vitals.',
    image: '/images/services/frontend.png', // use an image
    highlights: ['Next.js App Router', 'shadcn/ui + Tailwind', 'SSR/ISR'],
  },
  {
    key: 'backend',
    title: 'Backend API (Node/NestJS)',
    description: 'Design secure REST/GraphQL APIs with authentication and rate limiting.',
    image: '/images/services/backend.png',
    highlights: ['Modular NestJS', 'JWT/OAuth', 'Caching'],
  },
  {
    key: 'microservices',
    title: 'Microservices & Messaging',
    description: 'Decouple services and scale with asynchronous communication.',
    image: '/images/services/microservices.png',
    highlights: ['RabbitMQ', 'Event-driven', 'API Gateway'],
  },
  {
    key: 'database',
    title: 'Database & ORM',
    description: 'Schema design and query optimization for high throughput.',
    image: '/images/services/database.png',
    highlights: ['Postgres/MongoDB', 'Prisma/Mongoose', 'Indexing'],
  },
  {
    key: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Reliable deployments with automated pipelines and rollbacks.',
    image: '/images/services/devops.png',
    highlights: ['Docker/PM2', 'GitHub Actions', 'Zero-downtime'],
  },
  {
    key: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Hardened environments with monitoring, logging, and SSL.',
    image: '/images/services/cloud.png',
    highlights: ['Nginx/SSL', 'AWS/Azure/VPS', 'Observability'],
  },
  {
    key: 'performance',
    title: 'Performance & SEO',
    description: 'Speed audits and search visibility for business impact.',
    image: '/images/services/performance.png',
    highlights: ['Image/CDN', 'Bundle analysis', 'sitemap/robots'],
  },
  {
    key: 'qa',
    title: 'Testing & Quality',
    description: 'Confidence before release with automated testing.',
    image: '/images/services/qa.png',
    highlights: ['Jest/Playwright', 'Type checking', 'E2E'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    frontImage: '/images/project/project-sample-1-1.png',
    backImage: '/images/project/project-sample-1-2.png',
    title: 'Booking Dashboard',
    topics: ['React', 'Next.js', 'TypeScript', 'Dashboard System', 'Tailwind'],
  },
  {
    frontImage: '/images/project/project-sample-2-1.png',
    backImage: '/images/project/project-sample-2-2.png',
    title: 'E-commerce API',
    topics: ['Backend System', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    frontImage: '/images/project/project-sample-3-1.png',
    backImage: '/images/project/project-sample-3-2.png',
    title: 'Realtime Chat App',
    topics: ['Next.js', 'React', 'TypeScript', 'Redis', 'WebSocket'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'John Doe',
    avatar: '/images/user/avatar-3.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    profession: 'CEO of Acme Inc.',
  },
  {
    name: 'Jane Smith',
    avatar: '/images/user/avatar-2.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    profession: 'Product Manager',
  },
  {
    name: 'Bob Johnson',
    avatar: '/images/user/avatar.png',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    profession: 'Software Engineer',
  },
]
