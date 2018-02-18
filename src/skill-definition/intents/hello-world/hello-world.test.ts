import { Context, dialog, IntentRequest, LaunchRequest, request, RequestBody, response, session} from "alexa-app/types";
import test from 'ava';
import {instance, mock, verify} from 'ts-mockito';
import {HelloWorld} from './hello-world';

test((t) => {
    const helloWorld = new HelloWorld();

    t.plan(6);

    const testRequest = {
        confirmationStatus: '',
        context: {} as Context,
        data: {} as RequestBody,
        getDialog: () => ({} as dialog),
        getSession: () => ({} as session),
        hasSession: () => true,
        isAudioPlayer: () => false,
        isConfirmed: () => true,
        isPlaybackController: () => false,
        session: () => false,
        slot: () => 'person name',
        slots: {},
        type: () => "LaunchRequest",
    } as request;

    const testResponse = {
        say: (input) => {
            t.is(input, 'Hello to you person name');
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.true(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(helloWorld.action(testRequest, testResponse), testResponse);

    t.is(helloWorld.name, 'HelloWorld');
    t.deepEqual(helloWorld.schema().slots, {name: 'NAME'});
    t.deepEqual(helloWorld.schema().utterances,
                ['I would like to say hello to the world and {-|name}', 'Can I say hello to {you|me|them}']);

});
