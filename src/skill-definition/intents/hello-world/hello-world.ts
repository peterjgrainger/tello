import { Request, response } from "alexa-app/types";
import { IntentDefinition } from "../../models/intents/intent-definition";
import { Schema } from "../../models/intents/schema";

export class HelloWorld implements IntentDefinition{
    name = 'HelloWorld';
    schema = new Schema([
        'Hello world'
    ]);
    action = (request: Request, response: response) => 
        response.say('Hello World').shouldEndSession(true);
}