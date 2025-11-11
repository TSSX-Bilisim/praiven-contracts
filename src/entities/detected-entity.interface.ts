export interface DetectedEntity {
  label: string;
  text: string;
  start: number;
  end: number;
  score?: number;
}