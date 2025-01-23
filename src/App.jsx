import React, { useState, useEffect } from 'react';
import { StatusBar } from './components/StatusBar';
import { TicketDetails } from './components/TicketDetails';
import { ZoneRideCard } from './components/ZoneRideCard';
import { NavigationBar } from './components/NavigationBar';
import { DateTime } from './components/DateTime';

export const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full max-w-md mx-auto bg-white relative">
      
      <div className="px-4 py-6">
        <TicketDetails />
        <ZoneRideCard />
        <DateTime currentTime={currentTime} />
      </div>
      <NavigationBar />
    </div>
  );
};