import React from 'react';

export const StatusBar = ({ time, network, batteryLevel }) => {
  return (
    <div className="flex justify-between items-center px-5 py-2 bg-black text-white">
      <span className="text-sm font-medium">{time}</span>
      <div className="flex items-center space-x-1">
        <span className="text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
          </svg>
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <span className="text-sm">{network}</span>
        <span className="text-sm">{batteryLevel}%</span>
      </div>
    </div>
  );
};