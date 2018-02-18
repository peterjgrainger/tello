import { request, response } from "alexa-app/types";
import { Intent } from "../../models/intents/intent";
import { IntentDefinition } from "../../models/intents/intent-definition";
import { Slot } from "../../models/slots/slot";
import { SlotType } from "../../models/slots/slot-type";
import { slotTypes } from "../../models/slots/slot-types";

/**
 * Example Intent definition showing slots.
 *
 * @class HelloWorld
 */
export class HelloWorld extends Intent implements IntentDefinition {
    // internal name of this intent
    public name = 'HelloWorld';
    // phrases that will start his intent
    public utterances = [
        'I would like to say hello to the world and {-|name}',
        'Can I say hello to {you|me|them}',
    ];
    // Dynamic words in the request
    public slots = [
        new Slot('name', slotTypes.NAME),
    ];
    public action = (alexaRequest: request, alexaResponse: response) =>
        alexaResponse.say(`Hello to you ${alexaRequest.slot(slotTypes.NAME.type)}`)
                    .shouldEndSession(true)
}
