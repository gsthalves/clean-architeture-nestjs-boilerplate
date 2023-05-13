import { ExampleEntity, IExampleService } from '@/domain';
import { IExampleRepository } from '@/application';

export class ExampleService implements IExampleService {
  constructor(private readonly exampleRepository: IExampleRepository) {}

  public async create(
    data: IExampleService.CreateInput,
  ): Promise<IExampleService.CreateOutput> {
    const entity = new ExampleEntity({
      id: data.id,
      name: data.name,
    });

    const response = await this.exampleRepository.create(entity);

    return response;
  }

  async findById(id: string): Promise<IExampleService.FindByIdOutput> {
    const response = await this.exampleRepository.findById(id);

    return response;
  }
}
