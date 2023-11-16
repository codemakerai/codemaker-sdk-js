// Original file: src/sdk/proto/codemakerai.proto

import type { Language as _ai_codemaker_service_Language, Language__Output as _ai_codemaker_service_Language__Output } from '../../../ai/codemaker/service/Language';
import type { Input as _ai_codemaker_service_Input, Input__Output as _ai_codemaker_service_Input__Output } from '../../../ai/codemaker/service/Input';
import type { PredictionOptions as _ai_codemaker_service_PredictionOptions, PredictionOptions__Output as _ai_codemaker_service_PredictionOptions__Output } from '../../../ai/codemaker/service/PredictionOptions';

export interface PredictRequest {
  'language'?: (_ai_codemaker_service_Language);
  'input'?: (_ai_codemaker_service_Input | null);
  'options'?: (_ai_codemaker_service_PredictionOptions | null);
}

export interface PredictRequest__Output {
  'language': (_ai_codemaker_service_Language__Output);
  'input': (_ai_codemaker_service_Input__Output | null);
  'options': (_ai_codemaker_service_PredictionOptions__Output | null);
}
