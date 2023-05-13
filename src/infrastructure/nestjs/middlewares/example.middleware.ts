import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  async use(request: any, response: Response, next: NextFunction) {
    console.log('Example Middleware');

    next();
  }
}
