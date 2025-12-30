import { SearchConversationHit } from "./search-conversation-hit";

export interface SearchConversationsResponse {
  data: SearchConversationHit[];
  total: number;
  count: number;
}