// Original file: src/proto/codemakerai.proto

import type { Mode as _ai_codemaker_service_Mode, Mode__Output as _ai_codemaker_service_Mode__Output } from '../../../ai/codemaker/service/Mode';
import type { Language as _ai_codemaker_service_Language, Language__Output as _ai_codemaker_service_Language__Output } from '../../../ai/codemaker/service/Language';
import type { Input as _ai_codemaker_service_Input, Input__Output as _ai_codemaker_service_Input__Output } from '../../../ai/codemaker/service/Input';
import type { ProcessOptions as _ai_codemaker_service_ProcessOptions, ProcessOptions__Output as _ai_codemaker_service_ProcessOptions__Output } from '../../../ai/codemaker/service/ProcessOptions';

export interface ProcessRequest {
  'mode'?: (_ai_codemaker_service_Mode);
  'language'?: (_ai_codemaker_service_Language);
  'input'?: (_ai_codemaker_service_Input | null);
  'options'?: (_ai_codemaker_service_ProcessOptions | null);
}

export interface ProcessRequest__Output {
  'mode': (_ai_codemaker_service_Mode__Output);
  'language': (_ai_codemaker_service_Language__Output);
  'input': (_ai_codemaker_service_Input__Output | null);
  'options': (_ai_codemaker_service_ProcessOptions__Output | null);
}
