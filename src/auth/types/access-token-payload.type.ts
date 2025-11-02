import { RequestUserRole } from "../enums/request-user-role";

export interface AccessTokenPayload {
  sub: string; // user.id (string olarak)
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: RequestUserRole; // "ADMIN" | "USER" | "SYSTEM"
  isSystem: boolean; // sistem kullanıcısı mı
}