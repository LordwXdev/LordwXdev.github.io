import React from 'react';
import { Star } from 'lucide-react';

type ReviewCardProps = {
  name: string;
  title: string;
  rating: number;
  review: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ name, title, rating, review }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={18}
      className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
    />
  ));

  return (
    <div className="h-full p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
      <div className="flex mb-4 gap-1">{stars}</div>
      <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
        &ldquo;{review}&rdquo;
      </p>
      <div className="mt-auto">
        <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
        <p className="text-sm text-[#FF8C00] font-medium uppercase tracking-wider">{title}</p>
      </div>
    </div>
  );
};