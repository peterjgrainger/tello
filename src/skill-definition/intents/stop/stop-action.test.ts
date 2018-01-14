import test from 'ava';
import {stopAction} from './stop-action';
import {mock, verify, instance} from 'ts-mockito';
import { Request, response } from "alexa-app/types";


test((t) => {

    t.plan(3)

    let testRequest = {};
    let testResponse = {
        say: (input) => {
            t.is(input, 'Stopped.');
            return testResponse
        },
        shouldEndSession: (shouldEnd) => {
            t.true(shouldEnd);
            return testResponse;
        }
    } as response;

    t.is(stopAction(testRequest, testResponse), testResponse)
    
});