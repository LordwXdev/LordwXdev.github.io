'use client'

import React from 'react'

const skills = [
  'React','TypeScript','Next.js','Tailwind CSS','Framer Motion',
  'Node.js','Express','REST API','GraphQL',
  'MongoDB','PostgreSQL','Redis',
  'Solidity','Web3.js','Smart Contracts',
  'JavaScript','Python','Java','Go',
  'Docker','AWS','Git','Linux','CI/CD',
  'Jest','Pytest','JUnit',
  'npm','yarn','DSA',
  'Figma','Photoshop','Illustrator','InDesign',
  'After Effects','Procreate'
]

export default function AboutSkills() {
  return (
    <section className="relative mt-24">
      {/* title */}
      <div className="mb-6">
        <h3 className="text-sm uppercase tracking-widest text-muted-foreground">
          Skills & Tools
        </h3>
      </div>

      {/* marquee container */}
      <div className="relative overflow-hidden">
        <div className="about-marquee">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="about-skill glass glass-hover"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
