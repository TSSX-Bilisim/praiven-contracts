import { a as RequestUserRole } from '../request-user.type-CsGP6svh.mjs';
export { R as RequestUser } from '../request-user.type-CsGP6svh.mjs';

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
