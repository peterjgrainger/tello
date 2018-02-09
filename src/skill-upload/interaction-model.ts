import { Intent } from "../skill-definition/models/intents/intent";
import { Slot } from "../skill-definition/models/slots/slot";
import {intent} from "alexa-app/types"
import * as utterances from "alexa-utterances"


export function interactionModel(intents : Array<intent>, PublishingInformation, types) {
    return {
        interactionModel: {
            languageModel: {
                invocationName: PublishingInformation.APP_NAME,
                types: types,
                intents: intents.map(singleIntent => {
                    return {
                        slots : Object.entries(singleIntent.slots)
                                      .map(slot => new Slot(slot[0], slot[1]).getInteractionDefinition()),
                        samples: singleIntent.utterances.reduce((acc, value) => acc.concat(utterances(value)),[]),
                        name: singleIntent.name
                    }
                })
            }
        }
    }
}