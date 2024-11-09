import React from 'react';

const Loading = ({ size = 'lg' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`animate-spin rounded-full border-t-2 border-b-2 border-[#64FFDA] ${sizes[size]}`}></div>
    </div>
  );
};

export default Loading;