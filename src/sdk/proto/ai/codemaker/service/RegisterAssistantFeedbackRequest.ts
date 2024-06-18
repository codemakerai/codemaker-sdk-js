// Original file: src/sdk/proto/codemakerai.proto

import type { Vote as _ai_codemaker_service_Vote, Vote__Output as _ai_codemaker_service_Vote__Output } from '../../../ai/codemaker/service/Vote';

export interface RegisterAssistantFeedbackRequest {
  'sessionId'?: (string);
  'messageId'?: (string);
  'vote'?: (_ai_codemaker_service_Vote);
}

export interface RegisterAssistantFeedbackRequest__Output {
  'sessionId': (string);
  'messageId': (string);
  'vote': (_ai_codemaker_service_Vote__Output);
}
