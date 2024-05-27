import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import {  Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception.message.includes('duplicate key value')) {
      return response.json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: "Username already exists",
        timestamp: new Date().toISOString(),
      });
    }

    console.log(exception.message)

    return response.json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
      errorMessage: exception.message
    });
  }
}

