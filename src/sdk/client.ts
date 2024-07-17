// Copyright 2023-2024 CodeMaker AI Inc. All rights reserved.

import {EventEmitter} from 'node:events';
import * as grpc from '@grpc/grpc-js';
import {status, StatusObject} from '@grpc/grpc-js';
import {gzipSync, unzipSync} from 'node:zlib';
import {CodemakerServiceClient} from "./proto/codemakerai_grpc_pb";
import {
    AssistantCodeCompletionRequest,
    AssistantCodeCompletionResponse,
    AssistantCompletionRequest,
    AssistantCompletionResponse,
    AssistantSpeechRequest,
    AssistantSpeechResponse,
    CodeSnippetContext,
    CompletionRequest,
    CompletionResponse,
    CreateContextRequest,
    CreateContextResponse,
    DiscoverContextRequest,
    DiscoverContextResponse,
    Input,
    LanguageCode,
    Modify,
    PredictRequest,
    PredictResponse,
    ProcessRequest,
    ProcessResponse,
    RegisterAssistantFeedbackRequest,
    RegisterAssistantFeedbackResponse,
    RegisterContextRequest,
    RegisterContextResponse,
    RequiredSourceContext,
    SourceContext,
    Vote,
} from "./model/model";
import {
    AssistantCodeCompletionRequest as CodemakerAssistantCodeCompletionRequest,
    AssistantCodeCompletionResponse as CodemakerAssistantCodeCompletionResponse,
    AssistantCompletionRequest as CodemakerAssistantCompletionRequest,
    AssistantCompletionResponse as CodemakerAssistantCompletionResponse,
    AssistantSpeechRequest as CodemakerAssistantSpeechRequest,
    AssistantSpeechResponse as CodemakerAssistantSpeechResponse,
    CodeSnippetContext as CodemakerCodeSnippetContext,
    CompletionRequest as CodemakerCompletionRequest,
    CompletionResponse as CodemakerCompletionResponse,
    CreateSourceContextRequest as CodemakerCreateSourceContextRequest,
    CreateSourceContextResponse as CodemakerCreateSourceContextResponse,
    DiscoverSourceContextRequest as CodemakerDiscoverSourceContextRequest,
    DiscoverSourceContextResponse as CodemakerDiscoverSourceContextResponse,
    Encoding,
    Encoding as CodemakerEncoding,
    LanguageCode as CodemakerLanguageCode,
    Modify as CodemakerModify,
    Output as CodemakerOutput,
    PredictRequest as CodemakerPredictRequest,
    PredictResponse as CodemakerPredictResponse,
    ProcessRequest as CodemakerProcessRequest,
    ProcessResponse as CodemakerProcessResponse,
    RegisterAssistantFeedbackRequest as CodemakerRegisterAssistantFeedbackRequest,
    RegisterAssistantFeedbackResponse as CodemakerRegisterAssistantFeedbackResponse,
    RegisterSourceContextRequest as CodemakerRegisterSourceContextRequest,
    RegisterSourceContextResponse as CodemakerRegisterSourceContextResponse,
    RequiredSourceContext as CodemakerRequiredSourceContext,
    SourceContext as CodemakerSourceContext,
    Vote as CodemakerVote
} from "./proto/codemakerai_pb";
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
        const endpoint = config?.endpoint ?? Client.defaultEndpoint;
        this.maxRetries = config?.maxRetries ?? Client.defaultMaxRetries;
        this.timeoutInMillis = config?.timeoutInMillis ?? Client.defaultTimeoutInMillis;
        this.enableCompression = config?.enableCompression ?? Client.defaultEnableCompression;
        this.minimumCompressionPayloadSize = config?.minimumCompressionPayloadSize ?? Client.defaultMinimumCompressionPayloadSize;

        this.client = new CodemakerServiceClient(
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

    assistantSpeechStream(request: AssistantSpeechRequest) {
        const assistantSpeechRequest = this.createAssistantSpeechRequest(request);
        const stream = this.doAssistantSpeechStream(assistantSpeechRequest);

        const emitter = new EventEmitter();
        stream.on('data', (resp) => {
           emitter.emit('data', this.createAssistantSpeechResponse(resp));
        });
        stream.on('error', (e) => {
            emitter.emit('error', e);
        });
        stream.on('end', () => {
            emitter.emit('end');
        });
        return emitter;
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
        return this.doCall(this.client.completion, completionRequest);
    }

    private createCompletionResponse(completionResponse: CodemakerCompletionResponse): CompletionResponse {
        return {
            output: this.createOutput(completionResponse.getOutput()!)
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
        return this.doCall(this.client.process, processRequest);
    }

    private createProcessResponse(processResponse: CodemakerProcessResponse): ProcessResponse {
        return {
            output: this.createOutput(processResponse.getOutput()!)
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
        return this.doCall(this.client.predict, predictRequest);
    }

    private createPredictResponse(predictResponse: CodemakerPredictResponse): PredictResponse {
        return {};
    }

    private createDiscoverContextRequest(request: DiscoverContextRequest): CodemakerDiscoverSourceContextRequest {
        return {
            // @ts-ignore
            context: {
                language: request.context.language,
                input: this.createInput(request.context.input),
                metadata: {
                    path: request.context.path,
                }
            }
        };
    }

    private async doDiscoverContext(discoverContextRequest: CodemakerDiscoverSourceContextRequest): Promise<CodemakerDiscoverSourceContextResponse> {
        return this.doCall(this.client.discoverContext, discoverContextRequest);
    }

    private createDiscoverContextResponse(discoverContextResponse: CodemakerDiscoverSourceContextResponse): DiscoverContextResponse {
        return {
            requiredContexts: this.mapRequiredSourceContexts(discoverContextResponse.getContextsList()!),
            requiresProcessing: discoverContextResponse.getRequiresprocessing()!,
        };
    }

    private createCreateContextRequest(request: CreateContextRequest): CodemakerCreateSourceContextRequest {
        // @ts-ignore
        return {};
    }

    private async doCreateContext(createContextRequest: CodemakerCreateSourceContextRequest): Promise<CodemakerCreateSourceContextResponse> {
        return this.doCall(this.client.createContext, createContextRequest);
    }

    private createCreateContextResponse(createContextResponse: CodemakerCreateSourceContextResponse): CreateContextResponse {
        return {
            id: createContextResponse.getId()!
        };
    }

    private createRegisterContextRequest(request: RegisterContextRequest): CodemakerRegisterSourceContextRequest {
        return {
            // @ts-ignore
            id: request.id,
            sourceContexts: this.mapSourceContexts(request.contexts)
        };
    }

    private async doRegisterContext(registerContextRequest: CodemakerRegisterSourceContextRequest): Promise<CodemakerRegisterSourceContextResponse> {
        return this.doCall(this.client.registerContext, registerContextRequest);
    }

    private createRegisterContextResponse(createContextResponse: CodemakerRegisterSourceContextResponse): RegisterContextResponse {
        return {};
    }

    private createAssistantCompletionRequest(request: AssistantCompletionRequest): CodemakerAssistantCompletionRequest {
        return {
            // @ts-ignore
            message: request.message,
            options: {
                language: this.mapLanguage(request.options?.language)
            }
        };
    }

    private doAssistantCompletion(assistantCompletionRequest: CodemakerAssistantCompletionRequest): Promise<CodemakerAssistantCompletionResponse> {
        return this.doCall(this.client.assistantCompletion, assistantCompletionRequest);
    }

    private createAssistantCompletionResponse(assistantCompletionResponse: CodemakerAssistantCompletionResponse): AssistantCompletionResponse {
        return {
            sessionId: assistantCompletionResponse.getSessionid(),
            messageId: assistantCompletionResponse.getMessageid(),
            message: assistantCompletionResponse.getMessage(),
        };
    }

    private createAssistantCodeCompletionRequest(request: AssistantCodeCompletionRequest): CodemakerAssistantCodeCompletionRequest {
        return {
            // @ts-ignore
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
        return this.doCall(this.client.assistantCodeCompletion, assistantCodeCompletionRequest);
    }

    private createAssistantCodeCompletionResponse(assistantCodeCompletionResponse: CodemakerAssistantCodeCompletionResponse): AssistantCodeCompletionResponse {
        return {
            sessionId: assistantCodeCompletionResponse.getSessionid(),
            messageId: assistantCodeCompletionResponse.getMessageid(),
            message: assistantCodeCompletionResponse.getMessage(),
            output: this.createOutput(assistantCodeCompletionResponse.getOutput()!)
        };
    }

    private createAssistantSpeechRequest(request: AssistantSpeechRequest): CodemakerAssistantSpeechRequest {
        return {
            // @ts-ignore
            message: request.message,
        };
    }

    private async doAssistantSpeech(assistantSpeechRequest: CodemakerAssistantSpeechRequest): Promise<CodemakerAssistantSpeechResponse> {
        return this.doCall(this.client.assistantSpeech, assistantSpeechRequest);
    }

    private createAssistantSpeechResponse(assistantSpeechResponse: CodemakerAssistantSpeechResponse): AssistantSpeechResponse {
        return {
            // @ts-ignore
            audio: assistantSpeechResponse.getAudio()
        };
    }

    private doAssistantSpeechStream(assistantSpeechRequest: CodemakerAssistantSpeechRequest): grpc.ClientReadableStream<CodemakerAssistantSpeechResponse> {
        return this.client.assistantSpeechStream(assistantSpeechRequest, this.createMetadata(), this.createOptions());
    }

    private createRegisterAssistantFeedbackRequest(request: RegisterAssistantFeedbackRequest): CodemakerRegisterAssistantFeedbackRequest {
        return {
            // @ts-ignore
            sessionId: request.sessionId,
            messageId: request.messageId,
            vote: this.mapVote(request.vote),
        };
    }

    private doRegisterAssistantFeedback(registerAssistantFeedbackRequest: CodemakerRegisterAssistantFeedbackRequest): Promise<CodemakerRegisterAssistantFeedbackResponse> {
        return this.doCall(this.client.registerAssistantFeedback, registerAssistantFeedbackRequest);
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
        let encoding: CodemakerEncoding = CodemakerEncoding.NONE;
        let content = Buffer.from(input.source, 'utf-8');
        let checksum = this.checksum(content);

        if (this.enableCompression
            && content.length >= this.minimumCompressionPayloadSize) {
            encoding = CodemakerEncoding.GZIP;
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
        let content = Buffer.from(output.getSource()?.getContent_asB64()!, "base64");

        if (output.getSource()?.getEncoding() === Encoding.GZIP) {
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
        return modify === Modify.replace ? CodemakerModify.REPLACE : CodemakerModify.UNMODIFIED;
    }

    private mapVote(vote: Vote | undefined): CodemakerVote {
        return vote === Vote.downVote ? CodemakerVote.DOWN_VOTE : CodemakerVote.UP_VOTE;
    }

    private mapLanguage(language: LanguageCode | undefined): CodemakerLanguageCode {
        if (!language) {
            return CodemakerLanguageCode.UNSPECIFIED;
        }

        // @ts-ignore
        return Object.entries(CodemakerLanguageCode)[language.toUpperCase()];
    }

    private mapCodeSnippetContexts(codeSnippetContexts: CodeSnippetContext[] | undefined): CodemakerCodeSnippetContext[] | undefined {
        if (!codeSnippetContexts) {
            return undefined;
        }
        // @ts-ignore
        return codeSnippetContexts.map(value => ({
            language: value.language,
            snippet: value.snippet,
            relativePath: value.relativePath,
            score: value.score,
        }));
    }

    private mapRequiredSourceContexts(requiredSourceContexts: CodemakerRequiredSourceContext[]): RequiredSourceContext[] {
        return requiredSourceContexts.map(context => ({
            path: context.getPath()!
        }));
    }

    private mapSourceContexts(contexts: SourceContext[]): CodemakerSourceContext[] {
        // @ts-ignore
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

    private isRetryable(error: StatusObject & Error) {
        return error.code === status.DEADLINE_EXCEEDED;
    }
}