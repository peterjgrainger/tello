import { Request, response } from "alexa-app/types";
import test from 'ava';
import {instance, mock, verify} from 'ts-mockito';
import {helpAction} from './help-action';

test((t) => {

    t.plan(3);

    const testRequest = {};
    const testResponse = {
        say: (input) => {
            t.is(input, 'Help text.');
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.false(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(helpAction(testRequest, testResponse), testResponse);

});
