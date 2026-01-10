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
      size={20}
      className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
    />
  ));

  return (
    <div className="h-full p-8 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col">
      <div className="flex mb-4">{stars}</div>
      <p className="text-gray-700 italic flex-grow mb-6 text-lg line-clamp-4">
        &ldquo;{review}&rdquo;
      </p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        <h4 className="font-bold text-lg text-gray-900">{name}</h4>
        <p className="text-sm text-[#FF8C00]">{title}</p>
      </div>
    </div>
  );
};