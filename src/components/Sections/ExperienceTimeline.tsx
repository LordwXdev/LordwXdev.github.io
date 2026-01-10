import React from 'react';
import { CustomText } from '@/components/UI/CustomText';

const experienceData = [
  {
    year: '2023 - Present',
    title: 'Senior Frontend Developer',
    company: 'Innovatech Solutions',
    description: 'Led a team of developers in migrating core applications to Next.js 14, improving performance scores by 40%.',
  },
  {
    year: '2020 - 2023',
    title: 'Full-Stack Engineer',
    company: 'Creative Digital Agency',
    description: 'Developed and maintained over 30 client websites, focusing on custom CMS integrations.',
  },
  {
    year: '2018 - 2020',
    title: 'Junior Web Developer',
    company: 'Startup Hub',
    description: 'Gained foundational experience in React and Node.js, contributing to flagship e-commerce products.',
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-2">
            <CustomText text="My Professional Journey" />
          </h2>
          <p className="text-xl text-gray-600">Where I've applied my skills.</p>
        </div>
        <div className="relative pt-8">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 sm:left-1/2 sm:-translate-x-1/2"></div>
          {experienceData.map((item, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
              <div className="w-full sm:w-5/12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-[#FF8C00]">
                  <span className="text-sm font-semibold text-gray-500 block">{item.year}</span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-[#FF8C00] font-medium mb-3">{item.company}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-[#FF8C00] z-10 left-4 sm:relative sm:left-0 sm:transform sm:-translate-x-0">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-full sm:w-5/12 hidden sm:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};