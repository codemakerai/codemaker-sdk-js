// Original file: src/sdk/proto/codemakerai.proto

export const Vote = {
  UP_VOTE: 'UP_VOTE',
  DOWN_VOTE: 'DOWN_VOTE',
} as const;

export type Vote =
  | 'UP_VOTE'
  | 0
  | 'DOWN_VOTE'
  | 1

export type Vote__Output = typeof Vote[keyof typeof Vote]
