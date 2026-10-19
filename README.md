# Lordwish Sylvaince | Portfolio

My personal site: [lordwxdev.github.io](https://lordwxdev.github.io)

Built with Next.js, Tailwind CSS and Framer Motion, exported as a static site and deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add or edit a project

All projects live in `mock/index.tsx` in the `PROJECTS` list. Add an entry like this:

```ts
{
  title: 'My New App',
  description: 'One or two sentences about what it does.',
  category: 'Full-stack', // 'Full-stack' | 'Backend' | 'Systems' | 'DevOps'
  tech: ['React', 'Node.js'],
  githubUrl: 'https://github.com/LordwXdev/my-new-app',
  liveUrl: 'https://my-new-app.vercel.app', // optional
  featured: true, // optional, shows a bigger card
},
```

## Deploy

Every push to `main` builds the site and publishes it with GitHub Actions
(`.github/workflows/deploy.yml`). In the repo settings, go to
**Settings > Pages** and set **Source** to **GitHub Actions** (one time only).

## Credits

The first version started from the
[portfolio-2](https://github.com/huutruong2304/portfolio-2) Next.js template.
