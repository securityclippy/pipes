// components/TransformConfigForm.tsx

import { Transform } from '../models/Transform';

interface TransformConfigFormProps {
  transform: Transform;
}

export default function TransformConfigForm({ transform }: TransformConfigFormProps) {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="transformName" className="block mb-2">Name:</label>
        <input type="text" id="transformName" name="transformName" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={transform.name} />
      </div>
      <div className="mb-4">
        <label htmlFor="transformDescription" className="block mb-2">Description:</label>
        <textarea id="transformDescription" name="transformDescription" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={transform.description}></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="transformType" className="block mb-2">Type:</label>
        <select id="transformType" name="transformType" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={transform.type}>
          <option value="script">Script</option>
          <option value="function">Function</option>
          {/* Add more transform type options */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="transformSettings" className="block mb-2">Settings (JSON):</label>
        <textarea id="transformSettings" name="transformSettings" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={JSON.stringify(transform.settings)}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
