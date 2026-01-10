import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ServicesCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const ServicesCard: React.FC<ServicesCardProps> = ({ icon, title, description }) => {
  return (
    <div className="h-full p-8 bg-white border border-gray-100 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:border-[#FF8C00] cursor-pointer flex flex-col group">
      <div className="text-[#FF8C00] mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow mb-6">{description}</p>
      <div className="mt-auto flex items-center text-[#FF8C00] font-semibold">
        Learn More
        <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
};