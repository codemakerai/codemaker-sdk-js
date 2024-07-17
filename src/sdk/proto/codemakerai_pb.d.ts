// package: ai.codemaker.service
// file: src/sdk/proto/codemakerai.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Source extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): Source;
    getEncoding(): Encoding;
    setEncoding(value: Encoding): Source;
    getChecksum(): string;
    setChecksum(value: string): Source;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Source.AsObject;
    static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Source;
    static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
    export type AsObject = {
        content: Uint8Array | string,
        encoding: Encoding,
        checksum: string,
    }
}

export class Input extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Source | undefined;
    setSource(value?: Source): Input;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
    export type AsObject = {
        source?: Source.AsObject,
    }
}

export class Output extends jspb.Message { 

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Source | undefined;
    setSource(value?: Source): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        source?: Source.AsObject,
    }
}

export class Metadata extends jspb.Message { 
    getPath(): string;
    setPath(value: string): Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
    export type AsObject = {
        path: string,
    }
}

export class SourceContext extends jspb.Message { 
    getLanguage(): Language;
    setLanguage(value: Language): SourceContext;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): SourceContext;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): Metadata | undefined;
    setMetadata(value?: Metadata): SourceContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceContext.AsObject;
    static toObject(includeInstance: boolean, msg: SourceContext): SourceContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceContext;
    static deserializeBinaryFromReader(message: SourceContext, reader: jspb.BinaryReader): SourceContext;
}

export namespace SourceContext {
    export type AsObject = {
        language: Language,
        input?: Input.AsObject,
        metadata?: Metadata.AsObject,
    }
}

export class RequiredSourceContext extends jspb.Message { 
    getPath(): string;
    setPath(value: string): RequiredSourceContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequiredSourceContext.AsObject;
    static toObject(includeInstance: boolean, msg: RequiredSourceContext): RequiredSourceContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequiredSourceContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequiredSourceContext;
    static deserializeBinaryFromReader(message: RequiredSourceContext, reader: jspb.BinaryReader): RequiredSourceContext;
}

export namespace RequiredSourceContext {
    export type AsObject = {
        path: string,
    }
}

export class CodeSnippetContext extends jspb.Message { 
    getLanguage(): string;
    setLanguage(value: string): CodeSnippetContext;
    getSnippet(): string;
    setSnippet(value: string): CodeSnippetContext;
    getRelativepath(): string;
    setRelativepath(value: string): CodeSnippetContext;
    getScore(): number;
    setScore(value: number): CodeSnippetContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeSnippetContext.AsObject;
    static toObject(includeInstance: boolean, msg: CodeSnippetContext): CodeSnippetContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeSnippetContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeSnippetContext;
    static deserializeBinaryFromReader(message: CodeSnippetContext, reader: jspb.BinaryReader): CodeSnippetContext;
}

export namespace CodeSnippetContext {
    export type AsObject = {
        language: string,
        snippet: string,
        relativepath: string,
        score: number,
    }
}

export class Model extends jspb.Message { 
    getId(): string;
    setId(value: string): Model;
    getName(): string;
    setName(value: string): Model;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Model.AsObject;
    static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Model;
    static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
    export type AsObject = {
        id: string,
        name: string,
    }
}

export class ProcessOptions extends jspb.Message { 
    getModify(): Modify;
    setModify(value: Modify): ProcessOptions;
    getCodepath(): string;
    setCodepath(value: string): ProcessOptions;
    getPrompt(): string;
    setPrompt(value: string): ProcessOptions;
    getDetectsyntaxerrors(): boolean;
    setDetectsyntaxerrors(value: boolean): ProcessOptions;
    getContextid(): string;
    setContextid(value: string): ProcessOptions;
    getModel(): string;
    setModel(value: string): ProcessOptions;
    getIndentationcharacter(): IndentationCharacter;
    setIndentationcharacter(value: IndentationCharacter): ProcessOptions;
    getOverrideindent(): number;
    setOverrideindent(value: number): ProcessOptions;
    getMinimallineslength(): number;
    setMinimallineslength(value: number): ProcessOptions;
    getVisibility(): Visibility;
    setVisibility(value: Visibility): ProcessOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessOptions.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessOptions): ProcessOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessOptions;
    static deserializeBinaryFromReader(message: ProcessOptions, reader: jspb.BinaryReader): ProcessOptions;
}

