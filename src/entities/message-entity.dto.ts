import { MaskingActionType } from "../types";

export class MessageEntityDto {
  constructor(
    public id: number,
    public messageId: number,
    public labelKey: string,
    public categoryKey: string,
    public value: string,
    public appliedAction: MaskingActionType,
    public maskedValue?: string,
    public start?: number,
    public end?: number
  ) {}
}