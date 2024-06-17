// Original file: src/sdk/proto/codemakerai.proto

export const Visibility = {
  ALL: 'ALL',
  PUBLIC: 'PUBLIC',
} as const;

export type Visibility =
  | 'ALL'
  | 0
  | 'PUBLIC'
  | 1

export type Visibility__Output = typeof Visibility[keyof typeof Visibility]
