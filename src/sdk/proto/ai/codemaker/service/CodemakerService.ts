// Original file: src/sdk/proto/codemakerai.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AssistantCodeCompletionRequest as _ai_codemaker_service_AssistantCodeCompletionRequest, AssistantCodeCompletionRequest__Output as _ai_codemaker_service_AssistantCodeCompletionRequest__Output } from '../../../ai/codemaker/service/AssistantCodeCompletionRequest';
import type { AssistantCodeCompletionResponse as _ai_codemaker_service_AssistantCodeCompletionResponse, AssistantCodeCompletionResponse__Output as _ai_codemaker_service_AssistantCodeCompletionResponse__Output } from '../../../ai/codemaker/service/AssistantCodeCompletionResponse';
import type { AssistantCompletionRequest as _ai_codemaker_service_AssistantCompletionRequest, AssistantCompletionRequest__Output as _ai_codemaker_service_AssistantCompletionRequest__Output } from '../../../ai/codemaker/service/AssistantCompletionRequest';
import type { AssistantCompletionResponse as _ai_codemaker_service_AssistantCompletionResponse, AssistantCompletionResponse__Output as _ai_codemaker_service_AssistantCompletionResponse__Output } from '../../../ai/codemaker/service/AssistantCompletionResponse';
import type { CompletionRequest as _ai_codemaker_service_CompletionRequest, CompletionRequest__Output as _ai_codemaker_service_CompletionRequest__Output } from '../../../ai/codemaker/service/CompletionRequest';
import type { CompletionResponse as _ai_codemaker_service_CompletionResponse, CompletionResponse__Output as _ai_codemaker_service_CompletionResponse__Output } from '../../../ai/codemaker/service/CompletionResponse';
import type { CreateSourceContextRequest as _ai_codemaker_service_CreateSourceContextRequest, CreateSourceContextRequest__Output as _ai_codemaker_service_CreateSourceContextRequest__Output } from '../../../ai/codemaker/service/CreateSourceContextRequest';
import type { CreateSourceContextResponse as _ai_codemaker_service_CreateSourceContextResponse, CreateSourceContextResponse__Output as _ai_codemaker_service_CreateSourceContextResponse__Output } from '../../../ai/codemaker/service/CreateSourceContextResponse';
import type { DiscoverSourceContextRequest as _ai_codemaker_service_DiscoverSourceContextRequest, DiscoverSourceContextRequest__Output as _ai_codemaker_service_DiscoverSourceContextRequest__Output } from '../../../ai/codemaker/service/DiscoverSourceContextRequest';
import type { DiscoverSourceContextResponse as _ai_codemaker_service_DiscoverSourceContextResponse, DiscoverSourceContextResponse__Output as _ai_codemaker_service_DiscoverSourceContextResponse__Output } from '../../../ai/codemaker/service/DiscoverSourceContextResponse';
import type { PredictRequest as _ai_codemaker_service_PredictRequest, PredictRequest__Output as _ai_codemaker_service_PredictRequest__Output } from '../../../ai/codemaker/service/PredictRequest';
import type { PredictResponse as _ai_codemaker_service_PredictResponse, PredictResponse__Output as _ai_codemaker_service_PredictResponse__Output } from '../../../ai/codemaker/service/PredictResponse';
import type { ProcessRequest as _ai_codemaker_service_ProcessRequest, ProcessRequest__Output as _ai_codemaker_service_ProcessRequest__Output } from '../../../ai/codemaker/service/ProcessRequest';
import type { ProcessResponse as _ai_codemaker_service_ProcessResponse, ProcessResponse__Output as _ai_codemaker_service_ProcessResponse__Output } from '../../../ai/codemaker/service/ProcessResponse';
import type { RegisterSourceContextRequest as _ai_codemaker_service_RegisterSourceContextRequest, RegisterSourceContextRequest__Output as _ai_codemaker_service_RegisterSourceContextRequest__Output } from '../../../ai/codemaker/service/RegisterSourceContextRequest';
import type { RegisterSourceContextResponse as _ai_codemaker_service_RegisterSourceContextResponse, RegisterSourceContextResponse__Output as _ai_codemaker_service_RegisterSourceContextResponse__Output } from '../../../ai/codemaker/service/RegisterSourceContextResponse';

export interface CodemakerServiceClient extends grpc.Client {
  AssistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  AssistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  AssistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  AssistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCodeCompletion(argument: _ai_codemaker_service_AssistantCodeCompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCodeCompletionResponse__Output>): grpc.ClientUnaryCall;
  
  AssistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  AssistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  AssistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  AssistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  assistantCompletion(argument: _ai_codemaker_service_AssistantCompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_AssistantCompletionResponse__Output>): grpc.ClientUnaryCall;
  
  Completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  Completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  Completion(argument: _ai_codemaker_service_CompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  Completion(argument: _ai_codemaker_service_CompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  
  CreateContext(argument: _ai_codemaker_service_CreateSourceContextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  CreateContext(argument: _ai_codemaker_service_CreateSourceContextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  CreateContext(argument: _ai_codemaker_service_CreateSourceContextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  CreateContext(argument: _ai_codemaker_service_CreateSourceContextRequest, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  createContext(argument: _ai_codemaker_service_CreateSourceContextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  createContext(argument: _ai_codemaker_service_CreateSourceContextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  createContext(argument: _ai_codemaker_service_CreateSourceContextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  createContext(argument: _ai_codemaker_service_CreateSourceContextRequest, callback: grpc.requestCallback<_ai_codemaker_service_CreateSourceContextResponse__Output>): grpc.ClientUnaryCall;
  
  DiscoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  DiscoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  DiscoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  DiscoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  discoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  discoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  discoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  discoverContext(argument: _ai_codemaker_service_DiscoverSourceContextRequest, callback: grpc.requestCallback<_ai_codemaker_service_DiscoverSourceContextResponse__Output>): grpc.ClientUnaryCall;
  
  Predict(argument: _ai_codemaker_service_PredictRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  Predict(argument: _ai_codemaker_service_PredictRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  Predict(argument: _ai_codemaker_service_PredictRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  Predict(argument: _ai_codemaker_service_PredictRequest, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  predict(argument: _ai_codemaker_service_PredictRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  predict(argument: _ai_codemaker_service_PredictRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  predict(argument: _ai_codemaker_service_PredictRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  predict(argument: _ai_codemaker_service_PredictRequest, callback: grpc.requestCallback<_ai_codemaker_service_PredictResponse__Output>): grpc.ClientUnaryCall;
  
  Process(argument: _ai_codemaker_service_ProcessRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  Process(argument: _ai_codemaker_service_ProcessRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  Process(argument: _ai_codemaker_service_ProcessRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  Process(argument: _ai_codemaker_service_ProcessRequest, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  process(argument: _ai_codemaker_service_ProcessRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  process(argument: _ai_codemaker_service_ProcessRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  process(argument: _ai_codemaker_service_ProcessRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  process(argument: _ai_codemaker_service_ProcessRequest, callback: grpc.requestCallback<_ai_codemaker_service_ProcessResponse__Output>): grpc.ClientUnaryCall;
  
  RegisterContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  RegisterContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  RegisterContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  RegisterContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  registerContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  registerContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  registerContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  registerContext(argument: _ai_codemaker_service_RegisterSourceContextRequest, callback: grpc.requestCallback<_ai_codemaker_service_RegisterSourceContextResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CodemakerServiceHandlers extends grpc.UntypedServiceImplementation {
  AssistantCodeCompletion: grpc.handleUnaryCall<_ai_codemaker_service_AssistantCodeCompletionRequest__Output, _ai_codemaker_service_AssistantCodeCompletionResponse>;
  
  AssistantCompletion: grpc.handleUnaryCall<_ai_codemaker_service_AssistantCompletionRequest__Output, _ai_codemaker_service_AssistantCompletionResponse>;
  
  Completion: grpc.handleUnaryCall<_ai_codemaker_service_CompletionRequest__Output, _ai_codemaker_service_CompletionResponse>;
  
  CreateContext: grpc.handleUnaryCall<_ai_codemaker_service_CreateSourceContextRequest__Output, _ai_codemaker_service_CreateSourceContextResponse>;
  
  DiscoverContext: grpc.handleUnaryCall<_ai_codemaker_service_DiscoverSourceContextRequest__Output, _ai_codemaker_service_DiscoverSourceContextResponse>;
  
  Predict: grpc.handleUnaryCall<_ai_codemaker_service_PredictRequest__Output, _ai_codemaker_service_PredictResponse>;
  
  Process: grpc.handleUnaryCall<_ai_codemaker_service_ProcessRequest__Output, _ai_codemaker_service_ProcessResponse>;
  
  RegisterContext: grpc.handleUnaryCall<_ai_codemaker_service_RegisterSourceContextRequest__Output, _ai_codemaker_service_RegisterSourceContextResponse>;
  
}

export interface CodemakerServiceDefinition extends grpc.ServiceDefinition {
  AssistantCodeCompletion: MethodDefinition<_ai_codemaker_service_AssistantCodeCompletionRequest, _ai_codemaker_service_AssistantCodeCompletionResponse, _ai_codemaker_service_AssistantCodeCompletionRequest__Output, _ai_codemaker_service_AssistantCodeCompletionResponse__Output>
  AssistantCompletion: MethodDefinition<_ai_codemaker_service_AssistantCompletionRequest, _ai_codemaker_service_AssistantCompletionResponse, _ai_codemaker_service_AssistantCompletionRequest__Output, _ai_codemaker_service_AssistantCompletionResponse__Output>
  Completion: MethodDefinition<_ai_codemaker_service_CompletionRequest, _ai_codemaker_service_CompletionResponse, _ai_codemaker_service_CompletionRequest__Output, _ai_codemaker_service_CompletionResponse__Output>
  CreateContext: MethodDefinition<_ai_codemaker_service_CreateSourceContextRequest, _ai_codemaker_service_CreateSourceContextResponse, _ai_codemaker_service_CreateSourceContextRequest__Output, _ai_codemaker_service_CreateSourceContextResponse__Output>
  DiscoverContext: MethodDefinition<_ai_codemaker_service_DiscoverSourceContextRequest, _ai_codemaker_service_DiscoverSourceContextResponse, _ai_codemaker_service_DiscoverSourceContextRequest__Output, _ai_codemaker_service_DiscoverSourceContextResponse__Output>
  Predict: MethodDefinition<_ai_codemaker_service_PredictRequest, _ai_codemaker_service_PredictResponse, _ai_codemaker_service_PredictRequest__Output, _ai_codemaker_service_PredictResponse__Output>
  Process: MethodDefinition<_ai_codemaker_service_ProcessRequest, _ai_codemaker_service_ProcessResponse, _ai_codemaker_service_ProcessRequest__Output, _ai_codemaker_service_ProcessResponse__Output>
  RegisterContext: MethodDefinition<_ai_codemaker_service_RegisterSourceContextRequest, _ai_codemaker_service_RegisterSourceContextResponse, _ai_codemaker_service_RegisterSourceContextRequest__Output, _ai_codemaker_service_RegisterSourceContextResponse__Output>
}
