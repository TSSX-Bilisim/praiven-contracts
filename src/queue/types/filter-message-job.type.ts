import { RequestUser } from "../../auth/types/request-user.type";

export interface FilterMessageJob {
  conversationId: string;
  messageId: number;
  user: RequestUser;  // contracts içindeki user tipi
  modelId: string;
  systemKey: string;
  content: string;
}