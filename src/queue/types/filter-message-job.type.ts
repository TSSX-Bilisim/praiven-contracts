import { RequestUser } from "../../auth/types/request-user.type";

export interface FilterMessageJob {
  conversationId: string;
  messageId: number;
  modelId: string;
  content: string;

  departmentId: string;
  roleId: string;
  systemId: string;
}