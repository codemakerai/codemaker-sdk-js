// Original file: src/sdk/proto/codemakerai.proto

import type { AssistantCompletionOptions as _ai_codemaker_service_AssistantCompletionOptions, AssistantCompletionOptions__Output as _ai_codemaker_service_AssistantCompletionOptions__Output } from '../../../ai/codemaker/service/AssistantCompletionOptions';

export interface AssistantCompletionRequest {
  'message'?: (string);
  'options'?: (_ai_codemaker_service_AssistantCompletionOptions | null);
}

export interface AssistantCompletionRequest__Output {
  'message': (string);
  'options': (_ai_codemaker_service_AssistantCompletionOptions__Output | null);
}
