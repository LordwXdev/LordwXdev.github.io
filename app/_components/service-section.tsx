'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, Cpu, ShieldCheck, Palette, 
  Play, Camera, PenTool, Layout 
} from 'lucide-react'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import ServiceCard from '@/components/custom/service-card'
import AppSection from '@/components/layout/app-section'
import { SERVICES } from '@/mock'

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

const ServiceSection = () => {
  // Added unique Lucide icons to each specific service
  const newServices = [
    { key: 'mobile', title: 'Mobile App Dev', description: 'Native and cross-platform apps.', icon: <Smartphone size={18} /> },
    { key: 'ai', title: 'AI & Automation', description: 'Machine learning and smart workflows.', icon: <Cpu size={18} /> },
    { key: 'security', title: 'Security & Privacy', description: 'Data integrity and confidentiality.', icon: <ShieldCheck size={18} /> },
    { key: 'branding', title: 'Branding & ID', description: 'Visual stories and brand systems.', icon: <Palette size={18} /> },
    { key: 'motion', title: 'Motion Design', description: 'Interfaces brought to life with movement.', icon: <Play size={18} /> },
    { key: 'photography', title: 'Photography', description: 'Image capture and post-processing.', icon: <Camera size={18} /> },
    { key: 'illustration', title: 'Digital Design', description: 'Custom art and vector solutions.', icon: <PenTool size={18} /> },
  ]

  const allServices = [...SERVICES, ...newServices]

  return (
    <AppSection id="services">
      <PowerPointTransition>
        <div className="w-full md:w-1/2 mx-auto text-center">
          <SectionTitle name="Services" />
          <SectionDescription
            content={`From concept to launch, I create solutions that not only work, but delight users.`}
          />
        </div>

        {/* 7 columns on large screens, reduced gap to fit the smaller size */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 gap-2 mt-10 md:mt-16">
          {allServices.map((service) => (
            <motion.div
              key={service.key}
              whileHover={{ 
                rotateY: 10, 
                rotateX: -10, 
                scale: 1.05,
                z: 50 
              }}
              style={{ perspective: 1000 }}
              className="transition-all duration-300 ease-out"
            >
              <ServiceCard
                name={service.title}
                description={service.description}
                // Pass the unique icon here
                icon={service.icon || <Layout size={18} />} 
                link={service.link}   
              />
            </motion.div>
          ))}
        </div>
      </PowerPointTransition>
    </AppSection>
  )
}

export default ServiceSection