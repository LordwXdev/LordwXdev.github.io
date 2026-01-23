"use client"

import React from 'react'
import { motion } from 'framer-motion'

const getLogo = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`

const ALL_SKILLS = [
  // Frontend
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  /* Using 000000 for light mode, but you can use 'white' slug if your background is dark */
  { name: "Next.js", slug: "nextdotjs", color: "333333" }, 
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css3", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  
  // Backend & Languages
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Java", slug: "openjdk", color: "ED8B00" },
  { name: "Go", slug: "go", color: "00ADD8" },
  { name: "Ruby", slug: "ruby", color: "CC342D" },
  
  // Database & Tools
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "AWS", slug: "amazonaws", color: "FF9900" },
  { name: "Linux", slug: "linux", color: "FCC624" },
  
  // Design
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
  { name: "Illustrator", slug: "adobeillustrator", color: "FF9A00" },
  { name: "After Effects", slug: "adobeaftereffects", color: "CF96FD" },
  { name: "InDesign", slug: "adobeindesign", color: "FF3366" },
  { name: "Procreate", slug: "procreate", color: "53E1AD" }
]

const SkillCard = ({ skill }: { skill: any }) => (
  <div className="flex items-center gap-3 px-5 py-3 glass glass-water mx-3 min-w-max rounded-2xl hover:scale-110 hover:bg-white/10 transition-all duration-300 group cursor-default">
    <div className="w-8 h-8 flex items-center justify-center">
      <img 
        src={getLogo(skill.slug, skill.color)} 
        alt={skill.name} 
        /* REMOVED: filter grayscale - Logos now show in real color */
        className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-12"
      />
    </div>
    <span className="text-xs font-bold text-foreground/90 tracking-wide uppercase">
      {skill.name}
    </span>
  </div>
)

const SkillsInfiniteLoop = () => {
  const duplicated = [...ALL_SKILLS, ...ALL_SKILLS, ...ALL_SKILLS]
  return (
    <div className="w-full overflow-hidden relative py-6">
      {/* Edge Fades: Makes logos look like they are appearing from thin air */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex w-fit"
        animate={{ x: "-33.33%" }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicated.map((s, i) => (
          <SkillCard key={`${s.slug}-${i}`} skill={s} />
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsInfiniteLoop