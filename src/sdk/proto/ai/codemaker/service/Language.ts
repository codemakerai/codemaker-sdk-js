// Original file: src/sdk/proto/codemakerai.proto

export const Language = {
  SQL: 'SQL',
  C: 'C',
  OBJECTIVEC: 'OBJECTIVEC',
  CPP: 'CPP',
  PYTHON: 'PYTHON',
  R: 'R',
  HTML: 'HTML',
  JAVA: 'JAVA',
  PHP: 'PHP',
  JAVASCRIPT: 'JAVASCRIPT',
  RUBY: 'RUBY',
  XML: 'XML',
  CSS: 'CSS',
  CSHARP: 'CSHARP',
  YAML: 'YAML',
  JSON: 'JSON',
  SCALA: 'SCALA',
  SASS: 'SASS',
  GO: 'GO',
  KOTLIN: 'KOTLIN',
  TYPESCRIPT: 'TYPESCRIPT',
  TOML: 'TOML',
  SWIFT: 'SWIFT',
  RUST: 'RUST',
  DART: 'DART',
} as const;

export type Language =
  | 'SQL'
  | 0
  | 'C'
  | 1
  | 'OBJECTIVEC'
  | 2
  | 'CPP'
  | 3
  | 'PYTHON'
  | 4
  | 'R'
  | 5
  | 'HTML'
  | 6
  | 'JAVA'
  | 7
  | 'PHP'
  | 8
  | 'JAVASCRIPT'
  | 9
  | 'RUBY'
  | 10
  | 'XML'
  | 11
  | 'CSS'
  | 12
  | 'CSHARP'
  | 13
  | 'YAML'
  | 14
  | 'JSON'
  | 15
  | 'SCALA'
  | 16
  | 'SASS'
  | 17
  | 'GO'
  | 18
  | 'KOTLIN'
  | 19
  | 'TYPESCRIPT'
  | 20
  | 'TOML'
  | 21
  | 'SWIFT'
  | 22
  | 'RUST'
  | 23
  | 'DART'
  | 24

export type Language__Output = typeof Language[keyof typeof Language]
