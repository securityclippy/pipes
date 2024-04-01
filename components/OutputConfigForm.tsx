// components/OutputConfigForm.tsx

import { Output } from '../models/Output';

interface OutputConfigFormProps {
  output: Output;
}

export default function OutputConfigForm({ output }: OutputConfigFormProps) {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="outputName" className="block mb-2">Name:</label>
        <input type="text" id="outputName" name="outputName" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={output.name} />
      </div>
      <div className="mb-4">
        <label htmlFor="outputDescription" className="block mb-2">Description:</label>
        <textarea id="outputDescription" name="outputDescription" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={output.description}></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="outputType" className="block mb-2">Type:</label>
        <select id="outputType" name="outputType" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={output.type}>
          <option value="file">File</option>
          <option value="database">Database</option>
          {/* Add more output type options */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="outputSettings" className="block mb-2">Settings (JSON):</label>
        <textarea id="outputSettings" name="outputSettings" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={JSON.stringify(output.settings)}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
