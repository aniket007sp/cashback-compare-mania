import React from 'react';

const Advertisement = ({ size }) => {
  let className = 'bg-gray-200 flex items-center justify-center text-gray-500 font-bold';
  
  switch(size) {
    case 'small':
      className += ' h-20 w-full sm:w-64';
      break;
    case 'medium':
      className += ' h-40 w-full sm:w-96';
      break;
    case 'large':
      className += ' h-60 w-full';
      break;
    default:
      className += ' h-20 w-full';
  }

  return (
    <div className={className}>
      Advertisement ({size})
    </div>
  );
};

export default Advertisement;