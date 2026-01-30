'use client'

import ProjectCard from '@/components/custom/project-card'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import { PROJECTS } from '@/mock'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const ProjectSection = () => {
  const projectCategories = ['All', 'React', 'Next.js', 'Backend System', 'Dashboard System']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory)

  return (
    <AppSection id="projects">
      <div className="w-full md:w-1/2 mx-auto text-center mb-10">
        <SectionTitle name="My Projects" />
        <SectionDescription
          content="A collection of my recent work showcasing various technologies and solutions."
        />
      </div>
      
      <div>
        {/* Category Filter - Fixed Visibility Logic */}
        <div className="my-10 flex flex-wrap justify-center gap-3">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={`rounded-full transition-all duration-300 ${
                category === selectedCategory
                  ? 'bg-orange-500 text-black border-orange-500 hover:bg-orange-600'
                  : 'bg-background/50 text-foreground border-border/60 hover:border-orange-500/50'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description || ""}
                  image={project.image || project.frontImage || ""}
                  topics={project.topics}
                  liveUrl={project.liveUrl || "#"}
                  githubUrl={project.githubUrl || "#"}
                  category={project.category || ""}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AppSection>
  )
}

export default ProjectSection