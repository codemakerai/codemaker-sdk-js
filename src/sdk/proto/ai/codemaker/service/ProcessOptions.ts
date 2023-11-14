// Original file: src/sdk/proto/codemakerai.proto

import type { Modify as _ai_codemaker_service_Modify, Modify__Output as _ai_codemaker_service_Modify__Output } from '../../../ai/codemaker/service/Modify';

export interface ProcessOptions {
  'modify'?: (_ai_codemaker_service_Modify);
  'codePath'?: (string);
  'prompt'?: (string);
  'detectSyntaxErrors'?: (boolean);
  'contextId'?: (string);
}

export interface ProcessOptions__Output {
  'modify': (_ai_codemaker_service_Modify__Output);
  'codePath': (string);
  'prompt': (string);
  'detectSyntaxErrors': (boolean);
  'contextId': (string);
}
