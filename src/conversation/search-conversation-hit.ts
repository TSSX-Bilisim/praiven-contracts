export interface SearchConversationHit {
  conversationId: string;
  conversationTitle: string | null;

  messageId: number;
  messageContent: string;
  messageCreatedAt?: string;
}