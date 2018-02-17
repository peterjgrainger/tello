import {Request, response} from 'alexa-app/types';
import { Slot } from "../../models/slots/slot";

export interface IntentDefinition {
    name: string;
    slots: Slot[];
    utterances: string[];
    action(request: Request, response: response): response;
    schema();
}
