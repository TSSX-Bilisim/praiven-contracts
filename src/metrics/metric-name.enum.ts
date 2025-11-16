export enum FilterMetricName {
  REQUEST_COUNT = "filter.request.count",
  ERROR_COUNT = "filter.error.count",

  ENTITY_DETECTED = "filter.entity.detected.count",
  ENTITY_MASKED = "filter.entity.masked.count",
  UNMASKED_COUNT = "filter.entity.unmasked.count",

  ENTITY_LABEL = "filter.entity.label.count",
  ENTITY_CATEGORY = "filter.entity.category.count",
  MASK_ACTION = "filter.maskAction.count",

  POLICY_APPLIED = "filter.policy.applied.count",

  LATENCY_QUEUE_WAIT_MS = "filter.latency.queue.wait.ms",
  LATENCY_PROCESSING_MS = "filter.latency.processing.ms",
  LATENCY_TOTAL = "filter.latency.total.ms",

  THROUGHPUT_TOKENS_PER_MS = "filter.throughput.tokens.per.ms",
}