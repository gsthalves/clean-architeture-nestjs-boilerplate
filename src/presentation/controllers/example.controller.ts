import { IExampleService } from '@/domain';
import { Body, Controller, Post } from '@nestjs/common';
import { ExampleRequest, ExampleResponse } from '@/presentation/contracts';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: IExampleService) {}

  @Post('/')
  async execute(@Body() body: ExampleRequest): Promise<ExampleResponse> {
    return await this.exampleService.create(body);
  }
}
