import test from 'ava';
import {AmazonDefault} from './amazon-default';
import { action } from '../stop/stop-action';


test((t) => {
    const stopIntent = new AmazonDefault('stop');

    const response = {};


	t.is(stopIntent.name, 'AMAZON.StopIntent');
    t.deepEqual(stopIntent.schema.slots, {});
    t.deepEqual(stopIntent.schema.utterances, [])
    t.deepEqual(stopIntent.action, action)
});

// test((t) => {
//     const stopIntent = new AmazonDefault('stop');
//     let mockRequest:Request = mock(Request);
//     let testRequest:Request = instance(mockRequest);
    
//     let mockResponse:response = mock(response);
//     let testResponse:response = instance(mockResponse);

//     t.plan(1);
//     const returnValue = stopIntent.action(testRequest, testResponse);

//     verify(returnValue.say).once;
              
// })