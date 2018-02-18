import { Request, request, response } from "alexa-app/types";
import test from 'ava';
import {instance, mock, verify} from 'ts-mockito';
import { PublishingInformation } from '../../../publishing-information';
import {endAction} from './end-action';

test((t) => {

    t.plan(3);

    const testRequest = {} as request;
    const testResponse = {
        say: (input) => {
            t.is(input, `Ended ${PublishingInformation.APP_NAME} skill`);
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.true(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(endAction(testRequest, testResponse), testResponse);

});
