import { ExampleEntity } from '@/domain';

export abstract class IExampleRepository {
  abstract create(entity: ExampleEntity): Promise<ExampleEntity>;
  abstract findById(id: string): Promise<ExampleEntity>;
}
