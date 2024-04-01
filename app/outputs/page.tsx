// app/outputs/page.tsx

import dummyOutputs from '../../data/outputs';

export default function OutputsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Outputs</h1>
      <ul>
        {dummyOutputs.map((output) => (
          <li key={output.id}>
            <h2 className="text-xl font-bold mb-2">{output.name}</h2>
            <p>{output.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
