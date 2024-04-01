// components/InputConfigForm.tsx

import { Input } from '../models/Input';

interface InputConfigFormProps {
  input: Input;
}

export default function InputConfigForm({ input }: InputConfigFormProps) {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="inputName" className="block mb-2">Name:</label>
        <input type="text" id="inputName" name="inputName" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={input.name} />
      </div>
      <div className="mb-4">
        <label htmlFor="inputDescription" className="block mb-2">Description:</label>
        <textarea id="inputDescription" name="inputDescription" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={input.description}></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="inputType" className="block mb-2">Type:</label>
        <select id="inputType" name="inputType" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={input.type}>
          <option value="file">File</option>
          <option value="api">API</option>
          {/* Add more input type options */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="inputSettings" className="block mb-2">Settings (JSON):</label>
        <textarea id="inputSettings" name="inputSettings" className="border border-gray-300 px-4 py-2 rounded w-full" defaultValue={JSON.stringify(input.settings)}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
