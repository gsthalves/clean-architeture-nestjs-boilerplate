import { IsString, IsNotEmpty } from 'class-validator';

export class ExampleRequest {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
