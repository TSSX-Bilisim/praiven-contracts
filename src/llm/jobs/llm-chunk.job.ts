export interface LlmChunkJob {
  conversationId: string;
  userMessageId: number;
  chunk: string;
}