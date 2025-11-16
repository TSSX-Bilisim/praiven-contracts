export type MetricLabel = {
  systemId: string;
  roleId: string;
  departmentId: string;
  policyId: string;

  // FILTER SPECIFIC LABELS
  entityLabel?: string;
  entityCategory?: string;
  maskAction?: string; 

  // LLM SPECIFIC LABELS
  modelId?: string;
  providerId?: string;
};