export namespace ProcessOptions {
    export type AsObject = {
        modify: Modify,
        codepath: string,
        prompt: string,
        detectsyntaxerrors: boolean,
        contextid: string,
        model: string,
        indentationcharacter: IndentationCharacter,
        overrideindent: number,
        minimallineslength: number,
        visibility: Visibility,
    }
}

export class CompletionOptions extends jspb.Message { 
    getCodepath(): string;
    setCodepath(value: string): CompletionOptions;
    getAllowmultilineautocomplete(): boolean;
    setAllowmultilineautocomplete(value: boolean): CompletionOptions;
    clearCodesnippetcontextsList(): void;
    getCodesnippetcontextsList(): Array<CodeSnippetContext>;
    setCodesnippetcontextsList(value: Array<CodeSnippetContext>): CompletionOptions;
    addCodesnippetcontexts(value?: CodeSnippetContext, index?: number): CodeSnippetContext;
    getContextid(): string;
    setContextid(value: string): CompletionOptions;
    getModel(): string;
    setModel(value: string): CompletionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompletionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: CompletionOptions): CompletionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompletionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompletionOptions;
    static deserializeBinaryFromReader(message: CompletionOptions, reader: jspb.BinaryReader): CompletionOptions;
}

export namespace CompletionOptions {
    export type AsObject = {
        codepath: string,
        allowmultilineautocomplete: boolean,
        codesnippetcontextsList: Array<CodeSnippetContext.AsObject>,
        contextid: string,
        model: string,
    }
}

export class AssistantCompletionOptions extends jspb.Message { 
    getLanguage(): LanguageCode;
    setLanguage(value: LanguageCode): AssistantCompletionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantCompletionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantCompletionOptions): AssistantCompletionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantCompletionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantCompletionOptions;
    static deserializeBinaryFromReader(message: AssistantCompletionOptions, reader: jspb.BinaryReader): AssistantCompletionOptions;
}

export namespace AssistantCompletionOptions {
    export type AsObject = {
        language: LanguageCode,
    }
}

export class AssistantCodeCompletionOptions extends jspb.Message { 
    getContextid(): string;
    setContextid(value: string): AssistantCodeCompletionOptions;
    getModel(): string;
    setModel(value: string): AssistantCodeCompletionOptions;
    getLanguage(): LanguageCode;
    setLanguage(value: LanguageCode): AssistantCodeCompletionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantCodeCompletionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantCodeCompletionOptions): AssistantCodeCompletionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantCodeCompletionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantCodeCompletionOptions;
    static deserializeBinaryFromReader(message: AssistantCodeCompletionOptions, reader: jspb.BinaryReader): AssistantCodeCompletionOptions;
}

export namespace AssistantCodeCompletionOptions {
    export type AsObject = {
        contextid: string,
        model: string,
        language: LanguageCode,
    }
}

export class PredictionOptions extends jspb.Message { 
    getContextid(): string;
    setContextid(value: string): PredictionOptions;
    getModel(): string;
    setModel(value: string): PredictionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: PredictionOptions): PredictionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictionOptions;
    static deserializeBinaryFromReader(message: PredictionOptions, reader: jspb.BinaryReader): PredictionOptions;
}

export namespace PredictionOptions {
    export type AsObject = {
        contextid: string,
        model: string,
    }
}

export class AssistantCompletionRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AssistantCompletionRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): AssistantCompletionOptions | undefined;
    setOptions(value?: AssistantCompletionOptions): AssistantCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantCompletionRequest): AssistantCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantCompletionRequest;
    static deserializeBinaryFromReader(message: AssistantCompletionRequest, reader: jspb.BinaryReader): AssistantCompletionRequest;
}

export namespace AssistantCompletionRequest {
    export type AsObject = {
        message: string,
        options?: AssistantCompletionOptions.AsObject,
    }
}

export class AssistantCompletionResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AssistantCompletionResponse;
    getSessionid(): string;
    setSessionid(value: string): AssistantCompletionResponse;
    getMessageid(): string;
    setMessageid(value: string): AssistantCompletionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantCompletionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantCompletionResponse): AssistantCompletionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantCompletionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantCompletionResponse;
    static deserializeBinaryFromReader(message: AssistantCompletionResponse, reader: jspb.BinaryReader): AssistantCompletionResponse;
}

export namespace AssistantCompletionResponse {
    export type AsObject = {
        message: string,
        sessionid: string,
        messageid: string,
    }
}

export class AssistantCodeCompletionRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AssistantCodeCompletionRequest;
    getLanguage(): Language;
    setLanguage(value: Language): AssistantCodeCompletionRequest;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): AssistantCodeCompletionRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): AssistantCodeCompletionOptions | undefined;
    setOptions(value?: AssistantCodeCompletionOptions): AssistantCodeCompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantCodeCompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantCodeCompletionRequest): AssistantCodeCompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantCodeCompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantCodeCompletionRequest;
    static deserializeBinaryFromReader(message: AssistantCodeCompletionRequest, reader: jspb.BinaryReader): AssistantCodeCompletionRequest;
}

export namespace AssistantCodeCompletionRequest {
    export type AsObject = {
        message: string,
        language: Language,
        input?: Input.AsObject,
        options?: AssistantCodeCompletionOptions.AsObject,
    }
}

export class AssistantCodeCompletionResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AssistantCodeCompletionResponse;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Output | undefined;
    setOutput(value?: Output): AssistantCodeCompletionResponse;
    getSessionid(): string;
    setSessionid(value: string): AssistantCodeCompletionResponse;
    getMessageid(): string;
    setMessageid(value: string): AssistantCodeCompletionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantCodeCompletionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantCodeCompletionResponse): AssistantCodeCompletionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantCodeCompletionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantCodeCompletionResponse;
    static deserializeBinaryFromReader(message: AssistantCodeCompletionResponse, reader: jspb.BinaryReader): AssistantCodeCompletionResponse;
}

export namespace AssistantCodeCompletionResponse {
    export type AsObject = {
        message: string,
        output?: Output.AsObject,
        sessionid: string,
        messageid: string,
    }
}

export class AssistantSpeechRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AssistantSpeechRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantSpeechRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantSpeechRequest): AssistantSpeechRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantSpeechRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantSpeechRequest;
    static deserializeBinaryFromReader(message: AssistantSpeechRequest, reader: jspb.BinaryReader): AssistantSpeechRequest;
}

export namespace AssistantSpeechRequest {
    export type AsObject = {
        message: string,
    }
}

export class AssistantSpeechResponse extends jspb.Message { 
    getAudio(): Uint8Array | string;
    getAudio_asU8(): Uint8Array;
    getAudio_asB64(): string;
    setAudio(value: Uint8Array | string): AssistantSpeechResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssistantSpeechResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssistantSpeechResponse): AssistantSpeechResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssistantSpeechResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssistantSpeechResponse;
    static deserializeBinaryFromReader(message: AssistantSpeechResponse, reader: jspb.BinaryReader): AssistantSpeechResponse;
}

export namespace AssistantSpeechResponse {
    export type AsObject = {
        audio: Uint8Array | string,
    }
}

export class RegisterAssistantFeedbackRequest extends jspb.Message { 
    getSessionid(): string;
    setSessionid(value: string): RegisterAssistantFeedbackRequest;
    getMessageid(): string;
    setMessageid(value: string): RegisterAssistantFeedbackRequest;
    getVote(): Vote;
    setVote(value: Vote): RegisterAssistantFeedbackRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterAssistantFeedbackRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterAssistantFeedbackRequest): RegisterAssistantFeedbackRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterAssistantFeedbackRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterAssistantFeedbackRequest;
    static deserializeBinaryFromReader(message: RegisterAssistantFeedbackRequest, reader: jspb.BinaryReader): RegisterAssistantFeedbackRequest;
}

export namespace RegisterAssistantFeedbackRequest {
    export type AsObject = {
        sessionid: string,
        messageid: string,
        vote: Vote,
    }
}

export class RegisterAssistantFeedbackResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterAssistantFeedbackResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterAssistantFeedbackResponse): RegisterAssistantFeedbackResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterAssistantFeedbackResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterAssistantFeedbackResponse;
    static deserializeBinaryFromReader(message: RegisterAssistantFeedbackResponse, reader: jspb.BinaryReader): RegisterAssistantFeedbackResponse;
}

export namespace RegisterAssistantFeedbackResponse {
    export type AsObject = {
    }
}

export class CompletionRequest extends jspb.Message { 
    getLanguage(): Language;
    setLanguage(value: Language): CompletionRequest;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): CompletionRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): CompletionOptions | undefined;
    setOptions(value?: CompletionOptions): CompletionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompletionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompletionRequest): CompletionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompletionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompletionRequest;
    static deserializeBinaryFromReader(message: CompletionRequest, reader: jspb.BinaryReader): CompletionRequest;
}

export namespace CompletionRequest {
    export type AsObject = {
        language: Language,
        input?: Input.AsObject,
        options?: CompletionOptions.AsObject,
    }
}

export class CompletionResponse extends jspb.Message { 

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Output | undefined;
    setOutput(value?: Output): CompletionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompletionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CompletionResponse): CompletionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompletionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompletionResponse;
    static deserializeBinaryFromReader(message: CompletionResponse, reader: jspb.BinaryReader): CompletionResponse;
}

export namespace CompletionResponse {
    export type AsObject = {
        output?: Output.AsObject,
    }
}

export class ProcessRequest extends jspb.Message { 
    getMode(): Mode;
    setMode(value: Mode): ProcessRequest;
    getLanguage(): Language;
    setLanguage(value: Language): ProcessRequest;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): ProcessRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): ProcessOptions | undefined;
    setOptions(value?: ProcessOptions): ProcessRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessRequest): ProcessRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessRequest;
    static deserializeBinaryFromReader(message: ProcessRequest, reader: jspb.BinaryReader): ProcessRequest;
}

export namespace ProcessRequest {
    export type AsObject = {
        mode: Mode,
        language: Language,
        input?: Input.AsObject,
        options?: ProcessOptions.AsObject,
    }
}

export class ProcessResponse extends jspb.Message { 

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): Output | undefined;
    setOutput(value?: Output): ProcessResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessResponse): ProcessResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessResponse;
    static deserializeBinaryFromReader(message: ProcessResponse, reader: jspb.BinaryReader): ProcessResponse;
}

export namespace ProcessResponse {
    export type AsObject = {
        output?: Output.AsObject,
    }
}

export class PredictRequest extends jspb.Message { 
    getLanguage(): Language;
    setLanguage(value: Language): PredictRequest;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): Input | undefined;
    setInput(value?: Input): PredictRequest;

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): PredictionOptions | undefined;
    setOptions(value?: PredictionOptions): PredictRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PredictRequest): PredictRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictRequest;
    static deserializeBinaryFromReader(message: PredictRequest, reader: jspb.BinaryReader): PredictRequest;
}

export namespace PredictRequest {
    export type AsObject = {
        language: Language,
        input?: Input.AsObject,
        options?: PredictionOptions.AsObject,
    }
}

export class PredictResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredictResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PredictResponse): PredictResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredictResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredictResponse;
    static deserializeBinaryFromReader(message: PredictResponse, reader: jspb.BinaryReader): PredictResponse;
}

export namespace PredictResponse {
    export type AsObject = {
    }
}

export class DiscoverSourceContextRequest extends jspb.Message { 

    hasContext(): boolean;
    clearContext(): void;
    getContext(): SourceContext | undefined;
    setContext(value?: SourceContext): DiscoverSourceContextRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscoverSourceContextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiscoverSourceContextRequest): DiscoverSourceContextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscoverSourceContextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscoverSourceContextRequest;
    static deserializeBinaryFromReader(message: DiscoverSourceContextRequest, reader: jspb.BinaryReader): DiscoverSourceContextRequest;
}

export namespace DiscoverSourceContextRequest {
    export type AsObject = {
        context?: SourceContext.AsObject,
    }
}

export class DiscoverSourceContextResponse extends jspb.Message { 
    clearContextsList(): void;
    getContextsList(): Array<RequiredSourceContext>;
    setContextsList(value: Array<RequiredSourceContext>): DiscoverSourceContextResponse;
    addContexts(value?: RequiredSourceContext, index?: number): RequiredSourceContext;
    getRequiresprocessing(): boolean;
    setRequiresprocessing(value: boolean): DiscoverSourceContextResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscoverSourceContextResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DiscoverSourceContextResponse): DiscoverSourceContextResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscoverSourceContextResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscoverSourceContextResponse;
    static deserializeBinaryFromReader(message: DiscoverSourceContextResponse, reader: jspb.BinaryReader): DiscoverSourceContextResponse;
}

export namespace DiscoverSourceContextResponse {
    export type AsObject = {
        contextsList: Array<RequiredSourceContext.AsObject>,
        requiresprocessing: boolean,
    }
}

export class CreateSourceContextRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSourceContextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSourceContextRequest): CreateSourceContextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSourceContextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSourceContextRequest;
    static deserializeBinaryFromReader(message: CreateSourceContextRequest, reader: jspb.BinaryReader): CreateSourceContextRequest;
}

export namespace CreateSourceContextRequest {
    export type AsObject = {
    }
}

export class CreateSourceContextResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): CreateSourceContextResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSourceContextResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSourceContextResponse): CreateSourceContextResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSourceContextResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSourceContextResponse;
    static deserializeBinaryFromReader(message: CreateSourceContextResponse, reader: jspb.BinaryReader): CreateSourceContextResponse;
}

export namespace CreateSourceContextResponse {
    export type AsObject = {
        id: string,
    }
}

export class RegisterSourceContextRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): RegisterSourceContextRequest;
    clearSourcecontextsList(): void;
    getSourcecontextsList(): Array<SourceContext>;
    setSourcecontextsList(value: Array<SourceContext>): RegisterSourceContextRequest;
    addSourcecontexts(value?: SourceContext, index?: number): SourceContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSourceContextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSourceContextRequest): RegisterSourceContextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSourceContextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSourceContextRequest;
    static deserializeBinaryFromReader(message: RegisterSourceContextRequest, reader: jspb.BinaryReader): RegisterSourceContextRequest;
}

export namespace RegisterSourceContextRequest {
    export type AsObject = {
        id: string,
        sourcecontextsList: Array<SourceContext.AsObject>,
    }
}

export class RegisterSourceContextResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSourceContextResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSourceContextResponse): RegisterSourceContextResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSourceContextResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSourceContextResponse;
    static deserializeBinaryFromReader(message: RegisterSourceContextResponse, reader: jspb.BinaryReader): RegisterSourceContextResponse;
}

export namespace RegisterSourceContextResponse {
    export type AsObject = {
    }
}

export class ListModelsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
    static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
    export type AsObject = {
    }
}

export class ListModelsResponse extends jspb.Message { 
    clearModelsList(): void;
    getModelsList(): Array<Model>;
    setModelsList(value: Array<Model>): ListModelsResponse;
    addModels(value?: Model, index?: number): Model;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
    static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
    export type AsObject = {
        modelsList: Array<Model.AsObject>,
    }
}

export enum Mode {
    CODE = 0,
    INLINE_CODE = 1,
    EDIT_CODE = 2,
    DOCUMENT = 3,
    FIX_SYNTAX = 4,
}

export enum Language {
    SQL = 0,
    C = 1,
    OBJECTIVEC = 2,
    CPP = 3,
    PYTHON = 4,
    R = 5,
    HTML = 6,
    JAVA = 7,
    PHP = 8,
    JAVASCRIPT = 9,
    RUBY = 10,
    XML = 11,
    CSS = 12,
    CSHARP = 13,
    YAML = 14,
    JSON = 15,
    SCALA = 16,
    SASS = 17,
    GO = 18,
    KOTLIN = 19,
    TYPESCRIPT = 20,
    TOML = 21,
    SWIFT = 22,
    RUST = 23,
    DART = 24,
}

export enum Encoding {
    NONE = 0,
    GZIP = 1,
}

export enum Modify {
    UNMODIFIED = 0,
    REPLACE = 1,
}

export enum IndentationCharacter {
    SPACE = 0,
    TAB = 1,
}

export enum Visibility {
    ALL = 0,
    PUBLIC = 1,
}

export enum Vote {
    UP_VOTE = 0,
    DOWN_VOTE = 1,
}

export enum LanguageCode {
    UNSPECIFIED = 0,
    EN = 1,
    ES = 2,
    PT = 3,
    JA = 4,
    VI = 5,
    TR = 6,
    KO = 7,
    DE = 8,
    FR = 9,
    PL = 10,
    ZH = 11,
    IT = 12,
    ID = 13,
    NL = 14,
}
