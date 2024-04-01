// app/pipelines/page.tsx

import dummyPipelines from '../../data/pipelines';
import PipelineDisplay from '../../components/PipelineDisplay';

export default function PipelinesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pipelines</h1>
      <ul>
        {dummyPipelines.map((pipeline) => (
          <li key={pipeline.id}>
            <PipelineDisplay pipeline={pipeline} />
          </li>
        ))}
      </ul>
    </div>
  );
}
