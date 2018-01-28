import test from 'ava';
import {launch} from './launch';
import {mock, verify, instance} from 'ts-mockito';
import { Request, response } from "alexa-app/types";


test((t) => {

    t.plan(3)

    let testRequest = {};

    let testResponse = {
        say: (input) => {
            t.is(input, 'W00t launched');
            return testResponse
        },
        shouldEndSession: (shouldEnd) => {
            t.false(shouldEnd);
            return testResponse;
        }
    } as response;

    t.is(launch(testRequest, testResponse), testResponse)
    
});