// app/pipelines/[id]/page.tsx

import { Pipeline } from '../../../models/Pipeline';
import dummyPipelines from '../../../data/pipelines';
import PipelineDisplay from '../../../components/PipelineDisplay';

interface PipelineDetailPageProps {
  params: {
    id: string;
  };
}

export default function PipelineDetailPage({ params }: PipelineDetailPageProps) {
  const pipeline = dummyPipelines.find((p) => p.id === params.id);

  if (!pipeline) {
    return <div>Pipeline not found</div>;
  }

  return (
    <div>
      <PipelineDisplay pipeline={pipeline} />
    </div>
  );
}
