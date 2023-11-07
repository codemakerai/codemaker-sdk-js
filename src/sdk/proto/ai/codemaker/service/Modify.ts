// Original file: src/sdk/proto/codemakerai.proto

export const Modify = {
  UNMODIFIED: 'UNMODIFIED',
  REPLACE: 'REPLACE',
} as const;

export type Modify =
  | 'UNMODIFIED'
  | 0
  | 'REPLACE'
  | 1

export type Modify__Output = typeof Modify[keyof typeof Modify]
