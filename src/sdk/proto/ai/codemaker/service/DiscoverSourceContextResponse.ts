// Original file: src/sdk/proto/codemakerai.proto

import type { RequiredSourceContext as _ai_codemaker_service_RequiredSourceContext, RequiredSourceContext__Output as _ai_codemaker_service_RequiredSourceContext__Output } from '../../../ai/codemaker/service/RequiredSourceContext';

export interface DiscoverSourceContextResponse {
  'contexts'?: (_ai_codemaker_service_RequiredSourceContext)[];
  'requiresProcessing'?: (boolean);
}

export interface DiscoverSourceContextResponse__Output {
  'contexts': (_ai_codemaker_service_RequiredSourceContext__Output)[];
  'requiresProcessing': (boolean);
}
