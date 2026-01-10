import React, { ReactNode } from 'react';

type OrangeButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
};

export const OrangeButton: React.FC<OrangeButtonProps> = ({ 
  children, 
  onClick, 
  icon, 
  className = "", 
  type = "button",
  isLoading 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`
        flex items-center justify-center gap-2 px-6 py-3 
        bg-[#FF8C00] hover:bg-[#e67e00] text-white font-bold 
        rounded-lg transition-all duration-300 transform hover:scale-[1.02]
        active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {children}
          {icon && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};