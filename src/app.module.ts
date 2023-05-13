import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ExampleMiddleware,
  ExampleRepository,
  ExampleSchema,
  getMongoDbConnection,
} from '@/infrastructure';
import { ExampleController } from '@/presentation';
import { ExampleEntity, IExampleService } from '@/domain';
import { ExampleService, IExampleRepository } from '@/application';

@Module({
  imports: [
    MongooseModule.forRoot(getMongoDbConnection()),
    MongooseModule.forFeature([
      {
        name: ExampleEntity.name,
        schema: ExampleSchema,
        collection: 'examples',
      },
    ]),
  ],
  controllers: [ExampleController],
  providers: [
    {
      provide: IExampleService,
      useFactory: (exampleRepository: IExampleRepository) =>
        new ExampleService(exampleRepository),
      inject: [IExampleRepository],
    },
    {
      provide: IExampleRepository,
      useClass: ExampleRepository,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes('*');
  }
}
