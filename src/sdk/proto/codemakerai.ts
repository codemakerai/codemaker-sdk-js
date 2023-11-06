import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { CodemakerServiceClient as _ai_codemaker_service_CodemakerServiceClient, CodemakerServiceDefinition as _ai_codemaker_service_CodemakerServiceDefinition } from './ai/codemaker/service/CodemakerService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ai: {
    codemaker: {
      service: {
        CodeSnippetContext: MessageTypeDefinition
        CodemakerService: SubtypeConstructor<typeof grpc.Client, _ai_codemaker_service_CodemakerServiceClient> & { service: _ai_codemaker_service_CodemakerServiceDefinition }
        CompletionOptions: MessageTypeDefinition
        CompletionRequest: MessageTypeDefinition
        CompletionResponse: MessageTypeDefinition
        Encoding: EnumTypeDefinition
        Input: MessageTypeDefinition
        Language: EnumTypeDefinition
        Mode: EnumTypeDefinition
        Modify: EnumTypeDefinition
        Output: MessageTypeDefinition
        PredictRequest: MessageTypeDefinition
        PredictResponse: MessageTypeDefinition
        ProcessOptions: MessageTypeDefinition
        ProcessRequest: MessageTypeDefinition
        ProcessResponse: MessageTypeDefinition
        Source: MessageTypeDefinition
      }
    }
  }
}

