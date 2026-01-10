import React from 'react';

type DualButtonsProps = {
  options: string[];
  activeOption: string;
  onSelect: (option: string) => void;
};

export const DualButtons: React.FC<DualButtonsProps> = ({ options, activeOption, onSelect }) => {
  return (
    <div className="inline-flex p-1 bg-gray-200 rounded-xl">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`
            px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300
            ${activeOption === option 
              ? "bg-white text-gray-900 shadow-md" 
              : "text-gray-500 hover:text-gray-700"}
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};