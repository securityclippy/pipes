// components/TopBanner.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopBanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-6">Pipeline Management Inc.</h1>
        <Link href="/system-logs" className="text-white hover:underline">
          System Logs
        </Link>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg py-2">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
              <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </Link>
              <Link href="/support" className="block px-4 py-2 hover:bg-gray-100">
                Support
              </Link>
              <Link href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
