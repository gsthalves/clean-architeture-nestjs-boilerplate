import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const message = exception.message || 'Unexpected error.';
    const status = exception?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception.name === 'BadRequestException') {
      response.status(status).json({
        statusCode: exception.response.statusCode,
        message: exception.response.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
      return;
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
