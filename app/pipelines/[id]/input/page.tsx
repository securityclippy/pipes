// app/pipelines/[id]/input/page.tsx

import { Pipeline } from '../../../../models/Pipeline';
import dummyPipelines from '../../../../data/pipelines';
import InputConfigForm from '../../../../components/InputConfigForm';

interface InputConfigPageProps {
  params: {
    id: string;
  };
}

export default function InputConfigPage({ params }: InputConfigPageProps) {
  const pipeline = dummyPipelines.find((p) => p.id === params.id);

  if (!pipeline) {
    return <div>Pipeline not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Input Configuration</h1>
      <p>Pipeline: {pipeline.name}</p>
      <InputConfigForm input={pipeline.input} />
    </div>
  );
}
