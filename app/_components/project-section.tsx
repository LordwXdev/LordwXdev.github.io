'use client'

import ProjectCard from '@/components/custom/project-card'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/mock'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ProjectSection = () => {
  const projectCategories = ['React', 'Next.js', 'Backend System', 'Dashboard System']
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  // Get projects based on selected category or mix from all categories
  const getDisplayedProjects = () => {
    if (showAll) {
      // Show all projects when "View All Projects" is clicked
      return PROJECTS
    } else if (selectedCategory) {
      // Show only projects from selected category (limited to 6)
      return PROJECTS.filter(project => project.category === selectedCategory).slice(0, 6)
    } else {
      // Default: Show 6 projects mixed from all categories
      return PROJECTS.slice(0, 6)
    }
  }

  const displayedProjects = getDisplayedProjects()
  const totalProjects = PROJECTS.length

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setShowAll(false)
  }

  const handleViewAllClick = () => {
    setShowAll(true)
    setSelectedCategory(null)
  }

  return (
    <AppSection id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 mx-auto text-center"
      >
        <SectionTitle name="My Projects" />
        <SectionDescription
          content="A collection of my recent work showcasing various technologies and solutions. Each project represents a unique challenge and learning experience."
        />
      </motion.div>
    
      <div>
        {/* Category Filter */}
        <div className="my-10 flex flex-wrap justify-center gap-3">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={
                category === selectedCategory
                  ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600 shadow-md'
                  : 'bg-background/50 text-foreground border-border/60 hover:border-orange-500/50 hover:text-orange-500'
              }
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid with Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  topics={project.topics}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  category={project.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button - Bottom Right */}
        {!showAll && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end mt-12"
          >
            <Button
              onClick={handleViewAllClick}
              className="px-8 py-6 bg-orange-500 text-white hover:bg-orange-600 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-3 shadow-lg shadow-orange-500/20 group"
            >
              View All {totalProjects} Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}

        {/* No projects message */}
        <AnimatePresence>
          {displayedProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg italic">No projects found in this category yet.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppSection>
  )
}

export default ProjectSection