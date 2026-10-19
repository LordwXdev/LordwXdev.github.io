import React from 'react'

type Props = {
  eyebrow?: string
  name: string
  className?: string
}

const SectionTitle = ({ eyebrow, name, className }: Props) => {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{name}</h2>
    </div>
  )
}

export default SectionTitle
