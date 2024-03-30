// app/pipelines/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const pipelines = [
  { id: 1, name: 'Pipeline 1' },
  { id: 2, name: 'Pipeline 2' },
  { id: 3, name: 'Pipeline 3' },
  // Add more dummy pipeline data as needed
];

const AllPipelines: React.FC = () => {
  const [focusedPipelineId, setFocusedPipelineId] = useState<number | null>(null);
  const [openPopup, setOpenPopup] = useState<'input' | 'transform' | 'output' | null>(null);

  const handlePipelineClick = (pipelineId: number) => {
    setFocusedPipelineId(pipelineId === focusedPipelineId ? null : pipelineId);
  };

  const handlePopupOpen = (popupType: 'input' | 'transform' | 'output') => {
    setOpenPopup(popupType);
  };

  const handlePopupClose = () => {
    setOpenPopup(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Pipelines</h1>
      <div className="space-y-8">
        {pipelines.map((pipeline) => (
          <div
            key={pipeline.id}
            className={`flex items-center space-x-4 ${
              pipeline.id === focusedPipelineId ? 'bg-gray-100' : ''
            }`}
            onClick={() => handlePipelineClick(pipeline.id)}
          >
            <div className="flex items-center">
              <div className="font-bold mr-4">{pipeline.name}</div>
              <Link href={`/pipelines/${pipeline.id}`} legacyBehavior>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                  View Details
                </button>
              </Link>
            </div>
            <div className="flex-1 bg-gray-300 h-12 rounded-full relative">
              <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                <button
                  className="px-2 py-1 bg-white text-gray-800 rounded shadow-md hover:bg-gray-200 transition duration-200"
                  onClick={() => handlePopupOpen('input')}
                >
                  Input
                </button>
                <button
                  className="px-2 py-1 bg-white text-gray-800 rounded shadow-md hover:bg-gray-200 transition duration-200"
                  onClick={() => handlePopupOpen('transform')}
                >
                  Transform
                </button>
                <button
                  className="px-2 py-1 bg-white text-gray-800 rounded shadow-md hover:bg-gray-200 transition duration-200"
                  onClick={() => handlePopupOpen('output')}
                >
                  Output
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4 capitalize">{openPopup} Configuration</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-bold mb-1">
                Description
              </label>
              <textarea
                id="description"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block font-bold mb-1">
                Type
              </label>
              <select id="type" className="w-full px-4 py-2 border border-gray-300 rounded">
                <option value="">Select Type</option>
                {/* Add type options */}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                onClick={handlePopupClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPipelines;
