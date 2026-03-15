import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

// ── Response Envelopes ───────────────────────────────────────────────────────

export class ResponseMeta {
  @ApiProperty({ example: '2026-01-01T00:00:00.000Z' })
  timestamp!: string;

  @ApiPropertyOptional()
  nextCursor?: string;

  @ApiPropertyOptional()
  hasMore?: boolean;

  @ApiPropertyOptional()
  total?: number;
}

export class ApiResponse<T> {
  @ApiProperty({ example: true })
  success!: boolean;

  data!: T;

  @ApiProperty({ type: ResponseMeta })
  meta!: ResponseMeta;

  static ok<T>(data: T, meta?: Partial<ResponseMeta>): ApiResponse<T> {
    return {
      success: true,
      data,
      meta: { timestamp: new Date().toISOString(), ...meta },
    };
  }
}

// ── Pagination DTOs ──────────────────────────────────────────────────────────

export class CursorPaginationDto {
  @ApiPropertyOptional({ description: 'Cursor for next page (base64url encoded)', example: '' })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({
    description: 'Number of items per page',
    minimum: 1,
    maximum: 100,
    default: 20,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;
}

export interface CursorPaginationResult<T> {
  items: T[];
  nextCursor: string | null;
  hasMore: boolean;
}

// ── Cursor Utilities ─────────────────────────────────────────────────────────

export function encodeCursor(data: Record<string, unknown>): string {
  return Buffer.from(JSON.stringify(data)).toString('base64url');
}

export function decodeCursor<T extends Record<string, unknown>>(cursor: string): T {
  return JSON.parse(Buffer.from(cursor, 'base64url').toString('utf8')) as T;
}
