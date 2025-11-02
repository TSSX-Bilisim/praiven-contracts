import { a as RequestUserRole } from '../request-user.type-CsGP6svh.js';
export { R as RequestUser } from '../request-user.type-CsGP6svh.js';

interface AccessTokenPayload {
    sub: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: RequestUserRole;
    isSystem: boolean;
}

interface RefreshTokenPayload {
    sub: string;
    jti: string;
}

export { type AccessTokenPayload, type RefreshTokenPayload, RequestUserRole };
