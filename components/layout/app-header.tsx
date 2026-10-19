'use client'

import React, { useEffect, useState } from 'react'
import { MenuIcon, Github } from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { HEADER_ITEMS } from '@/const'
import { SOCIALS } from '@/mock'
import { ThemeToggle } from '../custom/theme-toggle'
import { cn } from '@/lib/utils'

const AppHeader = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="app-container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-sm font-black text-black">
            LS
          </span>
          <span>Lordwish</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {HEADER_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="ml-2 rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <ul className="mt-14 flex flex-col gap-1 px-4">
                {HEADER_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} className="block rounded-md px-3 py-3 text-lg font-medium hover:bg-muted">
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-3 text-lg font-medium hover:bg-muted"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader
