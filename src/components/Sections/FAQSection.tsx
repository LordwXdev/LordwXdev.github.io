"use client";
import React, { useState } from 'react';
import { CustomText } from '../UI/CustomText';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity. A standard landing page usually takes 1-2 weeks, while a full-scale web application can take 4-8 weeks."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, I provide 30 days of free support after launch to ensure everything runs smoothly. I also offer monthly maintenance packages for long-term updates."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in the Modern Web Stack: Next.js, React, TypeScript, and Tailwind CSS. For the backend, I typically use Node.js, Prisma, and PostgreSQL."
  },
  {
    question: "Can you work with existing designs?",
    answer: "Absolutely. I can take your Figma, Adobe XD, or Sketch files and convert them into pixel-perfect, responsive code."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            <CustomText text="Frequently Asked Questions" />
          </h2>
          <p className="text-xl text-gray-600">Quick answers to common inquiries.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#FF8C00]" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};