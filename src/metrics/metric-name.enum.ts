export enum FilterMetricName {
  FILTER_REQUEST_COUNT = "filter.request.count",
  FILTER_ERROR_COUNT = "filter.error.count",

  FILTER_ENTITY_DETECTED = "filter.entity.detected.count",
  FILTER_ENTITY_MASKED = "filter.entity.masked.count",
  FILTER_UNMASKED_COUNT = "filter.entity.unmasked.count",

  FILTER_ENTITY_LABEL = "filter.entity.label.count",
  FILTER_ENTITY_CATEGORY = "filter.entity.category.count",
  FILTER_MASK_ACTION = "filter.maskAction.count",

  FILTER_POLICY_APPLIED = "filter.policy.applied.count",

  FILTER_QUEUE_WAIT_MS = "filter.queue.wait.ms",
  FILTER_PROCESSING_MS = "filter.processing.ms",
  FILTER_TOTAL_LATENCY = "filter.totalLatency.ms",
}