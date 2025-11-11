export enum MaskingActionType {
  FULL = 'FULL',             // Tam maskeleme
  PARTIAL_END = 'PARTIAL_END',   // Sondan kısmi maskeleme
  PARTIAL_START = 'PARTIAL_START', // Baştan kısmi maskeleme
  REDACT = 'REDACT',         // Metni gizle / sansürle
  HASH = 'HASH',             // Hash ile maskele
  UNMASK = 'UNMASK',         // Maskeleme yapılmasın
}