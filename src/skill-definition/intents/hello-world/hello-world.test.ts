import test from 'ava';
import {HelloWorld} from './hello-world';
import {mock, verify, instance} from 'ts-mockito';
import { Request, response } from "alexa-app/types";


test((t) => {
    const helloWorld = new HelloWorld();

    t.plan(6)

    let testRequest = {};

    let testResponse = {
        say: (input) => {
            t.is(input, 'Hello World');
            return testResponse
        },
        shouldEndSession: (shouldEnd) => {
            t.true(shouldEnd);
            return testResponse;
        }
    } as response;

    t.is(helloWorld.action(testRequest, testResponse), testResponse)

    t.is(helloWorld.name, 'HelloWorld');
    t.deepEqual(helloWorld.schema().slots, {'name': 'NAME'});
    t.deepEqual(helloWorld.schema().utterances, ['I would like to say hello to the world and {-|name}', 'Can I say hello to {you|me|them}'])
    
});