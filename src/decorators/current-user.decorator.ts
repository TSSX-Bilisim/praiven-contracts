import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { RequestUser, RequestUserRole } from '../auth';

/**
 * API Gateway tarafından eklenen 'x-user-id', 'x-user-role' ve 'x-user-is-system'
 * başlıklarını okur, bir 'RequestUser' nesnesine dönüştürür ve döndürür.
 *
 * @example @CurrentUser() user: RequestUser
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): RequestUser => {
    const request = ctx.switchToHttp().getRequest<Request>();

    // 1. Üç ayrı başlığı oku
    const userId = request.headers['x-user-id'] as string;
    const role = request.headers['x-user-role'] as RequestUserRole;
    const isSystemHeader = request.headers['x-user-is-system'] as string; // "true" veya "false"

    // 2. Başlıkların varlığını kontrol et
    if (!userId || !role || !isSystemHeader) {
      throw new UnauthorizedException(
        'Gerekli kullanıcı başlıkları (x-user-id, x-user-role, x-user-is-system) eksik. Gateway yapılandırmasını kontrol edin.',
      );
    }

    try {
      // 3. Tipleri doğrula ve dönüştür

      // 3a. 'role' değerinin geçerli bir UserRole enum üyesi olup olmadığını kontrol et
      const validRoles = Object.values(RequestUserRole);
      if (!validRoles.includes(role)) {
        throw new Error(`Geçersiz rol değeri alındı: '${role}'`);
      }

      // 3b. 'isSystem' string'ini ('true'/'false') boolean'a çevir
      const isSystem = isSystemHeader === 'true';

      // 4. RequestUser objesini oluştur ve döndür
      return {
        userId: userId,
        role: role,
        isSystem: isSystem,
      };
    } catch (error: any) {
      // 3a veya 3b'deki bir hata buraya düşer
      throw new InternalServerErrorException(
        'Kullanıcı başlıkları parse edilemedi veya yapısal olarak bozuk.',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        error,
      );
    }
  },
);
