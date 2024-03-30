// app/components/TopBanner.tsx
import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white flex items-center justify-center">
      <h1 className="text-2xl font-bold">My App</h1>
    </div>
  );
};

export default TopBanner;
