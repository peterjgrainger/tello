import { Request, response } from "alexa-app/types";
import { Intent } from "../../models/intents/intent";
import { IntentDefinition } from "../../models/intents/intent-definition";
import { Slot } from "../../models/slots/slot";

/**
 * Example Intent definition showing slots.
 *
 * @class HelloWorld
 */
export class HelloWorld extends Intent implements IntentDefinition {
    public name = 'HelloWorld';
    public utterances = [
        'I would like to say hello to the world and {-|name}',
        'Can I say hello to {you|me|them}',
    ];
    public slots = [
        new Slot('name', 'NAME', ['Peter', 'Paul', 'John F. Kennedy']),
    ];
    public action = (request: Request, alexaResponse: response) =>
    alexaResponse.say('Hello World').shouldEndSession(true)
}
