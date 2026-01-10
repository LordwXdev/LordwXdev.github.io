import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { OrangeButton } from '../UI/OrangeButton';

type PortfolioCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveLink: string;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageSrc, tags, liveLink }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <OrangeButton className="w-full" icon={<ArrowUpRight size={20} />}>
            View Project
          </OrangeButton>
        </a>
      </div>
    </div>
  );
};