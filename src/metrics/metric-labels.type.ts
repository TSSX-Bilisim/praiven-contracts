export type MetricLabel = {
  roleId?: string;
  departmentId?: string;

  // FILTER SPECIFIC LABELS
  systemId?: string;
  policyId?: string;

  entityLabel?: string;
  entityCategory?: string;
  maskAction?: string; 

  // LLM SPECIFIC LABELS
  modelId?: string;
  providerId?: string;
  conversationId?: string;
};