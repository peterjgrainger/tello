import { Schema } from "./schema";
import {Request, response} from 'alexa-app/types'

export interface IntentDefinition {
    name: string;
    schema: Schema
    action(request:Request, response:response): response
}