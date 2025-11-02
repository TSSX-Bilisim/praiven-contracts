import { RequestUserRole } from "../enums/request-user-role";

export interface RequestUser {
  userId: string;
  departmentId: string;
  roleId: string;
}