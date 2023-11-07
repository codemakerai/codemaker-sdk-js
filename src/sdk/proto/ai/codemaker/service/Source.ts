// Original file: src/sdk/proto/codemakerai.proto

import type { Encoding as _ai_codemaker_service_Encoding, Encoding__Output as _ai_codemaker_service_Encoding__Output } from '../../../ai/codemaker/service/Encoding';

export interface Source {
  'content'?: (Buffer | Uint8Array | string);
  'encoding'?: (_ai_codemaker_service_Encoding);
  'checksum'?: (string);
}

export interface Source__Output {
  'content': (Buffer);
  'encoding': (_ai_codemaker_service_Encoding__Output);
  'checksum': (string);
}
