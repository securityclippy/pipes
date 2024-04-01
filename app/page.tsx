// app/page.tsx

import Link from 'next/link';
import dummyPipelines from '../data/pipelines';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pipelines</h1>
      <ul>
        {dummyPipelines.map((pipeline) => (
          <li key={pipeline.id}>
            <Link href={`/pipelines/${pipeline.id}`}>
              <h2 className="text-xl font-bold mb-2">{pipeline.name}</h2>
            </Link>
            <p>{pipeline.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
