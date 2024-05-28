import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import {  Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError, UnauthorizedException)
export class QueryFailedFilter implements ExceptionFilter {
  catch(exception: QueryFailedError , host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

console.log(exception.message)

    if (exception.message.includes('duplicate key value')) {
      return response.json({
        status: HttpStatus.BAD_REQUEST,
        message: "Username already exists",
        timestamp: new Date().toISOString(),
      });
    }


    if (exception.message.includes('Unauthorized')) {
      return response.json({
        status: HttpStatus.UNAUTHORIZED,
        message: "Login Failed",
        timestamp: new Date().toISOString(),
      });
    }


    return response.json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
      errorMessage: exception.message
    });
  }
}

