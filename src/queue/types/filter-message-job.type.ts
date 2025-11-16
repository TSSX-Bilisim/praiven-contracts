export interface FilterMessageJob {
  conversationId: string;
  messageId: number;
  modelId: string;
  content: string;

  departmentId: string;
  roleId: string;
  systemId: string;
}