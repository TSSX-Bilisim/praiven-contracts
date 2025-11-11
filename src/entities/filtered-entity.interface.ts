import { MaskingActionType } from "../types";

export interface FilteredEntity {
  labelKey: string;
  categoryKey: string;
  value: string;
  maskedValue: string;
  appliedAction: MaskingActionType;
  start: number;
  end: number;
}