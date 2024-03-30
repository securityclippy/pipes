// app/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-16 bottom-0 w-64 bg-gray-100 p-4">
      <div className="space-y-4">
        <Link href="/pipelines/create" legacyBehavior>
          <button className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
            Create New Pipeline
          </button>
        </Link>
        <Link href="/pipelines" legacyBehavior>
          <button className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
            View All Pipelines
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
