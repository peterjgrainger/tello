import test from 'ava';
import {endAction} from './end-action';
import {mock, verify, instance} from 'ts-mockito';
import { Request, response } from "alexa-app/types";


test((t) => {

    t.plan(3)

    let testRequest = {};
    let testResponse = {
        say: (input) => {
            t.is(input, 'Ended.');
            return testResponse
        },
        shouldEndSession: (shouldEnd) => {
            t.true(shouldEnd);
            return testResponse;
        }
    } as response;

    t.is(endAction(testRequest, testResponse), testResponse)
    
});