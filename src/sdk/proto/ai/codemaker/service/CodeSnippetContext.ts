// Original file: src/proto/codemakerai.proto


export interface CodeSnippetContext {
  'language'?: (string);
  'snippet'?: (string);
  'relativePath'?: (string);
  'score'?: (number | string);
}

export interface CodeSnippetContext__Output {
  'language': (string);
  'snippet': (string);
  'relativePath': (string);
  'score': (number);
}
