import { skill } from "./skill";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { interactionModel } from "./interaction-model";
import { PublishingInformation } from "./publishing-information";

if(!existsSync(`./${PublishingInformation.NAME}`)) {
    mkdirSync(`./${PublishingInformation.NAME}`)
    if(!existsSync(`./${PublishingInformation.NAME}/models/`)) {
        mkdirSync(`./${PublishingInformation.NAME}/models/`)
    }
}

writeFileSync(`./${PublishingInformation.NAME}/skill.json`, JSON.stringify(skill, null, 2));

writeFileSync(`./${PublishingInformation.NAME}/models/en-UK.json`, JSON.stringify(interactionModel, null, 2));