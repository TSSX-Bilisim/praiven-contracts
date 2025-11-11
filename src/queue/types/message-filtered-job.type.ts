import { IMessageEntity } from "../../entities";

export interface MessageFilteredJob {
  conversationId: string;
  userId: string;
  messageId: number;
  maskedContent: string;
  entities: IMessageEntity[];
}