import React from 'react';

export const TicketDetails = () => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div className="border border-gray-300 rounded p-4">
        <div className="text-lg font-bold">One Way</div>
        <div className="text-2xl font-bold">1 Adult</div>
      </div>
      <div className="text-center">
        <img 
          src="https://heyboss.heeyo.ai/user-assets/Y6JgQ0Gx.png" 
          alt="QR Code"
          className="w-32 h-32"
        />
        <div className="text-sm mt-2">Tap to enlarge</div>
      </div>
    </div>
  );
};