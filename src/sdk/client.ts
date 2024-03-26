import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {gzipSync, unzipSync} from 'node:zlib';
const { createHash } = require('crypto');
import {ProtoGrpcType} from "./proto/codemakerai";
import {CodemakerServiceClient} from "./proto/ai/codemaker/service/CodemakerService";
import {
    AssistantCodeCompletionRequest,
    AssistantCompletionRequest,
    AssistantCompletionResponse,
    AssistantCodeCompletionResponse,
    CodeSnippetContext,
    CompletionRequest,
    CompletionResponse, CreateContextRequest, CreateContextResponse,
    DiscoverContextRequest, DiscoverContextResponse,
    Input,
    Modify,
    PredictRequest,
    ProcessRequest,
    ProcessResponse, RegisterContextRequest, RegisterContextResponse, RequiredSourceContext, SourceContext,
} from "./model/model";
import {CompletionRequest as CodemakerCompletionRequest} from "./proto/ai/codemaker/service/CompletionRequest";
import {ProcessRequest as CodemakerProcessRequest} from "./proto/ai/codemaker/service/ProcessRequest";
import {PredictRequest as CodemakerPredictRequest} from "./proto/ai/codemaker/service/PredictRequest";
import {CodeSnippetContext as CodemakerCodeSnippetContext} from "./proto/ai/codemaker/service/CodeSnippetContext";
import {
    CompletionResponse__Output as CodemakerCompletionResponse
} from "./proto/ai/codemaker/service/CompletionResponse";
import {ProcessResponse__Output as CodemakerProcessResponse} from "./proto/ai/codemaker/service/ProcessResponse";
import {
    PredictResponse,
    PredictResponse__Output as CodemakerPredictResponse
} from "./proto/ai/codemaker/service/PredictResponse";
import {DiscoverSourceContextRequest as CodemakerDiscoverSourceContextRequest} from "./proto/ai/codemaker/service/DiscoverSourceContextRequest";
import {DiscoverSourceContextResponse as CodemakerDiscoverSourceContextResponse} from "./proto/ai/codemaker/service/DiscoverSourceContextResponse";
import {
    SourceContext as CodemakerSourceContext
} from "./proto/ai/codemaker/service/SourceContext";
import {
    RequiredSourceContext as CodemakerRequiredSourceContext
} from "./proto/ai/codemaker/service/RequiredSourceContext";
import {CreateSourceContextRequest as CodemakerCreateSourceContextRequest} from "./proto/ai/codemaker/service/CreateSourceContextRequest";
import {CreateSourceContextResponse as CodemakerCreateSourceContextResponse} from "./proto/ai/codemaker/service/CreateSourceContextResponse";
import {RegisterSourceContextRequest as CodemakerRegisterSourceContextRequest} from "./proto/ai/codemaker/service/RegisterSourceContextRequest";
import {RegisterSourceContextResponse as CodemakerRegisterSourceContextResponse} from "./proto/ai/codemaker/service/RegisterSourceContextResponse";
import {Output__Output as CodemakerOutput} from "./proto/ai/codemaker/service/Output";
import {Encoding as CodemakerEncoding} from "./proto/ai/codemaker/service/Encoding";
import {Modify as CodemakerModify} from "./proto/ai/codemaker/service/Modify";
import { AssistantCodeCompletionRequest as CodemakerAssistantCodeCompletionRequest } from "./proto/ai/codemaker/service/AssistantCodeCompletionRequest";
import { AssistantCodeCompletionResponse__Output as CodemakerAssistantCodeCompletionResponse } from "./proto/ai/codemaker/service/AssistantCodeCompletionResponse";
import { AssistantCompletionRequest as CodemakerAssistantCompletionRequest } from "./proto/ai/codemaker/service/AssistantCompletionRequest";
import { AssistantCompletionResponse__Output as CodemakerAssistantCompletionResponse } from "./proto/ai/codemaker/service/AssistantCompletionResponse";

export class Client {

    private static readonly endpoint = 'process.codemaker.ai';

    private static readonly protoFile = __dirname + '/proto/codemakerai.proto';

    private static readonly defaultTimeoutInMillis = 120000;

    private readonly enableCompression = true;

    private readonly minimumCompressionPayloadSize = 2048;

    private readonly client: CodemakerServiceClient;

    constructor(private readonly apiKeyProvider: () => string) {
        const proto = this.loadProtoDefinition();
        this.client = new proto.ai.codemaker.service.CodemakerService(
            Client.endpoint,
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

    private async doCompletion(completionRequest: CodemakerCompletionRequest) {
        return new Promise<CodemakerCompletionResponse>((resolve, reject) => {
            this.client.Completion(completionRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
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

    private async doProcess(processRequest: CodemakerProcessRequest) {
        return new Promise<CodemakerProcessResponse>((resolve, reject) => {
            this.client.Process(processRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
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
                contextId: request.options?.contextId
            }
        };
    }

    private async doPredict(predictRequest: CodemakerPredictRequest) {
        return new Promise<CodemakerPredictResponse>((resolve, reject) => {
            this.client.Predict(predictRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
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

    private async doDiscoverContext(discoverContextRequest: CodemakerDiscoverSourceContextRequest) {
        return new Promise<CodemakerDiscoverSourceContextResponse>((resolve, reject) => {
            this.client.DiscoverContext(discoverContextRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
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

    private async doCreateContext(createContextRequest: CodemakerCreateSourceContextRequest) {
        return new Promise<CodemakerCreateSourceContextResponse>((resolve, reject) => {
            this.client.CreateContext(createContextRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
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

    private async doRegisterContext(createContextRequest: CodemakerRegisterSourceContextRequest) {
        return new Promise<CodemakerRegisterSourceContextResponse>((resolve, reject) => {
            this.client.RegisterContext(createContextRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
    }

    private createRegisterContextResponse(createContextResponse: CodemakerRegisterSourceContextResponse): RegisterContextResponse {
        return {};
    }

    private createAssistantCompletionRequest(request: AssistantCompletionRequest): CodemakerAssistantCompletionRequest {
        return {
            message: request.message,
        };
    }

    private doAssistantCompletion(assistantCompletionRequest: CodemakerAssistantCompletionRequest) {
        return new Promise<CodemakerAssistantCompletionResponse>((resolve, reject) => {
            this.client.AssistantCompletion(assistantCompletionRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
    }

    private createAssistantCompletionResponse(assistantCompletionResponse: CodemakerAssistantCompletionResponse): AssistantCompletionResponse {
        return {
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
            }
        };
    }

    private doAssistantCodeCompletion(assistantCodeCompletionRequest: CodemakerAssistantCodeCompletionRequest) {
        return new Promise<CodemakerAssistantCodeCompletionResponse>((resolve, reject) => {
            this.client.AssistantCodeCompletion(assistantCodeCompletionRequest, this.createMetadata(), this.createOptions(), (error, resp) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(resp!);
            });
        });
    }

    private createAssistantCodeCompletionResponse(assistantCodeCompletionResponse: CodemakerAssistantCodeCompletionResponse): AssistantCodeCompletionResponse {
        return {
            message: assistantCodeCompletionResponse.message,
            output: this.createOutput(assistantCodeCompletionResponse.output!)
        };
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

    private mapCodeSnippetContexts(codeSnippetContexts: CodeSnippetContext[] | undefined): CodemakerCodeSnippetContext[] | undefined  {
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
        const deadline = new Date(Date.now() + Client.defaultTimeoutInMillis);
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
}