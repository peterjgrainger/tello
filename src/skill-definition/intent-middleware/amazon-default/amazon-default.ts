import { IntentDefinition } from '../../models/intents/intent-definition'
import { Schema } from '../../models/intents/schema';
import { request, response } from 'alexa-app/types';

/**
 * Defines the Amazon default stop intent
 * 
 * @class StopIntent
 * @implements {IntentDefinition}
 */
export class AmazonDefault implements IntentDefinition {
    name: string;
    schema = new Schema();
    action: (request: request, response:response) => response  
    
    constructor(name: string) {
        const titlise = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = 'AMAZON.'+titlise+'Intent';
        this.action = require(`../${name}/${name}-action`).action;
    }
}

