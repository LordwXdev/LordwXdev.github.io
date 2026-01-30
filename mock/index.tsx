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
    title: 'Pale Kreyol',
    description: 'Linguistic platform for Kreyol language promotion.',
    image: '/images/projects/palekreyol.png', // Changed from frontImage to image
    topics: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://pale-kreyol.vercel.app/',
    githubUrl: 'https://github.com/LordwXdev/pale-kreyol',
    category: 'Next.js'
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio with cinematic transitions.',
    image: '/images/projects/portfolio.png', // Changed from frontImage to image
    topics: ['Next.js', 'Framer Motion', 'Tailwind'],
    liveUrl: 'https://lordwxdev.github.io/',
    githubUrl: 'https://github.com/LordwXdev/LordwXdev.github.io',
    category: 'Next.js'
  },
  {
    title: 'Realtime Chat App',
    description: 'Scalable chat application.',
    image: '/images/project/project-sample-3-1.png', // This fixed the "missing src" error
    topics: ['Next.js', 'Redis', 'WebSocket'],
    liveUrl: '#',
    githubUrl: 'https://github.com/LordwXdev',
    category: 'Next.js'
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and export features.",
    image: "/images/projects/analytics.png",
    topics: ["React", "D3.js", "Recharts", "TypeScript"],
    liveUrl: "https://analytics-dash.vercel.app",
    githubUrl: "https://github.com/yourusername/analytics",
    category: "Dashboard System"
  },
  {
    title: "Blog Platform",
    description: "Full-featured blogging platform with MDX support, syntax highlighting, and SEO optimization.",
    image: "/images/projects/blog.png",
    topics: ["Next.js", "MDX", "Contentlayer", "TypeScript"],
    liveUrl: "https://blog-platform.vercel.app",
    githubUrl: "https://github.com/yourusername/blog",
    category: "Next.js"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location search, 7-day forecast, and beautiful UI animations.",
    image: "/images/projects/weather.png",
    topics: ["React", "OpenWeather API", "CSS3"],
    liveUrl: "https://weather-app.vercel.app",
    githubUrl: "https://github.com/yourusername/weather",
    category: "React"
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with authentication, CRUD operations, and real-time notifications.",
    image: "/images/projects/api.png",
    topics: ["Node.js", "Express", "PostgreSQL", "JWT"],
    liveUrl: "https://api-docs.vercel.app",
    githubUrl: "https://github.com/yourusername/task-api",
    category: "Backend System"
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