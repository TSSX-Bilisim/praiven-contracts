import { IMessageEntity } from "../../entities";

export interface MessageFilteredJob {
  conversationId: string;
  messageId: number;
  maskedContent: string;
  entities: IMessageEntity[];
}