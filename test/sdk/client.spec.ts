// Copyright 2023 CodeMaker AI Inc. All rights reserved.

import {assert} from 'chai';
import { Client } from "../../src/sdk/client";
import axios from "axios";
import sinon from "sinon";

describe('Client', () => {
    const axiosMock = sinon.mock(axios);
    let client: Client | null = null;

    beforeEach(() => {
        client = new Client(() => "test_api_key");
    });

    describe('create', () => {
        it('should create new client task', () => {

            // then
            assert.isNotNull(client);
        });
    });
});