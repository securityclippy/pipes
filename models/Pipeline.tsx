// models/Pipeline.tsx

import { Input } from './Input';
import { Transform } from './Transform';
import { Output } from './Output';

export interface Pipeline {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  input: Input;
  transform: Transform;
  output: Output;
}
