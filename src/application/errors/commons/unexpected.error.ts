export class UnexpectedError extends Error {
  private readonly statusCode: number;

  constructor(message) {
    super(message);
    this.name = 'UnexpectedError';
    this.statusCode = 500;
  }
}
