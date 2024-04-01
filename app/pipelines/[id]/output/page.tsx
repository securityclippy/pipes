// app/pipelines/[id]/output/page.tsx

import { Pipeline } from '../../../../models/Pipeline';
import dummyPipelines from '../../../../data/pipelines';
import OutputConfigForm from '../../../../components/OutputConfigForm';

interface OutputConfigPageProps {
  params: {
    id: string;
  };
}

export default function OutputConfigPage({ params }: OutputConfigPageProps) {
  const pipeline = dummyPipelines.find((p) => p.id === params.id);

  if (!pipeline) {
    return <div>Pipeline not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Output Configuration</h1>
      <p>Pipeline: {pipeline.name}</p>
      <OutputConfigForm output={pipeline.output} />
    </div>
  );
}
