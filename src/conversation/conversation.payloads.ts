export interface ConversationTitleRequestedPayload {
  userId: string;
  conversationId: string;
  messageId: number;
  maskedContent: string;
}

export interface ConversationTitlePayload  {
  userId: string;
  conversationId: string;
  title: string;
}