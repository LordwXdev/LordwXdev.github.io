'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowUpRight, 
  Monitor, 
  Server, 
  Layers, 
  Database, 
  GitBranch, 
  Cloud, 
  Zap, 
  ShieldCheck 
} from 'lucide-react'
import Link from 'next/link'

type Props = {
  name?: string
  description?: string
  link?: string
}

const ServiceIcon = ({ name }: { name: string }) => {
  const iconProps = { size: 44, strokeWidth: 2, className: "text-orange-500" }
  const n = name.toLowerCase()

  if (n.includes('frontend')) return <Monitor {...iconProps} />
  if (n.includes('backend')) return <Server {...iconProps} />
  if (n.includes('microservices')) return <Layers {...iconProps} />
  if (n.includes('database')) return <Database {...iconProps} />
  if (n.includes('devops')) return <GitBranch {...iconProps} />
  if (n.includes('cloud')) return <Cloud {...iconProps} />
  if (n.includes('performance')) return <Zap {...iconProps} />
  if (n.includes('testing')) return <ShieldCheck {...iconProps} />
  
  return <Monitor {...iconProps} />
}

const ServiceCard = ({ name, description, link = '#' }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative w-full group"
    >
      <div
        className="relative z-10 min-h-[320px] p-8 rounded-[2.5rem] flex flex-col justify-between overflow-hidden bg-white dark:bg-zinc-900/50 border border-slate-200/80 shadow-sm transition-all duration-500 group-hover:border-orange-500/40 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="space-y-6">
          <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <ServiceIcon name={name || ''} />
          </div>

          <div className="space-y-3">
            <h3 className="text-slate-900 dark:text-white text-xl font-black uppercase tracking-tight leading-tight">
              {name}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm italic font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href={link}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-900 dark:bg-white/10 text-white opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-orange-500 active:scale-90"
            >
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
        
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  )
}

export default ServiceCard