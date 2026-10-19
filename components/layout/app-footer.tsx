import React from 'react'
import { SOCIALS } from '@/mock'

const AppFooter = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="app-container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Lordwish Sylvaince</p>
        <div className="flex gap-5">
          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${SOCIALS.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
