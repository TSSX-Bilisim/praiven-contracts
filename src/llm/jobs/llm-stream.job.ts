import { ChatMessage } from '../entities/chat-message';

export interface LlmStreamJob {
  deparmentId: string;
  roleId: string;
  conversationId: string;
  messageId: number;
  userId: string;
  
  model: string; // 'openai:gpt-5.1'
  providerId: string; // 'openai'

  context: ChatMessage[]; // önceki mesajlar
}
