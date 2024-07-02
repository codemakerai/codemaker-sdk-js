// Copyright 2023-2024 CodeMaker AI Inc. All rights reserved.

import * as grpc from '@grpc/grpc-js';
import {status, StatusObject} from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {gzipSync, unzipSync} from 'node:zlib';
import {ProtoGrpcType} from "./proto/codemakerai";
import {CodemakerServiceClient} from "./proto/ai/codemaker/service/CodemakerService";
import {
    AssistantCodeCompletionRequest,
    AssistantCodeCompletionResponse,
    AssistantCompletionRequest,
    AssistantCompletionResponse,
    AssistantSpeechRequest,
    AssistantSpeechResponse,
    RegisterAssistantFeedbackRequest,
    RegisterAssistantFeedbackResponse,
    CodeSnippetContext,
    CompletionRequest,
    CompletionResponse,
    CreateContextRequest,
    CreateContextResponse,
    DiscoverContextRequest,
    DiscoverContextResponse,
    Input,
    Modify,
    PredictRequest,
    ProcessRequest,
    ProcessResponse,
    RegisterContextRequest,
    RegisterContextResponse,
    RequiredSourceContext,
    SourceContext,
    Vote, LanguageCode,
} from "./model/model";
import {ProcessRequest as CodemakerProcessRequest} from "./proto/ai/codemaker/service/ProcessRequest";
import {PredictRequest as CodemakerPredictRequest} from "./proto/ai/codemaker/service/PredictRequest";
import {CodeSnippetContext as CodemakerCodeSnippetContext} from "./proto/ai/codemaker/service/CodeSnippetContext";
import {CompletionRequest as CodemakerCompletionRequest} from "./proto/ai/codemaker/service/CompletionRequest";
import {
    CompletionResponse__Output as CodemakerCompletionResponse
} from "./proto/ai/codemaker/service/CompletionResponse";
import {ProcessResponse__Output as CodemakerProcessResponse} from "./proto/ai/codemaker/service/ProcessResponse";
import {
    PredictResponse,
    PredictResponse__Output as CodemakerPredictResponse
} from "./proto/ai/codemaker/service/PredictResponse";
import {
    DiscoverSourceContextRequest as CodemakerDiscoverSourceContextRequest
} from "./proto/ai/codemaker/service/DiscoverSourceContextRequest";
import {
    DiscoverSourceContextResponse as CodemakerDiscoverSourceContextResponse
} from "./proto/ai/codemaker/service/DiscoverSourceContextResponse";
import {SourceContext as CodemakerSourceContext} from "./proto/ai/codemaker/service/SourceContext";
import {
    RequiredSourceContext as CodemakerRequiredSourceContext
} from "./proto/ai/codemaker/service/RequiredSourceContext";
import {
    CreateSourceContextRequest as CodemakerCreateSourceContextRequest
} from "./proto/ai/codemaker/service/CreateSourceContextRequest";
import {
    CreateSourceContextResponse as CodemakerCreateSourceContextResponse
} from "./proto/ai/codemaker/service/CreateSourceContextResponse";
import {
    RegisterSourceContextRequest as CodemakerRegisterSourceContextRequest
} from "./proto/ai/codemaker/service/RegisterSourceContextRequest";
import {
    RegisterSourceContextResponse as CodemakerRegisterSourceContextResponse
} from "./proto/ai/codemaker/service/RegisterSourceContextResponse";
import {Output__Output as CodemakerOutput} from "./proto/ai/codemaker/service/Output";
import {Encoding as CodemakerEncoding} from "./proto/ai/codemaker/service/Encoding";
import {Modify as CodemakerModify} from "./proto/ai/codemaker/service/Modify";
import {Vote as CodemakerVote} from "./proto/ai/codemaker/service/Vote";
import {LanguageCode as CodemakerLanguageCode} from "./proto/ai/codemaker/service/LanguageCode";
import {
    AssistantCompletionRequest as CodemakerAssistantCompletionRequest
} from "./proto/ai/codemaker/service/AssistantCompletionRequest";
import {
    AssistantCompletionResponse__Output as CodemakerAssistantCompletionResponse
} from "./proto/ai/codemaker/service/AssistantCompletionResponse";
import {
    AssistantCodeCompletionRequest as CodemakerAssistantCodeCompletionRequest
} from "./proto/ai/codemaker/service/AssistantCodeCompletionRequest";
import {
    AssistantCodeCompletionResponse__Output as CodemakerAssistantCodeCompletionResponse
} from "./proto/ai/codemaker/service/AssistantCodeCompletionResponse";
import {AssistantSpeechRequest as CodemakerAssistantSpeechRequest} from "./proto/ai/codemaker/service/AssistantSpeechRequest";
import {
    AssistantSpeechResponse__Output as CodemakerAssistantSpeechResponse
} from "./proto/ai/codemaker/service/AssistantSpeechResponse";
import {
    RegisterAssistantFeedbackRequest as CodemakerRegisterAssistantFeedbackRequest
} from "./proto/ai/codemaker/service/RegisterAssistantFeedbackRequest";
import {
    RegisterAssistantFeedbackResponse__Output as CodemakerRegisterAssistantFeedbackResponse
} from "./proto/ai/codemaker/service/RegisterAssistantFeedbackResponse";
import {Config} from "./config";

