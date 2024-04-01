// app/inputs/page.tsx

import dummyInputs from '../../data/inputs';

export default function InputsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inputs</h1>
      <ul>
        {dummyInputs.map((input) => (
          <li key={input.id}>
            <h2 className="text-xl font-bold mb-2">{input.name}</h2>
            <p>{input.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
