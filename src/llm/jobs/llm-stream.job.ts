import { ChatMessage } from '../entities/chat-message';

export interface LlmStreamJob {
  conversationId: string;
  userMessageId: string;
  
  model: string; // 'openai:gpt-5.1'
  providerId: string; // 'openai'

  context: ChatMessage[]; // önceki mesajlar
}
