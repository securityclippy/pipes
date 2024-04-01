// app/transforms/page.tsx

import dummyTransforms from '../../data/transforms';

export default function TransformsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Transforms</h1>
      <ul>
        {dummyTransforms.map((transform) => (
          <li key={transform.id}>
            <h2 className="text-xl font-bold mb-2">{transform.name}</h2>
            <p>{transform.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
