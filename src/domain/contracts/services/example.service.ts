export namespace IExampleService {
  export type CreateInput = {
    id: string;
    name: string;
  };

  export type CreateOutput = {
    id: string;
    name: string;
  };

  export type FindByIdOutput = {
    id: string;
    name: string;
  };
}

export abstract class IExampleService {
  abstract create(
    data: IExampleService.CreateInput,
  ): Promise<IExampleService.CreateOutput>;
  abstract findById(id: string): Promise<IExampleService.FindByIdOutput>;
}
