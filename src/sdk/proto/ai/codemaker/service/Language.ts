// Original file: src/sdk/proto/codemakerai.proto

export const Language = {
  SQL: 'SQL',
  C: 'C',
  CPP: 'CPP',
  JAVA: 'JAVA',
  JAVASCRIPT: 'JAVASCRIPT',
  CSHARP: 'CSHARP',
  GO: 'GO',
  KOTLIN: 'KOTLIN',
  TYPESCRIPT: 'TYPESCRIPT',
} as const;

export type Language =
  | 'SQL'
  | 0
  | 'C'
  | 1
  | 'CPP'
  | 3
  | 'JAVA'
  | 7
  | 'JAVASCRIPT'
  | 9
  | 'CSHARP'
  | 13
  | 'GO'
  | 18
  | 'KOTLIN'
  | 19
  | 'TYPESCRIPT'
  | 20

export type Language__Output = typeof Language[keyof typeof Language]
