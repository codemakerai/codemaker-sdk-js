// Original file: src/sdk/proto/codemakerai.proto

export const LanguageCode = {
  UNSPECIFIED: 'UNSPECIFIED',
  EN: 'EN',
  ES: 'ES',
  PT: 'PT',
  JA: 'JA',
  VI: 'VI',
  TR: 'TR',
  KO: 'KO',
  DE: 'DE',
  FR: 'FR',
  PL: 'PL',
  ZH: 'ZH',
  IT: 'IT',
  ID: 'ID',
  NL: 'NL',
} as const;

export type LanguageCode =
  | 'UNSPECIFIED'
  | 0
  | 'EN'
  | 1
  | 'ES'
  | 2
  | 'PT'
  | 3
  | 'JA'
  | 4
  | 'VI'
  | 5
  | 'TR'
  | 6
  | 'KO'
  | 7
  | 'DE'
  | 8
  | 'FR'
  | 9
  | 'PL'
  | 10
  | 'ZH'
  | 11
  | 'IT'
  | 12
  | 'ID'
  | 13
  | 'NL'
  | 14

export type LanguageCode__Output = typeof LanguageCode[keyof typeof LanguageCode]