const {createHash} = require('crypto');

export class Client {

    private static readonly protoFile = __dirname + '/proto/codemakerai.proto';

    private static readonly defaultEndpoint = 'process.codemaker.ai';

    private static readonly defaultTimeoutInMillis = 120000;

    private static readonly defaultMaxRetries = 5;

    private static readonly defaultEnableCompression = true;

    private static readonly defaultMinimumCompressionPayloadSize = 5;

    private readonly maxRetries;

    private readonly timeoutInMillis;

    private readonly enableCompression;

    private readonly minimumCompressionPayloadSize;

    private readonly client: CodemakerServiceClient;

    constructor(private readonly apiKeyProvider: () => string, private readonly config?: Config) {
        const proto = this.loadProtoDefinition();

        const endpoint = config?.endpoint ?? Client.defaultEndpoint;
        this.maxRetries = config?.maxRetries ?? Client.defaultMaxRetries;
        this.timeoutInMillis = config?.timeoutInMillis ?? Client.defaultTimeoutInMillis;
        this.enableCompression = config?.enableCompression ?? Client.defaultEnableCompression;
        this.minimumCompressionPayloadSize = config?.minimumCompressionPayloadSize ?? Client.defaultMinimumCompressionPayloadSize;

        this.client = new proto.ai.codemaker.service.CodemakerService(
            endpoint,
            grpc.credentials.createSsl()
        );
    }

    async completion(request: CompletionRequest) {
        const completionRequest = this.createCompletionRequest(request);
        const completionResponse = await this.doCompletion(completionRequest);
        return this.createCompletionResponse(completionResponse);
    }

    async process(request: ProcessRequest) {
        const processRequest = this.createProcessRequest(request);
        const processResponse = await this.doProcess(processRequest);
        return this.createProcessResponse(processResponse);
    }

    async prediction(request: PredictRequest) {
        const predictRequest = this.createPredictRequest(request);
        const predictResponse = await this.doPredict(predictRequest);
        return this.createPredictResponse(predictResponse);
    }

    async discoverContext(request: DiscoverContextRequest) {
        const discoverContextRequest = this.createDiscoverContextRequest(request);
        const discoverContextResponse = await this.doDiscoverContext(discoverContextRequest);
        return this.createDiscoverContextResponse(discoverContextResponse);
    }

    async createContext(request: CreateContextRequest) {
        const createContextRequest = this.createCreateContextRequest(request);
        const createContextResponse = await this.doCreateContext(createContextRequest);
        return this.createCreateContextResponse(createContextResponse);
    }

    async registerContext(request: RegisterContextRequest) {
        const registerContextRequest = this.createRegisterContextRequest(request);
        const registerContextResponse = await this.doRegisterContext(registerContextRequest);
        return this.createRegisterContextResponse(registerContextResponse);
    }

    async assistantCompletion(request: AssistantCompletionRequest) {
        const assistantCompletionRequest = this.createAssistantCompletionRequest(request);
        const assistantCompletionResponse = await this.doAssistantCompletion(assistantCompletionRequest);
        return this.createAssistantCompletionResponse(assistantCompletionResponse);
    }

