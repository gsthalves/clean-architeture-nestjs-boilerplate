import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IExampleRepository } from '@/application';
import { ExampleEntity } from '@/domain';

export class ExampleRepository implements IExampleRepository {
  constructor(
    @InjectModel('ExampleEntity')
    private exampleModel: Model<ExampleEntity>,
  ) {}

  public async create(entity: ExampleEntity): Promise<ExampleEntity> {
    const response = await this.exampleModel.create({
      id: entity.id,
      name: entity.name,
    });

    return new ExampleEntity(response);
  }

  public async findById(id: string): Promise<ExampleEntity> {
    const response = await this.exampleModel.find({
      id,
    });

    return new ExampleEntity(response[0]);
  }
}
