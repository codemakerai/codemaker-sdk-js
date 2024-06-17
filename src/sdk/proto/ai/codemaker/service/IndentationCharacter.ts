// Original file: src/sdk/proto/codemakerai.proto

export const IndentationCharacter = {
  SPACE: 'SPACE',
  TAB: 'TAB',
} as const;

export type IndentationCharacter =
  | 'SPACE'
  | 0
  | 'TAB'
  | 1

export type IndentationCharacter__Output = typeof IndentationCharacter[keyof typeof IndentationCharacter]
