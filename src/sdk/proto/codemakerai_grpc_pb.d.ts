// package: ai.codemaker.service
// file: src/sdk/proto/codemakerai.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as src_sdk_proto_codemakerai_pb from "../../../src/sdk/proto/codemakerai_pb";

interface ICodemakerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    assistantCompletion: ICodemakerServiceService_IAssistantCompletion;
    assistantCodeCompletion: ICodemakerServiceService_IAssistantCodeCompletion;
    assistantSpeech: ICodemakerServiceService_IAssistantSpeech;
    assistantSpeechStream: ICodemakerServiceService_IAssistantSpeechStream;
    registerAssistantFeedback: ICodemakerServiceService_IRegisterAssistantFeedback;
    completion: ICodemakerServiceService_ICompletion;
    process: ICodemakerServiceService_IProcess;
    predict: ICodemakerServiceService_IPredict;
    discoverContext: ICodemakerServiceService_IDiscoverContext;
    createContext: ICodemakerServiceService_ICreateContext;
    registerContext: ICodemakerServiceService_IRegisterContext;
    listModels: ICodemakerServiceService_IListModels;
}

interface ICodemakerServiceService_IAssistantCompletion extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, src_sdk_proto_codemakerai_pb.AssistantCompletionResponse> {
    path: "/ai.codemaker.service.CodemakerService/AssistantCompletion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantCompletionRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantCompletionRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantCompletionResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantCompletionResponse>;
}
interface ICodemakerServiceService_IAssistantCodeCompletion extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse> {
    path: "/ai.codemaker.service.CodemakerService/AssistantCodeCompletion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse>;
}
interface ICodemakerServiceService_IAssistantSpeech extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, src_sdk_proto_codemakerai_pb.AssistantSpeechResponse> {
    path: "/ai.codemaker.service.CodemakerService/AssistantSpeech";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
}
interface ICodemakerServiceService_IAssistantSpeechStream extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, src_sdk_proto_codemakerai_pb.AssistantSpeechResponse> {
    path: "/ai.codemaker.service.CodemakerService/AssistantSpeechStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
}
interface ICodemakerServiceService_IRegisterAssistantFeedback extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse> {
    path: "/ai.codemaker.service.CodemakerService/RegisterAssistantFeedback";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse>;
}
interface ICodemakerServiceService_ICompletion extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.CompletionRequest, src_sdk_proto_codemakerai_pb.CompletionResponse> {
    path: "/ai.codemaker.service.CodemakerService/Completion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.CompletionRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.CompletionRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.CompletionResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.CompletionResponse>;
}
interface ICodemakerServiceService_IProcess extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.ProcessRequest, src_sdk_proto_codemakerai_pb.ProcessResponse> {
    path: "/ai.codemaker.service.CodemakerService/Process";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.ProcessRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.ProcessRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.ProcessResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.ProcessResponse>;
}
interface ICodemakerServiceService_IPredict extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.PredictRequest, src_sdk_proto_codemakerai_pb.PredictResponse> {
    path: "/ai.codemaker.service.CodemakerService/Predict";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.PredictRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.PredictRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.PredictResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.PredictResponse>;
}
interface ICodemakerServiceService_IDiscoverContext extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse> {
    path: "/ai.codemaker.service.CodemakerService/DiscoverContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse>;
}
interface ICodemakerServiceService_ICreateContext extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, src_sdk_proto_codemakerai_pb.CreateSourceContextResponse> {
    path: "/ai.codemaker.service.CodemakerService/CreateContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.CreateSourceContextRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.CreateSourceContextRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.CreateSourceContextResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.CreateSourceContextResponse>;
}
interface ICodemakerServiceService_IRegisterContext extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse> {
    path: "/ai.codemaker.service.CodemakerService/RegisterContext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse>;
}
interface ICodemakerServiceService_IListModels extends grpc.MethodDefinition<src_sdk_proto_codemakerai_pb.ListModelsRequest, src_sdk_proto_codemakerai_pb.ListModelsResponse> {
    path: "/ai.codemaker.service.CodemakerService/ListModels";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.ListModelsRequest>;
    requestDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.ListModelsRequest>;
    responseSerialize: grpc.serialize<src_sdk_proto_codemakerai_pb.ListModelsResponse>;
    responseDeserialize: grpc.deserialize<src_sdk_proto_codemakerai_pb.ListModelsResponse>;
}

