import { MaskingActionType } from "../types";

export interface IMessageEntity {
  id: number,
  messageId: number,
  entityLabelKey: string,
  entityCategoryKey: string,
  value: string,
  appliedMaskAction: MaskingActionType,
  maskedValue?: string,
  start?: number,
  end?: number
}