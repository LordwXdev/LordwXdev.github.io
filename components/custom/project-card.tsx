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
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-full bg-muted/30 border border-border/50 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-orange-500/50 transition-colors duration-500"
    >
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent z-10 transition-colors duration-500" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-orange-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {topics.map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-bold uppercase tracking-tighter px-2 py-0.5 bg-orange-500/5 text-orange-500 border border-orange-500/20 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex gap-4">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-orange-500 transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
          
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-orange-500 group-hover:translate-x-1 transition-transform"
          >
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard