/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { validate as isUuid } from 'uuid';

// ── ParseCursorPipe ──────────────────────────────────────────────────────────
// Validates and decodes a base64 cursor token
@Injectable()
export class ParseCursorPipe implements PipeTransform<string | undefined, string | undefined> {
  transform(value: string | undefined, _meta: ArgumentMetadata): string | undefined {
    if (value === undefined || value === null || value === '') return undefined;
    try {
      const decoded = Buffer.from(value, 'base64url').toString('utf8');
      JSON.parse(decoded); // Validate it's valid JSON inside
      return value;
    } catch {
      throw new BadRequestException('Invalid cursor format');
    }
  }
}

// ── ParseObjectIdPipe ────────────────────────────────────────────────────────
// Validates that a route param is a valid UUID v4
@Injectable()
export class ParseUuidPipe implements PipeTransform<string, string> {
  transform(value: string, _meta: ArgumentMetadata): string {
    if (!isUuid(value)) {
      throw new BadRequestException(`Validation failed: '${value}' is not a valid UUID`);
    }
    return value;
  }
}
