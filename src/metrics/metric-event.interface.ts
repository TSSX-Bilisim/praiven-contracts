import { MetricLabel } from "./metric-labels.type";

export interface MetricEvent {
  metricName: string;
  value: number;
  timestamp?: string;
  labels: MetricLabel;
}
