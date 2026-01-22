'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Youtube, Facebook, ArrowUpRight } from 'lucide-react'

const Hero = () => {
  const [hovered, setHovered] = useState(false)

  const socials = [
    { icon: <Facebook size={18} />, link: '#' },
    { icon: <Github size={18} />, link: '#' },
    { icon: <Linkedin size={18} />, link: '#' },
    { icon: <Youtube size={18} />, link: '#' },
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="app-container grid grid-cols-1 lg:grid-cols-2 items-end gap-16 pb-20">

        {/* LEFT CONTENT */}
        <div className="relative z-20 mb-[-8px]">
          <span className="inline-block mb-6 px-4 py-1 rounded-full border text-sm">
            Hello! 👋
          </span>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.9] mb-6">
            I'm <span className="text-primary">Lordwish</span>, <br />
            Software Developer
          </h1>

          <div className="border-l-4 border-primary pl-6 mb-10 max-w-md">
            <p className="text-muted-foreground italic text-lg">
              "Lordwish’s exceptional product design ensures our website’s success."
            </p>
          </div>

          <div className="flex items-center gap-4 p-2 glass glass-hover w-fit">
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2 hover:opacity-90 transition">
              Portfolio <ArrowUpRight size={18} />
            </button>
            <button className="px-8 py-4 font-bold text-muted-foreground hover:text-primary transition">
              Hire me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div
          className="relative w-full flex justify-center items-end"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* 1. THE ARC - Remains perfectly centered */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-primary/20 rounded-t-full z-0" />

          {/* 2. BACKGROUND MOVING IMAGE (Doodles) */}
          <AnimatePresence>
            {hovered && (
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -40 }}
                exit={{ opacity: 0, y: 20 }}
                src="/images/user/doodles.png" 
                alt="Decoration"
                className="absolute bottom-20 z-0 h-[400px] w-auto object-contain pointer-events-none"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}
          </AnimatePresence>

          {/* 3. MAIN PORTRAIT - MOVED 2CM LEFT */}
          <img
            src="/images/user/avatar.png"
            alt="Lordwish"
            className="relative z-10 h-[540px] w-auto object-contain drop-shadow-2xl block -translate-x-[2cm]"
            /* The '-translate-x-[2cm]' class moves the stable image exactly 2cm left */
            onError={(e) =>
              (e.currentTarget.src =
                'https://www.pngall.com/wp-content/uploads/12/Girl-Fashion-Model-PNG-Image.png')
            }
          />

          {/* SOCIALS */}
          <div className="absolute bottom-[-80px] flex gap-6 px-8 py-4 z-20 glass glass-hover">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-md hover:text-primary transition hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero