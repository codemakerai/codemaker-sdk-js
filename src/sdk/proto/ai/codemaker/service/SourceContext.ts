// Original file: src/sdk/proto/codemakerai.proto

import type { Language as _ai_codemaker_service_Language, Language__Output as _ai_codemaker_service_Language__Output } from '../../../ai/codemaker/service/Language';
import type { Input as _ai_codemaker_service_Input, Input__Output as _ai_codemaker_service_Input__Output } from '../../../ai/codemaker/service/Input';
import type { Metadata as _ai_codemaker_service_Metadata, Metadata__Output as _ai_codemaker_service_Metadata__Output } from '../../../ai/codemaker/service/Metadata';

export interface SourceContext {
  'language'?: (_ai_codemaker_service_Language);
  'input'?: (_ai_codemaker_service_Input | null);
  'metadata'?: (_ai_codemaker_service_Metadata | null);
}

export interface SourceContext__Output {
  'language': (_ai_codemaker_service_Language__Output);
  'input': (_ai_codemaker_service_Input__Output | null);
  'metadata': (_ai_codemaker_service_Metadata__Output | null);
}
