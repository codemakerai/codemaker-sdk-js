// Original file: src/sdk/proto/codemakerai.proto

import type { CodeSnippetContext as _ai_codemaker_service_CodeSnippetContext, CodeSnippetContext__Output as _ai_codemaker_service_CodeSnippetContext__Output } from '../../../ai/codemaker/service/CodeSnippetContext';

export interface CompletionOptions {
  'codePath'?: (string);
  'allowMultiLineAutocomplete'?: (boolean);
  'codeSnippetContexts'?: (_ai_codemaker_service_CodeSnippetContext)[];
  'contextId'?: (string);
  'model'?: (string);
}

export interface CompletionOptions__Output {
  'codePath': (string);
  'allowMultiLineAutocomplete': (boolean);
  'codeSnippetContexts': (_ai_codemaker_service_CodeSnippetContext__Output)[];
  'contextId': (string);
  'model': (string);
}
