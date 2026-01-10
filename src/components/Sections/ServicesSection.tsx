import React from 'react';
import { Layout, Code, Cpu } from 'lucide-react';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Layout className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="text-xl font-bold">UI/UX Design</h3>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Code className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="text-xl font-bold">Web Development</h3>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Cpu className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="text-xl font-bold">AI Integration</h3>
          </div>
        </div>
      </div>
    </section>
  );
};