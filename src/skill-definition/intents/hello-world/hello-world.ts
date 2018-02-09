import { Request, response } from "alexa-app/types";
import { Slot } from "../../models/slots/slot";
import { Intent } from "../../models/intents/intent";
import { IntentDefinition } from "../../models/intents/intent-definition";

export class HelloWorld extends Intent implements IntentDefinition{
    name = 'HelloWorld';
    utterances = [
        'I would like to say hello to the world and {-|name}',
        'Can I say hello to {you|me|them}'
    ];
    slots = [
        new Slot('name', 'NAME', ['Peter', 'Paul', 'John F. Kennedy'])
    ];
    action = (request: Request, response: response) => 
        response.say('Hello World').shouldEndSession(true);
}