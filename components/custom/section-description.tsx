import React from 'react'

type Props = {
  content?: string
}

const SectionDescription = ({ content }: Props) => {
  return (
    <p className="md:text-center glass glass-hover rounded-apple px-4 py-2 backdrop-blur-apple">
      {content}
    </p>
  )
}

export default SectionDescription
