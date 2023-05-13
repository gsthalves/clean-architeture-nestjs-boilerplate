export type ExampleEntityProps = {
  id: string;
  name: string;
};

export class ExampleEntity {
  constructor(private readonly props: ExampleEntityProps) {}

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }
}
