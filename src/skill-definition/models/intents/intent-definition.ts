import {Request, response} from 'alexa-app/types'
import { Slot } from "../../models/slots/slot";


export interface IntentDefinition {
    name: string;
    slots: Array<Slot>;
    utterances : Array<string>;
    action(request:Request, response:response): response;
    schema();
}