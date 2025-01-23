import React from 'react';

export const ZoneRideCard = () => {
  return (
    <div className="text-center mb-8">
      <div className="text-red-600 text-4xl font-bold mb-4">INTERSTATE</div>
      <div className="bg-gradient-to-b from-pink-300 to-pink-200 rounded-xl p-6 mb-4">
        <div className="text-8xl font-bold mb-2">9</div>
        <div className="text-2xl font-bold mb-1">ZONE RIDE</div>
        <div className="text-sm">**Not Valid for HBLR**</div>
      </div>
      <button className="text-lg underline">
        View Validator Instructions
      </button>
    </div>
  );
};