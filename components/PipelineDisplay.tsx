// components/PipelineDisplay.tsx

import Link from 'next/link';
import { Pipeline } from '../models/Pipeline';

interface PipelineDisplayProps {
  pipeline: Pipeline;
}

export default function PipelineDisplay({ pipeline }: PipelineDisplayProps) {
  return (
    <div className="mb-8 border border-gray-200 rounded-lg">
      <div className="p-4">
        <Link href={`/pipelines/${pipeline.id}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-blue-600 hover:underline">{pipeline.name}</h2>
        </Link>
        <p className="mb-4">{pipeline.description}</p>
        <div className="mb-4">
          <span className={`inline-block px-2 py-1 rounded ${pipeline.enabled ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {pipeline.enabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        <div className="relative bg-white rounded-lg shadow-md py-6 px-4">
          <div className="absolute inset-0 flex justify-between items-center">
            <Link href={`/pipelines/${pipeline.id}/input`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Input</button>
            </Link>
            <Link href={`/pipelines/${pipeline.id}/transform`}>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Transform</button>
            </Link>
            <Link href={`/pipelines/${pipeline.id}/output`}>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">Output</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
