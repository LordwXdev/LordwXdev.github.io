'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, Download, Clock, Terminal, Layout, Cpu, Globe2, 
  Database, Palette, MapPin, Battery, Github, Linkedin, 
  Twitter, Mail, Languages, Zap, Instagram, Facebook 
} from 'lucide-react'
import { useTheme } from 'next-themes'
import confetti from 'canvas-confetti'
import SkillsInfiniteLoop from '@/components/custom/SkillsInfiniteLoop'

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-background overflow-hidden">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 items-start mb-4">
          
          {/* LEFT SIDE: iPhone + Header */}
          <div className="lg:sticky lg:top-8 flex flex-col items-center lg:-mt-20">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="mb-4 text-center">
              <span className="text-[10px] uppercase tracking-[0.8em] text-orange-500 font-black"></span>
              <h3 className="text-3xl font-black italic tracking-tighter uppercase mt-1">About <span className="text-muted-foreground/50">Me</span></h3>
            </motion.div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <IPhoneMockup />
            </div>
          </div>

          {/* RIGHT SIDE: Full Technical Stack (Restored) */}
          <div className="flex flex-col gap-6 lg:-mt-0">
            <div>
              <h2 className="text-3xl font-black mb-4 tracking-tight italic">Technical <span className="text-orange-500 underline">Stack</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Specializing in high-performance engineering. Bridging the gap between raw hardware power and modern scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCategory title="Programming" icon={<Terminal className="text-yellow-500" />} skills={["C", "C++", "C#", "Python", "TypeScript", "JavaScript", "Go"]} />
              <SkillCategory title="Frameworks" icon={<Layout className="text-blue-400" />} skills={["React", "Next.js", "Django", "Tailwind CSS", "Framer Motion"]} />
              <SkillCategory title="Backend & APIs" icon={<Cpu className="text-green-500" />} skills={["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"]} />
              <SkillCategory title="Web3 & Blockchain" icon={<Globe2 className="text-cyan-500" />} skills={["Solidity", "Smart Contracts", "Web3.js", "Ethers.js"]} />
              <SkillCategory title="Infrastructure" icon={<Database className="text-orange-500" />} skills={["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Linux"]} />
              <SkillCategory title="Creative" icon={<Palette className="text-purple-500" />} skills={["Figma", "Photoshop", "After Effects", "Illustrator"]} />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: ROLLING LOGOS */}
      <div className="w-full mt-2">
        <div className="flex items-center w-full mb-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <span className="px-6 text-[10px] uppercase tracking-[0.5em] text-orange-500 font-black whitespace-nowrap">Tech Ecosystem</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </div>
        <div className="py-2 relative"><SkillsInfiniteLoop /></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}

