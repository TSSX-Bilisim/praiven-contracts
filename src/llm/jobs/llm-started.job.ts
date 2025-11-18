export interface LlmStartedJob {
  conversationId: string;
  messageId: number;
  userId: string;

  message: any;
}