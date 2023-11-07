// Original file: src/sdk/proto/codemakerai.proto

export const Encoding = {
  NONE: 'NONE',
  GZIP: 'GZIP',
} as const;

export type Encoding =
  | 'NONE'
  | 0
  | 'GZIP'
  | 1

export type Encoding__Output = typeof Encoding[keyof typeof Encoding]
