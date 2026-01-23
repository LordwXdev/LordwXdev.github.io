"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import { HEADER_ITEMS } from '@/const'
import { ThemeToggle } from '../custom/theme-toggle'

const AppHeader = () => {
  const headerList = HEADER_ITEMS
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleClick = (id: string, link: string) => {
    setActiveId(id)

    const target = document.querySelector(link)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setTimeout(() => setActiveId(null), 250)
  }

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        glass glass-hover glass-orange-glow
        rounded-b-apple
        backdrop-blur-apple
        transition-all duration-300
      "
    >
      <div className="app-container flex items-center justify-between px-6 py-3">
        <div className="text-primary font-extrabold text-2xl uppercase">
          LOGO
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {headerList.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id, item.link)}
                className={`
                  px-4 py-2 rounded-full
                  font-medium
                  /* Updated text colors and hover state */
                  text-foreground/80 
                  hover:text-primary 
                  glass backdrop-blur-apple
                  transition-all duration-200
                  hover:bg-primary/20 hover:scale-105
                  active:scale-95
                  ${
                    activeId === item.id
                      ? 'bg-primary/30 text-primary'
                      : 'bg-primary/5'
                  }
                `}
              >
                {item.name}
              </button>
            </li>
          ))}

          <li>
            <Button size="sm" className="hover:bg-primary/90 transition-colors">
              Download CV
            </Button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="glass hover:text-primary">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass rounded-apple border-l border-border/50">
              <ul className="flex flex-col items-end space-y-5 mt-10 p-4">
                {headerList.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id, item.link)}
                      className={`
                        px-4 py-2 rounded-full
                        font-medium
                        text-foreground/80
                        hover:text-primary
                        glass backdrop-blur-apple
                        transition-all duration-200
                        hover:bg-primary/20 hover:scale-105
                        active:scale-95
                        ${
                          activeId === item.id
                            ? 'bg-primary/30 text-primary'
                            : 'bg-primary/10'
                        }
                      `}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
                <li>
                  <Button size="sm" className="w-full">Download CV</Button>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default AppHeader