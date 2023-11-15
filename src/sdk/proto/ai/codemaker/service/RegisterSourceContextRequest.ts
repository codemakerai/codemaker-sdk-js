// Original file: src/sdk/proto/codemakerai.proto

import type { SourceContext as _ai_codemaker_service_SourceContext, SourceContext__Output as _ai_codemaker_service_SourceContext__Output } from '../../../ai/codemaker/service/SourceContext';

export interface RegisterSourceContextRequest {
  'id'?: (string);
  'sourceContexts'?: (_ai_codemaker_service_SourceContext)[];
}

export interface RegisterSourceContextRequest__Output {
  'id': (string);
  'sourceContexts': (_ai_codemaker_service_SourceContext__Output)[];
}
