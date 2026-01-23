"use client"

import React from 'react'
import { motion } from 'framer-motion'

// Helper to get official brand logos
const getLogo = (slug: string, color: string) => 
  `https://cdn.simpleicons.org/${slug}/${color}`

const ALL_SKILLS = [
  // Frontend
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css3", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  
  // Backend & Languages
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Java", slug: "openjdk", color: "007396" },
  { name: "Go", slug: "go", color: "00ADD8" },
  { name: "Ruby", slug: "ruby", color: "CC342D" },
  
  // Database & Tools
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "AWS", slug: "amazonaws", color: "232F3E" },
  { name: "Linux", slug: "linux", color: "FCC624" },
  
  // Web3
  { name: "Solidity", slug: "solidity", color: "363636" },
  { name: "Web3.js", slug: "web3dotjs", color: "F16822" },
  
  // Design
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
  { name: "Illustrator", slug: "adobeillustrator", color: "FF9A00" },
  { name: "After Effects", slug: "adobeaftereffects", color: "CF96FD" },
  { name: "InDesign", slug: "adobeindesign", color: "FF3366" }
]

const SkillCard = ({ skill }: { skill: typeof ALL_SKILLS[0] }) => (
  <div className="flex items-center gap-3 px-5 py-3 glass glass-water mx-2 min-w-max rounded-xl hover:scale-105 transition-all duration-300 group cursor-default">
    <div className="w-7 h-7 flex items-center justify-center overflow-hidden">
      <img 
        src={getLogo(skill.slug, skill.color)} 
        alt={skill.name}
        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <span className="text-[11px] font-bold text-foreground/80 tracking-wide uppercase group-hover:text-orange-500 transition-colors">
      {skill.name}
    </span>
  </div>
)

const SkillsInfiniteLoop = () => {
  const duplicatedSkills = [...ALL_SKILLS, ...ALL_SKILLS, ...ALL_SKILLS]

  return (
    <div className="w-full overflow-hidden relative py-4">
      {/* Subtle side fades */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div 
        className="flex w-fit"
        initial={{ x: 0 }}
        animate={{ x: "-33.33%" }}
        transition={{ 
          duration: 40, // Adjust speed here
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <SkillCard key={`${skill.slug}-${idx}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsInfiniteLoop