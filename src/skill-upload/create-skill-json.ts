import { skill } from "./skill";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { interactionModel } from "./interaction-model";
import { PublishingInformation } from "../publishing-information";
import { askConfig } from "./ask-config";
import { alexaApp } from "../skill-definition/alexa-app";

if(!existsSync(`./${PublishingInformation.NAME}`)) {
    mkdirSync(`./${PublishingInformation.NAME}`)
    if(!existsSync(`./${PublishingInformation.NAME}/models/`)) {
        mkdirSync(`./${PublishingInformation.NAME}/models/`)
    }

    if(!existsSync(`./${PublishingInformation.NAME}/.ask/`)) {
        mkdirSync(`./${PublishingInformation.NAME}/.ask/`)
    }
}



writeFileSync(`./${PublishingInformation.NAME}/skill.json`, JSON.stringify(skill, null, 2));

writeFileSync(`./${PublishingInformation.NAME}/models/en-GB.json`, JSON.stringify(interactionModel(alexaApp.intents, PublishingInformation), null, 2));

writeFileSync(`./${PublishingInformation.NAME}/.ask/config`, JSON.stringify(askConfig, null, 2));