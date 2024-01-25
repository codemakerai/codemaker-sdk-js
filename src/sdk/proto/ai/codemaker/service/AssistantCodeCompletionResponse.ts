// Original file: src/sdk/proto/codemakerai.proto

import type { Output as _ai_codemaker_service_Output, Output__Output as _ai_codemaker_service_Output__Output } from '../../../ai/codemaker/service/Output';

export interface AssistantCodeCompletionResponse {
  'message'?: (string);
  'output'?: (_ai_codemaker_service_Output | null);
}

export interface AssistantCodeCompletionResponse__Output {
  'message': (string);
  'output': (_ai_codemaker_service_Output__Output | null);
}
