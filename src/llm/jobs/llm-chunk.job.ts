export interface LlmChunkJob {
  conversationId: string;
  userMessageId: string;
  chunk: string;
}