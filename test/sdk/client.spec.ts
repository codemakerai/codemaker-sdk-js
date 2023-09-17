// Copyright 2023 CodeMaker AI Inc. All rights reserved.

import {assert} from 'chai';
import Client from "../../src/sdk/client";
import {Language, Mode} from "../../src/sdk/model/model";
import axios from "axios";
import sinon from "sinon";

describe('Client', () => {
    const axiosMock = sinon.mock(axios);
    let client: Client | null = null;

    beforeEach(() => {
        client = new Client(() => "test_api_key");
    });

    describe('CreateProcess', () => {
        it('should create new process task', () => {
            // when
            const request = {
                process: {
                    mode: Mode.code,
                    language: Language.typescript,
                    input: {
                        source: "class App {}"
                    },
                    options: {
                        prompt: "prompt"
                    }
                }
            };

            // when
            const response = client?.createProcess(request);

            // then
            assert.isNotNull(response);
        });
    });

    describe('GetProcessStatus', () => {
        it('should retrieve process task status', () => {
            // when
            const request = {
                id: "-testtask-id"
            };

            // when
            const response = client?.getProcessStatus(request);

            // then
            assert.isNotNull(response);
        });
    });

    describe('GetProcessOutput', () => {
        it('should retrieve process task output', () => {
            // when
            const request = {
                id: "-testtask-id"
            };

            // when
            const response = client?.getProcessOutput(request);

            // then
            assert.isNotNull(response);
        });
    });
});