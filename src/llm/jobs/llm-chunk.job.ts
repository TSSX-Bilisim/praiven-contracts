export interface LlmChunkJob {
  conversationId: string;
  messageId: number;
  userId: string;
  chunk: string;
}