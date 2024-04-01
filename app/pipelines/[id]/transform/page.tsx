// app/pipelines/[id]/transform/page.tsx

import { Pipeline } from '../../../../models/Pipeline';
import dummyPipelines from '../../../../data/pipelines';
import TransformConfigForm from '../../../../components/TransformConfigForm';

interface TransformConfigPageProps {
  params: {
    id: string;
  };
}

export default function TransformConfigPage({ params }: TransformConfigPageProps) {
  const pipeline = dummyPipelines.find((p) => p.id === params.id);

  if (!pipeline) {
    return <div>Pipeline not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transform Configuration</h1>
      <p>Pipeline: {pipeline.name}</p>
      <TransformConfigForm transform={pipeline.transform} />
    </div>
  );
}