export const CodemakerServiceService: ICodemakerServiceService;

export interface ICodemakerServiceServer extends grpc.UntypedServiceImplementation {
    assistantCompletion: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, src_sdk_proto_codemakerai_pb.AssistantCompletionResponse>;
    assistantCodeCompletion: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse>;
    assistantSpeech: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    assistantSpeechStream: grpc.handleServerStreamingCall<src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    registerAssistantFeedback: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse>;
    completion: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.CompletionRequest, src_sdk_proto_codemakerai_pb.CompletionResponse>;
    process: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.ProcessRequest, src_sdk_proto_codemakerai_pb.ProcessResponse>;
    predict: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.PredictRequest, src_sdk_proto_codemakerai_pb.PredictResponse>;
    discoverContext: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse>;
    createContext: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, src_sdk_proto_codemakerai_pb.CreateSourceContextResponse>;
    registerContext: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse>;
    listModels: grpc.handleUnaryCall<src_sdk_proto_codemakerai_pb.ListModelsRequest, src_sdk_proto_codemakerai_pb.ListModelsResponse>;
}

export interface ICodemakerServiceClient {
    assistantCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCompletionResponse) => void): grpc.ClientUnaryCall;
    assistantCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCompletionResponse) => void): grpc.ClientUnaryCall;
    assistantCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCompletionResponse) => void): grpc.ClientUnaryCall;
    assistantCodeCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse) => void): grpc.ClientUnaryCall;
    assistantCodeCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse) => void): grpc.ClientUnaryCall;
    assistantCodeCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse) => void): grpc.ClientUnaryCall;
    assistantSpeech(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse) => void): grpc.ClientUnaryCall;
    assistantSpeech(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse) => void): grpc.ClientUnaryCall;
    assistantSpeech(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse) => void): grpc.ClientUnaryCall;
    assistantSpeechStream(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    assistantSpeechStream(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    registerAssistantFeedback(request: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse) => void): grpc.ClientUnaryCall;
    registerAssistantFeedback(request: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse) => void): grpc.ClientUnaryCall;
    registerAssistantFeedback(request: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse) => void): grpc.ClientUnaryCall;
    completion(request: src_sdk_proto_codemakerai_pb.CompletionRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CompletionResponse) => void): grpc.ClientUnaryCall;
    completion(request: src_sdk_proto_codemakerai_pb.CompletionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CompletionResponse) => void): grpc.ClientUnaryCall;
    completion(request: src_sdk_proto_codemakerai_pb.CompletionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CompletionResponse) => void): grpc.ClientUnaryCall;
    process(request: src_sdk_proto_codemakerai_pb.ProcessRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ProcessResponse) => void): grpc.ClientUnaryCall;
    process(request: src_sdk_proto_codemakerai_pb.ProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ProcessResponse) => void): grpc.ClientUnaryCall;
    process(request: src_sdk_proto_codemakerai_pb.ProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ProcessResponse) => void): grpc.ClientUnaryCall;
    predict(request: src_sdk_proto_codemakerai_pb.PredictRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    predict(request: src_sdk_proto_codemakerai_pb.PredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    predict(request: src_sdk_proto_codemakerai_pb.PredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    discoverContext(request: src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse) => void): grpc.ClientUnaryCall;
    discoverContext(request: src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse) => void): grpc.ClientUnaryCall;
    discoverContext(request: src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse) => void): grpc.ClientUnaryCall;
    createContext(request: src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CreateSourceContextResponse) => void): grpc.ClientUnaryCall;
    createContext(request: src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CreateSourceContextResponse) => void): grpc.ClientUnaryCall;
    createContext(request: src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CreateSourceContextResponse) => void): grpc.ClientUnaryCall;
    registerContext(request: src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse) => void): grpc.ClientUnaryCall;
    registerContext(request: src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse) => void): grpc.ClientUnaryCall;
    registerContext(request: src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse) => void): grpc.ClientUnaryCall;
    listModels(request: src_sdk_proto_codemakerai_pb.ListModelsRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    listModels(request: src_sdk_proto_codemakerai_pb.ListModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    listModels(request: src_sdk_proto_codemakerai_pb.ListModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
}

export class CodemakerServiceClient extends grpc.Client implements ICodemakerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public assistantCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCompletionResponse) => void): grpc.ClientUnaryCall;
    public assistantCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCompletionResponse) => void): grpc.ClientUnaryCall;
    public assistantCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCompletionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCompletionResponse) => void): grpc.ClientUnaryCall;
    public assistantCodeCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse) => void): grpc.ClientUnaryCall;
    public assistantCodeCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse) => void): grpc.ClientUnaryCall;
    public assistantCodeCompletion(request: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantCodeCompletionResponse) => void): grpc.ClientUnaryCall;
    public assistantSpeech(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse) => void): grpc.ClientUnaryCall;
    public assistantSpeech(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse) => void): grpc.ClientUnaryCall;
    public assistantSpeech(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.AssistantSpeechResponse) => void): grpc.ClientUnaryCall;
    public assistantSpeechStream(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    public assistantSpeechStream(request: src_sdk_proto_codemakerai_pb.AssistantSpeechRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_sdk_proto_codemakerai_pb.AssistantSpeechResponse>;
    public registerAssistantFeedback(request: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse) => void): grpc.ClientUnaryCall;
    public registerAssistantFeedback(request: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse) => void): grpc.ClientUnaryCall;
    public registerAssistantFeedback(request: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterAssistantFeedbackResponse) => void): grpc.ClientUnaryCall;
    public completion(request: src_sdk_proto_codemakerai_pb.CompletionRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CompletionResponse) => void): grpc.ClientUnaryCall;
    public completion(request: src_sdk_proto_codemakerai_pb.CompletionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CompletionResponse) => void): grpc.ClientUnaryCall;
    public completion(request: src_sdk_proto_codemakerai_pb.CompletionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CompletionResponse) => void): grpc.ClientUnaryCall;
    public process(request: src_sdk_proto_codemakerai_pb.ProcessRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ProcessResponse) => void): grpc.ClientUnaryCall;
    public process(request: src_sdk_proto_codemakerai_pb.ProcessRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ProcessResponse) => void): grpc.ClientUnaryCall;
    public process(request: src_sdk_proto_codemakerai_pb.ProcessRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ProcessResponse) => void): grpc.ClientUnaryCall;
    public predict(request: src_sdk_proto_codemakerai_pb.PredictRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public predict(request: src_sdk_proto_codemakerai_pb.PredictRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public predict(request: src_sdk_proto_codemakerai_pb.PredictRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.PredictResponse) => void): grpc.ClientUnaryCall;
    public discoverContext(request: src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse) => void): grpc.ClientUnaryCall;
    public discoverContext(request: src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse) => void): grpc.ClientUnaryCall;
    public discoverContext(request: src_sdk_proto_codemakerai_pb.DiscoverSourceContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.DiscoverSourceContextResponse) => void): grpc.ClientUnaryCall;
    public createContext(request: src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CreateSourceContextResponse) => void): grpc.ClientUnaryCall;
    public createContext(request: src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CreateSourceContextResponse) => void): grpc.ClientUnaryCall;
    public createContext(request: src_sdk_proto_codemakerai_pb.CreateSourceContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.CreateSourceContextResponse) => void): grpc.ClientUnaryCall;
    public registerContext(request: src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse) => void): grpc.ClientUnaryCall;
    public registerContext(request: src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse) => void): grpc.ClientUnaryCall;
    public registerContext(request: src_sdk_proto_codemakerai_pb.RegisterSourceContextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.RegisterSourceContextResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: src_sdk_proto_codemakerai_pb.ListModelsRequest, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: src_sdk_proto_codemakerai_pb.ListModelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
    public listModels(request: src_sdk_proto_codemakerai_pb.ListModelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_sdk_proto_codemakerai_pb.ListModelsResponse) => void): grpc.ClientUnaryCall;
}
