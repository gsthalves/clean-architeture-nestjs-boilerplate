import { ExampleEntity } from '@/domain';
import { Schema } from 'mongoose';

export const ExampleSchema = new Schema<ExampleEntity>({
  id: { type: String, required: true, index: true, unique: true },
  name: { type: String, required: true, index: true },
});
