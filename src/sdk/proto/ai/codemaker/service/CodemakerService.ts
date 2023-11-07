// Original file: src/sdk/proto/codemakerai.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CompletionRequest as _ai_codemaker_service_CompletionRequest, CompletionRequest__Output as _ai_codemaker_service_CompletionRequest__Output } from '../../../ai/codemaker/service/CompletionRequest';
import type { CompletionResponse as _ai_codemaker_service_CompletionResponse, CompletionResponse__Output as _ai_codemaker_service_CompletionResponse__Output } from '../../../ai/codemaker/service/CompletionResponse';
import type { PredictRequest as _ai_codemaker_service_PredictRequest, PredictRequest__Output as _ai_codemaker_service_PredictRequest__Output } from '../../../ai/codemaker/service/PredictRequest';
import type { PredictResponse as _ai_codemaker_service_PredictResponse, PredictResponse__Output as _ai_codemaker_service_PredictResponse__Output } from '../../../ai/codemaker/service/PredictResponse';
import type { ProcessRequest as _ai_codemaker_service_ProcessRequest, ProcessRequest__Output as _ai_codemaker_service_ProcessRequest__Output } from '../../../ai/codemaker/service/ProcessRequest';
import type { ProcessResponse as _ai_codemaker_service_ProcessResponse, ProcessResponse__Output as _ai_codemaker_service_ProcessResponse__Output } from '../../../ai/codemaker/service/ProcessResponse';

export interface CodemakerServiceClient extends grpc.Client {
  Completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  Completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  Completion(argument: _ai_codemaker_service_CompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  Completion(argument: _ai_codemaker_service_CompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  completion(argument: _ai_codemaker_service_CompletionRequest, callback: grpc.requestCallback<_ai_codemaker_service_CompletionResponse__Output>): grpc.ClientUnaryCall;
  
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
  
}

export interface CodemakerServiceHandlers extends grpc.UntypedServiceImplementation {
  Completion: grpc.handleUnaryCall<_ai_codemaker_service_CompletionRequest__Output, _ai_codemaker_service_CompletionResponse>;
  
  Predict: grpc.handleUnaryCall<_ai_codemaker_service_PredictRequest__Output, _ai_codemaker_service_PredictResponse>;
  
  Process: grpc.handleUnaryCall<_ai_codemaker_service_ProcessRequest__Output, _ai_codemaker_service_ProcessResponse>;
  
}

export interface CodemakerServiceDefinition extends grpc.ServiceDefinition {
  Completion: MethodDefinition<_ai_codemaker_service_CompletionRequest, _ai_codemaker_service_CompletionResponse, _ai_codemaker_service_CompletionRequest__Output, _ai_codemaker_service_CompletionResponse__Output>
  Predict: MethodDefinition<_ai_codemaker_service_PredictRequest, _ai_codemaker_service_PredictResponse, _ai_codemaker_service_PredictRequest__Output, _ai_codemaker_service_PredictResponse__Output>
  Process: MethodDefinition<_ai_codemaker_service_ProcessRequest, _ai_codemaker_service_ProcessResponse, _ai_codemaker_service_ProcessRequest__Output, _ai_codemaker_service_ProcessResponse__Output>
}