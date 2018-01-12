import test from 'ava';
import {action} from './stop-action';
import {mock, verify, instance} from 'ts-mockito';
import { Request, response } from "alexa-app/types";


test((t) => {

    t.plan(2)

    const stopAction = action
    let testRequest = {};
    let testResponse = {
        say: (input) => {
            t.is(input, 'Stopped.');
            return testResponse
        }
    } as response;

    t.is(stopAction(testRequest, testResponse), testResponse)
    
});