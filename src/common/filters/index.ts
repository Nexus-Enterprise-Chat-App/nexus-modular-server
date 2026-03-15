/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Request, Response } from 'express';
import { Prisma } from '../../../generated/prisma';

// ── GlobalHttpExceptionFilter ────────────────────────────────────────────────
@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalHttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let code = 'INTERNAL_ERROR';
    let fields: Record<string, string[]> | undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      if (typeof res === 'string') {
        message = res;
        code = exception.name.toUpperCase().replace(' ', '_');
      } else if (typeof res === 'object') {
        const resObj = res as any;
        message = resObj.message || message;
        code = resObj.error || code;
        fields = resObj.fields;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      this.logger.error(exception.stack, 'Unhandled exception');
    }

    response.status(status).json({
      success: false,
      error: {
        code,
        message: Array.isArray(message) ? message.join(', ') : message,
        ...(fields && { fields }),
      },
      meta: {
        timestamp: new Date().toISOString(),
        path: request.url,
      },
    });
  }
}

// ── WsExceptionFilter ────────────────────────────────────────────────────────
@Catch(WsException)
export class WsExceptionFilter implements ExceptionFilter {
  catch(exception: WsException, host: ArgumentsHost): void {
    const client = host.switchToWs().getClient<any>();
    const error = exception.getError();
    client.emit('error', {
      code: 'WS_ERROR',
      message: typeof error === 'string' ? error : JSON.stringify(error),
    });
  }
}

// ── PrismaExceptionFilter ────────────────────────────────────────────────────
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Database error';
    let code = 'DB_ERROR';

    switch (exception.code) {
      case 'P2002': {
        status = HttpStatus.CONFLICT;
        const fields = exception.meta?.target as string[];
        message = `${fields?.join(', ')} already exists`;
        code = 'DUPLICATE_ENTRY';
        break;
      }
      case 'P2025':
        status = HttpStatus.NOT_FOUND;
        message = 'Record not found';
        code = 'NOT_FOUND';
        break;
      case 'P2003':
        status = HttpStatus.BAD_REQUEST;
        message = 'Related record not found';
        code = 'FOREIGN_KEY_VIOLATION';
        break;
      case 'P2014':
        status = HttpStatus.BAD_REQUEST;
        message = 'Invalid relation';
        code = 'INVALID_RELATION';
        break;
    }

    response.status(status).json({
      success: false,
      error: { code, message },
      meta: { timestamp: new Date().toISOString() },
    });
  }
}

// ── ValidationExceptionFilter ────────────────────────────────────────────────
// Formats class-validator errors into a field-level error map
export function formatValidationErrors(errors: any[]): Record<string, string[]> {
  return errors.reduce(
    (acc, err) => {
      acc[err.property] = Object.values(err.constraints || {});
      return acc;
    },
    {} as Record<string, string[]>,
  );
}