const IPhoneMockup = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const { theme } = useTheme()

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    updateClock(); const timer = setInterval(updateClock, 60000); return () => clearInterval(timer)
  }, [])

  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-zinc-900' : 'bg-white'
  const textColor = isDark ? 'text-white' : 'text-black'

  return (
    <div className={`relative w-[280px] h-[580px] sm:w-[320px] sm:h-[640px] ${isDark ? 'bg-black' : 'bg-zinc-50'} rounded-[3rem] border-[10px] ${isDark ? 'border-[#1a1a1a]' : 'border-[#e5e5e5]'} shadow-2xl overflow-hidden cursor-pointer transition-colors duration-500`}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      
      {/* STATUS BAR */}
      <div className="absolute top-0 left-0 right-0 h-8 z-40 flex items-center justify-between px-8 pt-2">
        <span className={`text-[10px] font-bold ${isDark ? 'text-white' : 'text-black'}`}>{currentTime}</span>
        <div className="flex items-center gap-1">
           <span className={`text-[8px] font-bold ${isDark ? 'text-white/60' : 'text-black/60'}`}>100%</span>
           <Battery size={14} className={isDark ? 'text-white' : 'text-black'} />
        </div>
        <div className={`w-20 h-6 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#e5e5e5]'} rounded-b-2xl absolute left-1/2 -translate-x-1/2 top-0`} />
      </div>

      {/* INFINITE SCROLLING DISPLAY */}
      <motion.div 
        animate={{ y: isHovered ? 0 : [0, -2000] }} 
        transition={{ 
          duration: 50, 
          repeat: Infinity, 
          ease: "linear" 
        }} 
        className="p-4 pt-16 pb-32 space-y-4"
      >
        {/* CARD 1: IDENTITY */}
        <div className="aspect-[9/16] w-full bg-orange-500 rounded-[2rem] p-6 flex flex-col justify-end relative">
           <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 w-fit">
                <MapPin size={10} className="text-white" />
                <span className="text-[8px] font-bold text-white uppercase tracking-widest">Taipei / Remote</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full w-fit shadow-lg">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[8px] font-black text-black uppercase tracking-tighter">Internship Ready</span>
              </div>
           </div>
           <h3 className="text-white text-3xl font-black italic tracking-tighter leading-tight uppercase">Lordwish<br/>Sylvaince</h3>
           <p className="text-white/80 text-[10px] font-medium mt-2 leading-relaxed">Transforming ideas into impactful digital products.</p>
        </div>

        {/* CARD 2: SYSTEM SPECS */}
        <div className={`${cardBg} rounded-[2.5rem] p-5 border border-border/50`}>
           <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-orange-500" size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">System Specs</span>
           </div>
           <div className="space-y-3">
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-[10px] text-muted-foreground uppercase">Main Language</span>
                <span className={`text-[10px] font-bold ${textColor}`}>C / C++</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-[10px] text-muted-foreground uppercase">Environment</span>
                <span className={`text-[10px] font-bold ${textColor}`}>VS Code / Linux</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-muted-foreground uppercase">Academic Status</span>
                <span className={`text-[10px] font-bold ${textColor}`}>CS Student</span>
              </div>
           </div>
        </div>

        {/* CARD 3: ACTIVE PROCESSES (PROJECTS) */}
        <div className={`${cardBg} rounded-[2.5rem] p-5 border border-border/50`}>
           <div className="flex items-center gap-2 mb-4">
              <Zap className="text-yellow-500" size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Active Processes</span>
           </div>
           <div className="space-y-4">
              <div>
                <p className={`text-[11px] font-black ${textColor}`}>High-speed Trading Engine</p>
                <div className="w-full bg-muted h-1 rounded-full mt-1.5 overflow-hidden">
                   <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5 }} className="bg-orange-500 h-full" />
                </div>
              </div>
              <div>
                <p className={`text-[11px] font-black ${textColor}`}>C++ Memory Optimization</p>
                <p className="text-[9px] text-muted-foreground mt-1 tracking-tight">Current Learning Path</p>
              </div>
           </div>
        </div>

        {/* CARD 3: LANGUAGES */}
        <div className={`${cardBg} rounded-[2.5rem] p-5 border border-border/50`}>
           <div className="flex items-center gap-2 mb-3 text-blue-500">
              <Languages size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Linguistic Stack</span>
           </div>
           <div className="flex flex-wrap gap-2">
              {["Creole", "French", "English", "Spanish", "Mandarin"].map((l) => (
                <span key={l} className="px-2 py-1 bg-muted/50 rounded text-[9px] font-bold uppercase">{l}</span>
              ))}
           </div>
        </div>

        {/* CARD 4: SOCIALS */}
        <div className={`${cardBg} rounded-[2.5rem] p-6 border border-border/50`}>
           <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 text-center underline">Connect with me</p>
           <div className="grid grid-cols-3 gap-y-6 justify-items-center">
              <a href="https://github.com/LordwXdev" target="_blank"><Github size={20} className="text-orange-500" /></a>
              <a href="https://linkedin.com/in/Lordwish-SYLVAINCE" target="_blank"><Linkedin size={20} className="text-orange-500" /></a>
              <a href="https://twitter.com/Lordwish058" target="_blank"><Twitter size={20} className="text-orange-500" /></a>
              <a href="https://instagram.com/lordwish44" target="_blank"><Instagram size={20} className="text-orange-500" /></a>
              <a href="https://facebook.com/lordwish_lord_sylvaince" target="_blank"><Facebook size={20} className="text-orange-500" /></a>
              <a href="mailto:lordwishsylvaince1236@gmail.com"><Mail size={20} className="text-orange-500" /></a>
           </div>
        </div>

        {/* CARD 5: RESUME (Infinite loop point) */}
        <div className={`${cardBg} rounded-[2.5rem] p-6 border-2 border-orange-500/20 flex flex-col items-center`}>
           <h4 className={`${textColor} font-black text-center text-lg mb-6 uppercase italic`}>System.Download</h4>
           <motion.a 
             href="/resume.pdf" download onClick={() => confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } })}
             animate={{ boxShadow: ["0px 0px 0px rgba(249,115,22,0.4)", "0px 0px 20px rgba(249,115,22,0.7)", "0px 0px 0px rgba(249,115,22,0.4)"] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-full py-4 bg-orange-500 text-white rounded-xl font-black text-xs uppercase tracking-widest text-center shadow-lg"
           >
             Get Resume
           </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

const SkillCategory = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
  <div className="glass glass-water p-5 rounded-2xl border border-border/40 hover:border-orange-500/30 transition-all duration-500">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-muted/50 rounded-lg">{icon}</div>
      <h4 className="font-bold text-[11px] uppercase tracking-[0.2em]">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-2 py-1 bg-background/40 rounded text-[11px] font-bold text-foreground/70 border border-border/20">{skill}</span>
      ))}
    </div>
  </div>
)

export default AboutSection;