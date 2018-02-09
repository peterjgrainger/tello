import { request, response } from 'alexa-app/types';
import { Intent } from '../../models/intents/intent';
import { IntentDefinition } from '../../models/intents/intent-definition';

/**
 * Defines the Amazon default stop intent
 * 
 * @class StopIntent
 * @implements {IntentDefinition}
 */
export class AmazonDefault extends Intent implements IntentDefinition{
    name: string;
    action: (request: request, response:response) => response  
    
    constructor(name: string, action:(request: request, response:response) => response) {
        super();
        const titlise = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = 'AMAZON.'+titlise+'Intent';
        this.action = action;
    }
}

