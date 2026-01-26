'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  X, 
  Instagram, 
  Facebook, 
  ArrowUpRight 
} from 'lucide-react'
import Image from 'next/image'

const PowerPointTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ 
      duration: 0.9, 
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    {children}
  </motion.div>
);

const RotatingText = () => {
  const words = ["Hello, welcome!", "¡Hola, bienvenido!", "Olá, bem-vindo!", "Bonjour, bienvenue!", "Привет, добро пожаловать!", "Ciao, benvenuto!", "你好，歡迎！", "こんにちは、ようこそ！", "안녕하세요, ようこそ!"]
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
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayWord === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }
    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [displayWord, isDeleting, index, speed, words])

  return (
    <span className="inline-block min-w-[120px]">
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
    { icon: <Github size={20} />, link: "https://github.com/LordwXdev" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com/in/Lordwish-SYLVAINCE" },
    { icon: <X size={20} />, link: "https://twitter.com/Lordwish44" }, 
    { icon: <Instagram size={20} />, link: "https://instagram.com/lordwish058" },
    { icon: <Facebook size={20} />, link: "https://facebook.com/lordwish_lord_sylvaince" },
    { icon: <Mail size={20} />, link: "mailto:lordwishsylvaince1236@gmail.com" },
  ];

  return (
    <section className="relative w-full flex items-center bg-background overflow-hidden pt-[0.5cm] min-h-screen">
      <PowerPointTransition>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center lg:items-end gap-12 px-6 md:px-12 lg:px-20 pb-20">
          <div className="relative z-20 text-center lg:text-left">
            <div className="inline-block mb-8 px-4 py-1 rounded-full border border-border bg-muted/30 text-sm font-medium backdrop-blur-md">
              <RotatingText />
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 text-foreground">
              I&apos;m <span className="text-orange-500">Lordwish</span>, <br className="hidden lg:block" />
              Software Developer
            </h1>

            <div className="border-l-0 lg:border-l-4 border-orange-500 pl-0 lg:pl-6 mb-10 max-w-md mx-auto lg:mx-0">
              <p className="text-muted-foreground italic text-lg leading-relaxed">
                &quot;I enjoy building software that solves real problems, turning ideas into reliable products through clean code and thoughtful architecture.&quot;
              </p>
            </div>

            <div className="flex items-center gap-4 p-2 glass w-fit mx-auto lg:mx-0">
              <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-bold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                Portfolio <ArrowUpRight size={18} />
              </button>
              <button className="px-8 py-4 font-bold text-muted-foreground hover:text-orange-500 transition-colors duration-300">
                Hire me
              </button>
            </div>
          </div>

          <div
            className="relative w-full flex justify-center items-end mt-10 lg:mt-0"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-[calc(50%+1cm)] w-[280px] sm:w-[400px] lg:w-[500px] h-[140px] sm:h-[200px] lg:h-[260px] bg-orange-500/80 dark:bg-orange-500/10 rounded-t-full z-0" />

            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: -40 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-10 lg:bottom-20 z-0 h-[250px] sm:h-[350px] lg:h-[400px] w-auto pointer-events-none -translate-x-[1cm]"
                >
                  <Image
                    src="/images/user/doodles.png"
                    alt="Doodles"
                    width={400}
                    height={400}
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Image
              src="/images/user/avatar.png"
              alt="Lordwish"
              width={654}
              height={654}
              className="relative z-10 h-[380px] sm:h-[500px] lg:h-[654px] w-auto object-contain block -translate-x-[2.5cm] translate-y-[3.2cm]"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                  opacity: 1, 
                  y: hovered ? -10 : 0,
                  x: "70%" 
              }}
              className="absolute top-[200px] left-1/2 z-30 hidden xl:block"
            >
              <div className="flex gap-2 justify-end text-orange-500 mb-2">
                {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
              </div>
              <div className="text-3xl font-black text-slate-900">Early, Hungry</div>
              <div className="text-sm text-slate-400 font-bold uppercase tracking-[0.2em]">And Building</div>
            </motion.div>

            <div className="absolute bottom-[-60px] lg:bottom-[-80px] flex gap-3 lg:gap-4 px-4 lg:px-6 py-4 z-20 glass -translate-x-[1cm] backdrop-blur-md border border-white/10 rounded-2xl">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-background/50 text-muted-foreground hover:text-orange-500 transition-all duration-300 shadow-sm border border-border/40"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </PowerPointTransition>
    </section>
  )
}

export default Hero;