export interface RefreshTokenPayload {
  sub: string; // user.id
  jti: string; // refresh token id
}