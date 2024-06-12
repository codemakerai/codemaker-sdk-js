// Copyright 2023-2024 CodeMaker AI Inc. All rights reserved.

export class Config {
    readonly endpoint?: string | null = null;

    readonly maxRetries?: number | null = null;

    readonly timeoutInMillis?: number | null = null;

    readonly enableCompression?: boolean | null = null;

    readonly minimumCompressionPayloadSize?: number | null = null;
}