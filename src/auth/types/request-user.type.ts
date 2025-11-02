import { RequestUserRole } from "../enums/request-user-role";

export interface RequestUser {
  userId: string;
  role: RequestUserRole;
  isSystem: boolean;
}