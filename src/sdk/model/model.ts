// Copyright 2023 CodeMaker AI Inc. All rights reserved.

export type CreateProcessRequest = {
    process: Process
};

export type CreateProcessResponse = {
    id: string
};

export type GetProcessStatusRequest = {
    id: string
};

export type GetProcessStatusResponse = {
    status: Status
};

export type GetProcessOutputRequest = {
    id: string
};

export type GetProcessOutputResponse = {
    output: Output
};

export type Process = {
    mode: Mode,
    language: Language,
    input: Input,
    options: Options,
};

export type Input = {
    readonly source: string
};

export type Output = {
    readonly source: string
};

export type Options = {
    readonly modify?: Modify;
    readonly codePath?: string;
    readonly prompt?: string
};

export enum Mode {
    code = "CODE",
    editCode = "EDIT_CODE",
    inlineCode = "INLINE_CODE",
    document = "DOCUMENT",
    unitTest = "UNIT_TEST",
    migrateSyntax = "MIGRATE_SYNTAX",
    refactorNaming = "REFACTOR_NAMING",
    completion = "COMPLETION"
}

export enum Language {
    java = "JAVA",
    javascript = "JAVASCRIPT",
    typescript = "TYPESCRIPT",
    kotlin = "KOTLIN",
    go = "GO",
    csharp = "CSHARP",
}

export enum Status {
    inProgress = "IN_PROGRESS",
    completed = "COMPLETED",
    failed = "FAILED",
    timedOut = "TIMED_OUT"
}

export enum Modify {
    none = "NONE",
    replace = "REPLACE"
}