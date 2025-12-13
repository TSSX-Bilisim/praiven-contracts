export interface ConversationTitleRequestedJob {
  userId: string;
  conversationId: string;
  messageId: number;
  maskedContent: string;
}

export interface ConversationTitleGeneratedJob {
  userId: string;
  conversationId: string;
  title: string;
}