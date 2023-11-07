// Original file: src/sdk/proto/codemakerai.proto

export const Mode = {
  CODE: 'CODE',
  INLINE_CODE: 'INLINE_CODE',
  EDIT_CODE: 'EDIT_CODE',
  DOCUMENT: 'DOCUMENT',
  FIX_SYNTAX: 'FIX_SYNTAX',
} as const;

export type Mode =
  | 'CODE'
  | 0
  | 'INLINE_CODE'
  | 1
  | 'EDIT_CODE'
  | 2
  | 'DOCUMENT'
  | 3
  | 'FIX_SYNTAX'
  | 4

export type Mode__Output = typeof Mode[keyof typeof Mode]
