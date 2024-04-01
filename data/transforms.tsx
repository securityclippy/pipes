// data/transforms.tsx

import { Transform } from '../models/Transform';

const dummyTransforms: Transform[] = [
  {
    id: 'transform1',
    name: 'Transform 1',
    description: 'This is the first transform',
    type: 'script',
    settings: {
      script: 'transform-script.js',
    },
  },
  {
    id: 'transform2',
    name: 'Transform 2',
    description: 'This is the second transform',
    type: 'function',
    settings: {
      functionName: 'transformData',
    },
  },
  // Add more dummy transforms as needed
];

export default dummyTransforms;
