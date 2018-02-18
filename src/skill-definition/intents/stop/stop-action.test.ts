import { Request, request, response } from "alexa-app/types";
import test from 'ava';
import {instance, mock, verify} from 'ts-mockito';
import { PublishingInformation } from '../../../publishing-information';
import {stopAction} from './stop-action';

test((t) => {

    t.plan(3);

    const testRequest = {} as request;
    const testResponse = {
        say: (input) => {
            t.is(input, `Stopped ${PublishingInformation.APP_NAME} skill`);
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.true(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(stopAction(testRequest, testResponse), testResponse);

});
