'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SkillsInfiniteLoop from '@/components/custom/SkillsInfiniteLoop'

const AboutSection = () => {
  const progressSkills = [
    { name: "JavaScript", level: "90%" },
    { name: "TypeScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "Node.js", level: "75%" },
    { name: "Next.js", level: "95%" },
  ]

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* 1. TOP PART: Grid for Photo and Bio (Stays in the center) */}
      <div className="app-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        
        {/* LEFT SIDE: Portrait */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
            <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="relative z-10 w-full h-full rounded-full border border-border/50 overflow-hidden bg-muted/20">
              <img 
                src="/images/user/avatar.png" 
                alt="Lordwish Profile" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Bio & Progress Bars */}
        <div className="flex flex-col">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-5xl font-black mb-6 tracking-tight">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="glass glass-water p-6 rounded-2xl border-l-4 border-l-orange-500">
              <p className="text-muted-foreground leading-relaxed italic">
                "I am a results-driven Software Developer with a passion for clean architecture and 
                intuitive user experiences. With expertise spanning from Frontend design to Web3 
                smart contracts."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {progressSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                  <span>{skill.name}</span>
                  <span className="text-orange-500">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-orange-500/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-orange-500" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. BOTTOM PART: Full-Width Skills Loop (Spans the WHOLE page) */}
      <div className="w-full border-t border-border/40 pt-12">
        <div className="app-container mb-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-black">
                Full Technical Ecosystem
            </p>
        </div>
        
        {/* This div has no width limit, allowing it to go edge-to-edge */}
        <div className="w-full">
            <SkillsInfiniteLoop />
        </div>
      </div>
    </section>
  )
}

export default AboutSection