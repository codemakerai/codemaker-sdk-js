// Original file: src/sdk/proto/codemakerai.proto

import type { LanguageCode as _ai_codemaker_service_LanguageCode, LanguageCode__Output as _ai_codemaker_service_LanguageCode__Output } from '../../../ai/codemaker/service/LanguageCode';

export interface AssistantCodeCompletionOptions {
  'contextId'?: (string);
  'model'?: (string);
  'language'?: (_ai_codemaker_service_LanguageCode);
}

export interface AssistantCodeCompletionOptions__Output {
  'contextId': (string);
  'model': (string);
  'language': (_ai_codemaker_service_LanguageCode__Output);
}
