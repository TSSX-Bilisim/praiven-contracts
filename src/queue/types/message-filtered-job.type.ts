import { MessageEntityDto } from "../../entities";

export interface MessageFilteredJob {
  conversationId: string;
  messageId: number;
  maskedContent: string;
  entities: MessageEntityDto[];
}