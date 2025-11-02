import { RequestUser } from "../../auth/types/request-user.type";

export interface FilterMessageJob {
  conversationId: string;
  messageId: string;
  content: string;
  userId: string;
  userPayload: RequestUser;  // contracts içindeki user tipi
  modelId: string;
}