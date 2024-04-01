// data/outputs.tsx

import { Output } from '../models/Output';

const dummyOutputs: Output[] = [
  {
    id: 'output1',
    name: 'Output 1',
    description: 'This is the first output',
    type: 'file',
    settings: {
      path: '/path/to/output/file',
    },
  },
  {
    id: 'output2',
    name: 'Output 2',
    description: 'This is the second output',
    type: 'database',
    settings: {
      url: 'mongodb://localhost:27017/mydb',
      collection: 'output',
    },
  },
  // Add more dummy outputs as needed
];

export default dummyOutputs;
