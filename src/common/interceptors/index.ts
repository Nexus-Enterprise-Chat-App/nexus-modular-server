/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, map, tap, timeout } from 'rxjs/operators';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { v4 as uuidv4 } from 'uuid';

// ── ResponseTransformInterceptor ─────────────────────────────────────────────
// Wraps every successful response in a standard envelope
@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, any> {
  intercept(_ctx: ExecutionContext, next: CallHandler<T>): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        meta: {
          timestamp: new Date().toISOString(),
        },
      })),
    );
  }
}

// ── LoggingInterceptor ───────────────────────────────────────────────────────
// Structured request/response logging with correlation IDs
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    @InjectPinoLogger(LoggingInterceptor.name)
    private readonly logger: PinoLogger,
  ) {}

  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const req = ctx.switchToHttp().getRequest();
    const correlationId = (req.headers['x-correlation-id'] as string) || uuidv4();
    req.correlationId = correlationId;

    const { method, url } = req;
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        const res = ctx.switchToHttp().getResponse();
        this.logger.info(
          { correlationId, method, url, statusCode: res.statusCode, ms: Date.now() - start },
          'Request completed',
        );
      }),
    );
  }
}

// ── TimeoutInterceptor ───────────────────────────────────────────────────────
// Enforces a global request timeout of 30 seconds
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(_ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(30_000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException('Request timed out'));
        }
        return throwError(() => err);
      }),
    );
  }
}
