// components/Sidebar.tsx

import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="sidebar p-4">
      <ul>
        <li className="mb-2">
          <Link href="/pipelines">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Pipelines</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/inputs">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Inputs</button>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/transforms">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Transforms</button>
          </Link>
        </li>
        <li>
          <Link href="/outputs">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Outputs</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
