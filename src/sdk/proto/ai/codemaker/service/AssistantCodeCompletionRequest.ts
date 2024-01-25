// Original file: src/sdk/proto/codemakerai.proto

import type { Language as _ai_codemaker_service_Language, Language__Output as _ai_codemaker_service_Language__Output } from '../../../ai/codemaker/service/Language';
import type { Input as _ai_codemaker_service_Input, Input__Output as _ai_codemaker_service_Input__Output } from '../../../ai/codemaker/service/Input';

export interface AssistantCodeCompletionRequest {
  'message'?: (string);
  'language'?: (_ai_codemaker_service_Language);
  'input'?: (_ai_codemaker_service_Input | null);
}

export interface AssistantCodeCompletionRequest__Output {
  'message': (string);
  'language': (_ai_codemaker_service_Language__Output);
  'input': (_ai_codemaker_service_Input__Output | null);
}
