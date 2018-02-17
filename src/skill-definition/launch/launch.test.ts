import { Request, response } from "alexa-app/types";
import test from 'ava';
import {instance, mock, verify} from 'ts-mockito';
import {launch} from './launch';

test((t) => {

    t.plan(3);

    const testRequest = {};

    const testResponse = {
        say: (input) => {
            t.is(input, 'W00t launched');
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.false(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(launch(testRequest, testResponse), testResponse);

});
