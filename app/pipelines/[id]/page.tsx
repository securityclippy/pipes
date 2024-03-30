// app/pipelines/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const PipelineDetails: React.FC = () => {
  const { id } = useParams();

  // Fetch pipeline data based on the id (you can replace this with your own data fetching logic)
  const pipeline = {
    id: 1,
    name: 'Pipeline 1',
    description: 'This is a sample pipeline',
    enabled: true,
    components: [
      { id: 1, type: 'input', name: 'Input 1' },
      { id: 2, type: 'transform', name: 'Transform 1' },
      { id: 3, type: 'transform', name: 'Transform 2' },
      { id: 4, type: 'output', name: 'Output 1' },
    ],
  };

  const [name, setName] = useState(pipeline.name);
  const [description, setDescription] = useState(pipeline.description);
  const [enabled, setEnabled] = useState(pipeline.enabled);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedPipeline = {
      name,
      description,
      enabled,
    };
    // Implement your save logic here (e.g., API call to update the pipeline)
    console.log('Saving pipeline details:', updatedPipeline);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pipeline Details</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        {/* ... */}
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Pipeline Components</h2>
        <div className="flex">
          <div className="w-16 h-full bg-gray-300 rounded-full relative">
            {pipeline.components.map((component, index) => (
              <div
                key={component.id}
                className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center ${
                  index === 0 ? 'top-0' : index === pipeline.components.length - 1 ? 'bottom-0' : `top-${index * 25}%`
                }`}
              >
                <div className="text-sm font-bold">{component.type}</div>
              </div>
            ))}
          </div>
          <div className="ml-8">
            {pipeline.components.map((component) => (
              <div key={component.id} className="mb-4">
                <div className="font-bold">{component.name}</div>
                <div className="text-gray-600">{component.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineDetails;
