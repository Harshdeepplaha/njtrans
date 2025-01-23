import React from 'react';

export const DateTime = ({ currentTime }) => {
  const formatExpiration = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="text-center">
      <div className="text-3xl font-bold mb-2">
        {formatExpiration(currentTime)} AM
      </div>
      <div className="text-2xl font-bold mb-4">
        Friday, Jan 17, 2025
      </div>
      <div className="text-xl">
        Expires in 00:00:53:03
      </div>
    </div>
  );
};