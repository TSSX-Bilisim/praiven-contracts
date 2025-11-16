import { MetricLabel } from "./metric-labels.type";
import { MetricBreakdown } from "./metric-breakdown.type";

export interface MetricEvent {
  metricName: string;
  value: number;
  timestamp?: string;
  labels: MetricLabel & {
    breakdown?: MetricBreakdown;
  };
}