    async assistantCodeCompletion(request: AssistantCodeCompletionRequest) {
        const assistantCodeCompletionRequest = this.createAssistantCodeCompletionRequest(request);
        const assistantCodeCompletionResponse = await this.doAssistantCodeCompletion(assistantCodeCompletionRequest);
        return this.createAssistantCodeCompletionResponse(assistantCodeCompletionResponse);
    }

    async assistantSpeech(request: AssistantSpeechRequest) {
        const assistantSpeechRequest = this.createAssistantSpeechRequest(request);
        const assistantSpeechResponse = await this.doAssistantSpeech(assistantSpeechRequest);
        return this.createAssistantSpeechResponse(assistantSpeechResponse);
    }

    async registerAssistantFeedback(request: RegisterAssistantFeedbackRequest) {
        const registerAssistantFeedbackRequest = this.createRegisterAssistantFeedbackRequest(request);
        const registerAssistantFeedbackResponse = await this.doRegisterAssistantFeedback(registerAssistantFeedbackRequest);
        return this.createRegisterAssistantFeedbackResponse(registerAssistantFeedbackResponse);
    }

    private createCompletionRequest(request: CompletionRequest): CodemakerCompletionRequest {
        return {
            // @ts-ignore
            language: request.language,
            input: this.createInput(request.input),
            options: {
                codePath: request.options?.codePath,
                allowMultiLineAutocomplete: request.options?.allowMultiLineAutocomplete,
                codeSnippetContexts: this.mapCodeSnippetContexts(request.options?.codeSnippetContexts),
                contextId: request.options?.contextId,
                model: request.options?.model,
            }
        };
    }

    private async doCompletion(completionRequest: CodemakerCompletionRequest): Promise<CodemakerCompletionResponse> {
        return this.doCall(this.client.Completion, completionRequest);
    }

    private createCompletionResponse(completionResponse: CodemakerCompletionResponse): CompletionResponse {
        return {
            output: this.createOutput(completionResponse.output!)
        };
    }

    private createProcessRequest(request: ProcessRequest): CodemakerProcessRequest {
        return {
            // @ts-ignore
            mode: request.mode,
            language: request.language,
            input: this.createInput(request.input),
            options: {
                modify: this.mapModify(request.options?.modify),
                codePath: request.options?.codePath,
                prompt: request.options?.prompt,
                detectSyntaxErrors: request.options?.detectSyntaxErrors,
                contextId: request.options?.contextId,
                model: request.options?.model,
            }
        };
    }

    private async doProcess(processRequest: CodemakerProcessRequest): Promise<CodemakerProcessResponse> {
        return this.doCall(this.client.Process, processRequest);
    }

    private createProcessResponse(processResponse: CodemakerProcessResponse): ProcessResponse {
        return {
            output: this.createOutput(processResponse.output!)
        };
    }

    private createPredictRequest(request: PredictRequest): CodemakerPredictRequest {
        return {
            // @ts-ignore
            language: request.language,
            input: this.createInput(request.input),
            options: {
                contextId: request.options?.contextId,
                model: request.options?.model,
            }
        };
    }

    private async doPredict(predictRequest: CodemakerPredictRequest): Promise<CodemakerPredictResponse> {
        return this.doCall(this.client.Predict, predictRequest);
    }

    private createPredictResponse(predictResponse: CodemakerPredictResponse): PredictResponse {
        return {};
    }

    private createDiscoverContextRequest(request: DiscoverContextRequest): CodemakerDiscoverSourceContextRequest {
        return {
            context: {
                // @ts-ignore
                language: request.context.language,
                input: this.createInput(request.context.input),
                metadata: {
                    path: request.context.path,
                }
            }
        };
    }

    private async doDiscoverContext(discoverContextRequest: CodemakerDiscoverSourceContextRequest): Promise<CodemakerDiscoverSourceContextResponse> {
        return this.doCall(this.client.DiscoverContext, discoverContextRequest);
    }

    private createDiscoverContextResponse(discoverContextResponse: CodemakerDiscoverSourceContextResponse): DiscoverContextResponse {
        return {
            requiredContexts: this.mapRequiredSourceContexts(discoverContextResponse.contexts!),
            requiresProcessing: discoverContextResponse.requiresProcessing!,
        };
    }

