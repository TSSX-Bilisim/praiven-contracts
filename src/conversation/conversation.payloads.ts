export interface ConversationTitleRequestedPayload {
  userId: string;
  conversationId: string;
  messageId: number;
  maskedContent: string;
}

export interface ConversationTitleGeneratedPayload {
  userId: string;
  conversationId: string;
  title: string;
}