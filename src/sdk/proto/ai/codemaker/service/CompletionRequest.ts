// Original file: src/sdk/proto/codemakerai.proto

import type { Language as _ai_codemaker_service_Language, Language__Output as _ai_codemaker_service_Language__Output } from '../../../ai/codemaker/service/Language';
import type { Input as _ai_codemaker_service_Input, Input__Output as _ai_codemaker_service_Input__Output } from '../../../ai/codemaker/service/Input';
import type { CompletionOptions as _ai_codemaker_service_CompletionOptions, CompletionOptions__Output as _ai_codemaker_service_CompletionOptions__Output } from '../../../ai/codemaker/service/CompletionOptions';

export interface CompletionRequest {
  'language'?: (_ai_codemaker_service_Language);
  'input'?: (_ai_codemaker_service_Input | null);
  'options'?: (_ai_codemaker_service_CompletionOptions | null);
}

export interface CompletionRequest__Output {
  'language': (_ai_codemaker_service_Language__Output);
  'input': (_ai_codemaker_service_Input__Output | null);
  'options': (_ai_codemaker_service_CompletionOptions__Output | null);
}
