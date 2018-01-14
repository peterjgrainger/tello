import { PublishingInformation } from "./publishing-information";
import { alexaApp } from "./skill-definition/alexa-app";

export const interactionModel = {
    interactionModel:{
        languageModel:{
            invocationName:PublishingInformation.APP_NAME,
            types:[],
            intents: Object.keys(alexaApp.intents)
                           .map(key => alexaApp.intents[key])
                           .map(intent => {
                               return {
                                   name: intent.name,
                                   slots: intent.slots,
                                   sample: intent.utterances
                               }
                           })
        }
    }
}
