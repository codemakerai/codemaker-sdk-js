import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {gzipSync, unzipSync} from 'node:zlib';
const { createHash } = require('crypto');
import {ProtoGrpcType} from "./proto/codemakerai";
import {CodemakerServiceClient} from "./proto/ai/codemaker/service/CodemakerService";
import {
    CodeSnippetContext,
    CompletionRequest,
    CompletionResponse,
    Input,
    Modify,
    PredictRequest,
    ProcessRequest,
    ProcessResponse
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
import {Output__Output as CodemakerOutput} from "./proto/ai/codemaker/service/Output";
import {Encoding as CodemakerEncoding} from "./proto/ai/codemaker/service/Encoding";
import {Modify as CodemakerModify} from "./proto/ai/codemaker/service/Modify";

export class Client {

    private static readonly endpoint = 'process.codemaker.ai';

    private static readonly protoFile = __dirname + '/proto/codemakerai.proto';

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

    private createCompletionRequest(request: CompletionRequest): CodemakerCompletionRequest {
        return {
            // @ts-ignore
            language: request.language,
            input: this.createInput(request.input),
            options: {
                codePath: request.options?.codePath,
                allowMultiLineAutocomplete: request.options?.allowMultiLineAutocomplete,
                codeSnippetContexts: this.mapCodeSnippetContexts(request.options?.codeSnippetContexts)
            }
        };
    }

    private async doCompletion(completionRequest: CodemakerCompletionRequest) {
        return new Promise<CodemakerCompletionResponse>((resolve, reject) => {
            this.client.Completion(completionRequest, this.createMetadata(), (error, resp) => {
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
                detectSyntaxErrors: request.options?.detectSyntaxErrors
            }
        };
    }

    private async doProcess(processRequest: CodemakerProcessRequest) {
        return new Promise<CodemakerProcessResponse>((resolve, reject) => {
            this.client.Process(processRequest, this.createMetadata(), (error, resp) => {
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
            input: this.createInput(request.input)
        };
    }

    private async doPredict(predictRequest: CodemakerPredictRequest) {
        return new Promise<CodemakerPredictResponse>((resolve, reject) => {
            this.client.Predict(predictRequest, this.createMetadata(), (error, resp) => {
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

    private createMetadata() {
        const metadata = new grpc.Metadata();
        metadata.set("Authorization", `Bearer ${this.apiKeyProvider()}`);
        return metadata;
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