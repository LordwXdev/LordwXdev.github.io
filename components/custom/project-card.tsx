import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  frontImage: string
  backImage: string
  title?: string
  topics?: string[]
}

const ProjectCard = ({ frontImage, backImage, title, topics }: Props) => {
  return (
    <Link href="#">
      <div className="group w-full cursor-pointer">
        {/* IMAGE CONTAINER */}
        <div className="relative h-[380px] rounded-xl overflow-hidden bg-primary/20">
          
          {/* BACKGROUND IMAGE (HIDDEN BY DEFAULT) */}
          <Image
            src={backImage}
            alt="background"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="
              object-cover
              opacity-0
              scale-105
              transition-all
              duration-500
              group-hover:opacity-100
              group-hover:scale-100
            "
          />

          {/* DARK OVERLAY FOR DEPTH */}
          <div className="
            absolute inset-0
            bg-black/20
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          " />

          {/* FRONT IMAGE (ALWAYS VISIBLE) */}
          <div className="absolute inset-0 z-10 p-4">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={frontImage}
                alt={title || 'project'}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-95
                "
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-1">
            {topics?.map((topic) => (
              <span key={topic} className="text-sm text-primary">
                {topic}
              </span>
            ))}
          </div>

          <h4 className="text-xl font-extrabold">{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
