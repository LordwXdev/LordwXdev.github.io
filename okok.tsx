'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Youtube, Facebook, ArrowUpRight } from 'lucide-react'

// Sub-component for the typing loop
const RotatingText = () => {
  const words = ["Hello, welcome!", "¡Hola, bienvenido!", "Olá, bem-vindo!", "Bonjour, bienvenue!", "Привет, добро пожаловать!", "Ciao, benvenuto!", "你好，歡迎！", "こんにちは、ようこそ！", "안녕하세요, 환영합니다!"]
  const [index, setIndex] = useState(0)
  const [displayWord, setDisplayWord] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = words[index]
      if (isDeleting) {
        setDisplayWord(prev => prev.substring(0, prev.length - 1))
        setSpeed(50)
      } else {
        setDisplayWord(prev => currentFullWord.substring(0, prev.length + 1))
        setSpeed(150)
      }
      if (!isDeleting && displayWord === currentFullWord) {
        setTimeout(() => setIsDeleting(true), 2000) // Pause at end
      } else if (isDeleting && displayWord === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }
    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [displayWord, isDeleting, index, speed])

  return (
    <span className="inline-block min-w-[100px]">
      {displayWord}
      <motion.span 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-orange-500 ml-1 align-middle"
      />
    </span>
  )
}

const Hero = () => {
  const [hovered, setHovered] = useState(false)

  const socials = [
    { icon: <Facebook size={18} />, link: '#' },
    { icon: <Github size={18} />, link: '#' },
    { icon: <Linkedin size={18} />, link: '#' },
    { icon: <Youtube size={18} />, link: '#' },
  ]

  return (
    <section className="relative w-full flex items-center bg-white overflow-hidden pt-[0.5cm]">
  <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center lg:items-end gap-12 lg:gap-16 pb-20">
        {/* LEFT CONTENT */}
        <div className="relative z-20 mb-[-8px]">
          <div className="inline-block mb-6 px-4 py-1 rounded-full border text-sm font-medium">
            <RotatingText />
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-[0.9] mb-6">
            I'm <span className="text-orange-500">Lordwish</span>, <br />
            Software Developer
          </h1>

          <div className="border-l-4 border-orange-500 pl-2 mb-10 max-w-md">
            <p className="text-muted-foreground italic text-lg">
              "I enjoy building software that solves real problems, turning ideas into reliable products through clean code, thoughtful architecture, and continuous improvement..."
            </p>
          </div>

          <div className="flex items-center gap-4 p-2 glass glass-hover w-fit">
            <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-orange-500/20">
              Portfolio <ArrowUpRight size={18} />
            </button>
            <button className="px-8 py-4 font-bold text-muted-foreground hover:text-orange-500 transition">
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
          {/* 1. THE ARC */}
          <div className="absolute bottom-0 left-1/2 -translate-x-[calc(50%+1cm)] w-[520px] h-[260px] bg-orange-500/30 rounded-t-full z-0" />

          {/* 2. BACKGROUND MOVING IMAGE (Doodles) */}
          <AnimatePresence>
            {hovered && (
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: -40 }}
                exit={{ opacity: 0, y: 20 }}
                src="/images/user/doodles.png" 
                alt="Decoration"
                className="absolute bottom-20 z-0 h-[400px] w-auto object-contain pointer-events-none -translate-x-[1cm]"
              />
            )}
          </AnimatePresence>

          {/* 3. MAIN PORTRAIT - Sized up and moved down as requested */}
          <img
            src="/images/user/avatar.png"
            alt="Lordwish"
            className="relative z-10 h-[530px] w-auto object-contain drop-shadow-4xl block -translate-x-[2cm] translate-y-[2cm]"
          />

          {/* SOCIALS */}
          <div className="absolute bottom-[-80px] flex gap-6 px-8 py-4 z-20 glass glass-hover -translate-x-[1cm]">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-md hover:text-orange-500 transition hover:-translate-y-1"
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