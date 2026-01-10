import React from 'react';

type CustomTextProps = {
  text: string;
  className?: string;
  isAnimated?: boolean;
};

export const CustomText: React.FC<CustomTextProps> = ({ text, className = "", isAnimated = false }) => {
  return (
    <span className={`${className} ${isAnimated ? "animate-pulse" : ""}`}>
      {text}
    </span>
  );
};