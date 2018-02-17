import {intent} from "alexa-app/types";
import * as utterances from "alexa-utterances";
import { Intent } from "../skill-definition/models/intents/intent";
import { Slot } from "../skill-definition/models/slots/slot";

export function interactionModel(intents: intent[], PublishingInformation, types) {
    return {
        interactionModel: {
            languageModel: {
                intents: intents.map((singleIntent) => {
                    return {
                        name: singleIntent.name,
                        samples: singleIntent.utterances.reduce((acc, value) => acc.concat(utterances(value)), []),
                        slots : Object.entries(singleIntent.slots)
                                      .map((slot) => new Slot(slot[0], slot[1]).getInteractionDefinition()),
                    };
                }),
                invocationName: PublishingInformation.NAME,

                types,

            },
        },
    };
}