    private createCreateContextRequest(request: CreateContextRequest): CodemakerCreateSourceContextRequest {
        return {};
    }

    private async doCreateContext(createContextRequest: CodemakerCreateSourceContextRequest): Promise<CodemakerCreateSourceContextResponse> {
        return this.doCall(this.client.CreateContext, createContextRequest);
    }

    private createCreateContextResponse(createContextResponse: CodemakerCreateSourceContextResponse): CreateContextResponse {
        return {
            id: createContextResponse.id!
        };
    }

    private createRegisterContextRequest(request: RegisterContextRequest): CodemakerRegisterSourceContextRequest {
        return {
            id: request.id,
            sourceContexts: this.mapSourceContexts(request.contexts)
        };
    }

    private async doRegisterContext(registerContextRequest: CodemakerRegisterSourceContextRequest): Promise<CodemakerRegisterSourceContextResponse> {
        return this.doCall(this.client.RegisterContext, registerContextRequest);
    }

    private createRegisterContextResponse(createContextResponse: CodemakerRegisterSourceContextResponse): RegisterContextResponse {
        return {};
    }

    private createAssistantCompletionRequest(request: AssistantCompletionRequest): CodemakerAssistantCompletionRequest {
        return {
            message: request.message,
            options: {
                language: this.mapLanguage(request.options?.language)
            }
        };
    }

    private doAssistantCompletion(assistantCompletionRequest: CodemakerAssistantCompletionRequest): Promise<CodemakerAssistantCompletionResponse> {
        return this.doCall(this.client.AssistantCompletion, assistantCompletionRequest);
    }

    private createAssistantCompletionResponse(assistantCompletionResponse: CodemakerAssistantCompletionResponse): AssistantCompletionResponse {
        return {
            sessionId: assistantCompletionResponse.sessionId,
            messageId: assistantCompletionResponse.messageId,
            message: assistantCompletionResponse.message,
        };
    }

    private createAssistantCodeCompletionRequest(request: AssistantCodeCompletionRequest): CodemakerAssistantCodeCompletionRequest {
        return {
            message: request.message,
            language: request.language,
            input: this.createInput(request.input),
            options: {
                contextId: request.options?.contextId,
                model: request.options?.model,
                language: this.mapLanguage(request.options?.language)
            }
        };
    }

    private doAssistantCodeCompletion(assistantCodeCompletionRequest: CodemakerAssistantCodeCompletionRequest): Promise<CodemakerAssistantCodeCompletionResponse> {
        return this.doCall(this.client.AssistantCodeCompletion, assistantCodeCompletionRequest);
    }

    private createAssistantCodeCompletionResponse(assistantCodeCompletionResponse: CodemakerAssistantCodeCompletionResponse): AssistantCodeCompletionResponse {
        return {
            sessionId: assistantCodeCompletionResponse.sessionId,
            messageId: assistantCodeCompletionResponse.messageId,
            message: assistantCodeCompletionResponse.message,
            output: this.createOutput(assistantCodeCompletionResponse.output!)
        };
    }

    private createAssistantSpeechRequest(request: AssistantSpeechRequest): CodemakerAssistantSpeechRequest {
        return {
            message: request.message,
        };
    }

    private async doAssistantSpeech(completionRequest: CodemakerAssistantSpeechRequest): Promise<CodemakerAssistantSpeechResponse> {
        return this.doCall(this.client.AssistantSpeech, completionRequest);
    }

    private createAssistantSpeechResponse(assistantSpeechResponse: CodemakerAssistantSpeechResponse): AssistantSpeechResponse {
        return {
            audio: assistantSpeechResponse.audio
        };
    }

    private createRegisterAssistantFeedbackRequest(request: RegisterAssistantFeedbackRequest): CodemakerRegisterAssistantFeedbackResponse {
        return {
            sessionId: request.sessionId,
            messageId: request.messageId,
            vote: this.mapVote(request.vote),
        };
    }

    private doRegisterAssistantFeedback(registerAssistantFeedbackRequest: CodemakerRegisterAssistantFeedbackRequest): Promise<CodemakerRegisterAssistantFeedbackResponse> {
        return this.doCall(this.client.RegisterAssistantFeedback, registerAssistantFeedbackRequest);
    }

