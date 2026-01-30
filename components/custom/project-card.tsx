'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Globe, ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  topics: string[]
  liveUrl: string
  githubUrl: string
  category: string
}

const ProjectCard = ({ title, description, image, topics, liveUrl, githubUrl, category }: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative flex flex-col w-full max-w-[300px] h-[350px] bg-muted/30 border border-border/50 rounded-[20px] overflow-hidden backdrop-blur-sm hover:border-orange-500/50 transition-all duration-500"
    >
      {/* Image Container - Reduced height for a smaller card */}
      <div className="relative h-36 w-full overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-transparent z-10 transition-colors duration-500" />
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 300px) 100vw, 300px"
          />
        )}
        {category && (
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-orange-500 text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-black italic uppercase tracking-tighter mb-1 group-hover:text-orange-500 transition-colors line-clamp-1">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-[10px] line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {topics.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="text-[8px] font-bold uppercase tracking-tighter px-2 py-0.5 bg-orange-500/5 text-orange-500 border border-orange-500/20 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex gap-3">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={16} />
            </a>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Globe size={16} />
            </a>
          </div>
          
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-orange-500 group-hover:translate-x-1 transition-transform">
            View <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard