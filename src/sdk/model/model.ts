// Copyright 2023 CodeMaker AI Inc. All rights reserved.

export type CompletionRequest = {
    language: Language;
    input: Input;
    options?: Options;
};

export type CompletionResponse = {
    output: Output;
};

export type ProcessRequest = {
    mode: Mode;
    language: Language;
    input: Input;
    options?: Options;
};

export type ProcessResponse = {
    output: Output;
};

export type PredictRequest = {
    language: Language;
    input: Input;
    options?: Options;
};

export type PredictResponse = {};

export type DiscoverContextRequest = {
    context: SourceContext;
};

export type DiscoverContextResponse = {
    requiredContexts: RequiredSourceContext[];
    requiresProcessing: boolean;
};

export type CreateContextRequest = {
};

export type CreateContextResponse = {
    id: string;
};

export type RegisterContextRequest = {
    id: string;
    contexts: SourceContext[];
};

export type RegisterContextResponse = {};

export type AssistantCompletionRequest = {
    message: string;
};

export type AssistantCompletionResponse = {
    message: string;
};

export type AssistantCodeCompletionRequest = {
    message: string;
    language: Language;
    input: Input;
    options?: Options;
};

export type AssistantCodeCompletionResponse = {
    message: string;
    output: Output;
};

export type Process = {
    mode: Mode;
    language: Language;
    input: Input;
    options?: Options;
};

export type Input = {
    readonly source: string;
};

export type Output = {
    readonly source: string;
};

export type SourceContext = {
    readonly language: Language;
    readonly input: Input;
    readonly path: string;
};

export type RequiredSourceContext = {
    readonly path: string;
};

export type CodeSnippetContext = {
    readonly language: string;
    readonly snippet: string;
    readonly relativePath: string;
    readonly score: number;
};

export type Options = {
    readonly modify?: Modify;
    readonly prompt?: string;
    readonly codePath?: string;
    readonly allowMultiLineAutocomplete?: boolean;
    readonly detectSyntaxErrors?: boolean;
    readonly codeSnippetContexts?: CodeSnippetContext[];
    readonly contextId?: string;
};

export enum Mode {
    code = "CODE",
    editCode = "EDIT_CODE",
    inlineCode = "INLINE_CODE",
    document = "DOCUMENT",
    unitTest = "UNIT_TEST",
    migrateSyntax = "MIGRATE_SYNTAX",
    refactorNaming = "REFACTOR_NAMING",
    fixSyntax = "FIX_SYNTAX",
    completion = "COMPLETION"
}

export enum Language {
    c = "C",
    cpp = "CPP",
    java = "JAVA",
    javascript = "JAVASCRIPT",
    typescript = "TYPESCRIPT",
    kotlin = "KOTLIN",
    go = "GO",
    csharp = "CSHARP",
    php = "PHP",
    rust = "RUST",
}

export enum Modify {
    none = "NONE",
    replace = "REPLACE"
}