    private createRegisterAssistantFeedbackResponse(registerAssistantFeedbackResponse: CodemakerRegisterAssistantFeedbackResponse): RegisterAssistantFeedbackResponse {
        return {};
    }

    private doCall<TResp, TReq>(operation: (request: TReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<TResp>) => grpc.ClientUnaryCall, request: TReq) {
        const boundOperation = operation.bind(this.client);
        return new Promise<TResp>((resolve, reject) => {
            this.doRequest(boundOperation, request, resolve, reject, this.maxRetries);
        });
    }

    private doRequest<TReq, TResp>(operation: (request: TReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<TResp>) => grpc.ClientUnaryCall, request: TReq, resolve: (value: TResp | PromiseLike<TResp>) => void, reject: (reason?: any) => void, retry: number) {
        operation(request, this.createMetadata(), this.createOptions(), (error, resp) => {
            if (error) {
                if (retry <= 0 || !this.isRetryable(error)) {
                    reject(error);
                } else {
                    this.doRequest(operation, request, resolve, reject, retry - 1);
                }
            } else {
                resolve(resp!);
            }
        });
    }

    private createInput(input: Input) {
        let encoding: CodemakerEncoding = 'NONE';
        let content = Buffer.from(input.source, 'utf-8');
        let checksum = this.checksum(content);

        if (this.enableCompression
            && content.length >= this.minimumCompressionPayloadSize) {
            encoding = 'GZIP';
            content = this.compress(content);
        }

        return {
            source: {
                content: content,
                encoding: encoding,
                checksum: checksum,
            }
        };
    }

    private createOutput(output: CodemakerOutput) {
        let content = output.source?.content!;

        if (output.source?.encoding === "GZIP") {
            content = this.decompress(content);
        }
        return {
            source: content!.toString('utf-8')
        };
    }

    private compress(input: Buffer) {
        return gzipSync(input);
    }

    private decompress(input: Buffer) {
        return unzipSync(input);
    }

    private checksum(content: Buffer) {
        return createHash('sha256')
            .update(content)
            .digest('hex');
    }

    private mapModify(modify: Modify | undefined): CodemakerModify {
        if (!modify) {
            return "UNMODIFIED";
        }
        return modify === Modify.replace ? "REPLACE" : "UNMODIFIED";
    }

    private mapVote(vote: Vote | undefined): CodemakerVote {
        if (!vote) {
            return "UP_VOTE";
        }
        return vote === Vote.upVote ? "UP_VOTE" : "DOWN_VOTE";
    }

    private mapLanguage(language: LanguageCode | undefined): CodemakerLanguageCode {
        if (!language) {
            return "UNSPECIFIED";
        }

        return language;
    }

    private mapCodeSnippetContexts(codeSnippetContexts: CodeSnippetContext[] | undefined): CodemakerCodeSnippetContext[] | undefined {
        if (!codeSnippetContexts) {
            return undefined;
        }
        return codeSnippetContexts.map(value => ({
            language: value.language,
            snippet: value.snippet,
            relativePath: value.relativePath,
            score: value.score,
        }));
    }

    private mapRequiredSourceContexts(requiredSourceContexts: CodemakerRequiredSourceContext[]): RequiredSourceContext[] {
        return requiredSourceContexts.map(context => ({
            path: context.path!
        }));
    }

    private mapSourceContexts(contexts: SourceContext[]): CodemakerSourceContext[] {
        return contexts.map(context => ({
            language: context.language,
            input: this.createInput(context.input),
            metadata: {
                path: context.path
            }
        }));
    }

    private createMetadata() {
        const metadata = new grpc.Metadata();
        metadata.set("Authorization", `Bearer ${this.apiKeyProvider()}`);
        return metadata;
    }

    private createOptions() {
        const deadline = new Date(Date.now() + this.timeoutInMillis);
        return {
            deadline: deadline
        };
    }

    private loadProtoDefinition() {
        const packageDefinition = protoLoader.loadSync(Client.protoFile, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });
        return (grpc.loadPackageDefinition(packageDefinition) as any) as ProtoGrpcType;
    }

    private isRetryable(error: StatusObject & Error) {
        return error.code === status.DEADLINE_EXCEEDED;
    }
}