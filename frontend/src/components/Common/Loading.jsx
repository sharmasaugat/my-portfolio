import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ size = 'lg', className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`
          animate-spin rounded-full 
          border-2 border-gray-700
          border-t-blue-500 border-r-purple-500
          ${sizes[size]}
        `}
      />
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Loading;