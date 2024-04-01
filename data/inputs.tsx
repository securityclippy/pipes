// data/inputs.tsx

import { Input } from '../models/Input';

const dummyInputs: Input[] = [
  {
    id: 'input1',
    name: 'Input 1',
    description: 'This is the first input',
    type: 'file',
    settings: {
      path: '/path/to/input/file',
    },
  },
  // Add more dummy inputs
];

export default dummyInputs;
