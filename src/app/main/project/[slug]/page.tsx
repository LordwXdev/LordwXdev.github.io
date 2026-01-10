import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF8C00] mb-8 transition">
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 uppercase">
          {params.slug.replace('-', ' ')}
        </h1>

        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image src={`/images/project-${params.slug}.jpg`} alt="Project Hero" fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This project was built to solve specific market challenges in 2026. 
              We focused on high-performance metrics and a user experience that remains 
              consistent across all device types.
            </p>
            <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Real-time data synchronization using WebSockets.</li>
              <li>Custom AI-driven content recommendations.</li>
              <li>Fully accessible UI compliant with WCAG 2.1 standards.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl h-fit sticky top-28">
            <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js', 'Tailwind', 'PostgreSQL', 'Framer Motion'].map(tag => (
                <span key={tag} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-4">
              <button className="w-full bg-[#FF8C00] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#e67e00] transition">
                Live Demo <ExternalLink size={18} />
              </button>
              <button className="w-full border-2 border-gray-900 text-gray-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition">
                Source Code <Github size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}