
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', onClick }) => {
  const clickableClasses = onClick ? 'cursor-pointer hover:shadow-xl transition-shadow duration-300' : '';
  return (
    <div 
      className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h3>}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

export default Card;
    