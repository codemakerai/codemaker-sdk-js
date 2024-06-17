// Original file: src/sdk/proto/codemakerai.proto

import type { Modify as _ai_codemaker_service_Modify, Modify__Output as _ai_codemaker_service_Modify__Output } from '../../../ai/codemaker/service/Modify';
import type { IndentationCharacter as _ai_codemaker_service_IndentationCharacter, IndentationCharacter__Output as _ai_codemaker_service_IndentationCharacter__Output } from '../../../ai/codemaker/service/IndentationCharacter';
import type { Visibility as _ai_codemaker_service_Visibility, Visibility__Output as _ai_codemaker_service_Visibility__Output } from '../../../ai/codemaker/service/Visibility';

export interface ProcessOptions {
  'modify'?: (_ai_codemaker_service_Modify);
  'codePath'?: (string);
  'prompt'?: (string);
  'detectSyntaxErrors'?: (boolean);
  'contextId'?: (string);
  'model'?: (string);
  'indentationCharacter'?: (_ai_codemaker_service_IndentationCharacter);
  'overrideIndent'?: (number);
  'minimalLinesLength'?: (number);
  'visibility'?: (_ai_codemaker_service_Visibility);
}

export interface ProcessOptions__Output {
  'modify': (_ai_codemaker_service_Modify__Output);
  'codePath': (string);
  'prompt': (string);
  'detectSyntaxErrors': (boolean);
  'contextId': (string);
  'model': (string);
  'indentationCharacter': (_ai_codemaker_service_IndentationCharacter__Output);
  'overrideIndent': (number);
  'minimalLinesLength': (number);
  'visibility': (_ai_codemaker_service_Visibility__Output);
}
