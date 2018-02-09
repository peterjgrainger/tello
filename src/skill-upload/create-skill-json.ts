import { skill } from "./skill";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { interactionModel } from "./interaction-model";
import { PublishingInformation } from "../publishing-information";
import { askConfig } from "./ask-config";
import { AlexaApp } from "../skill-definition/alexa-app";
import {readSync} from 'clipboardy'
import {uploadFile} from 'imgur';
import { ImageLinks } from "./image-links";
const readline = require('readline');

/**
 * Self running funciton.
 */
void async function() {
    // Read url from the clipboard
    const url = readSync();
    // initialise the app.
    const alexaApp = new AlexaApp();
    alexaApp.addIntents();

    const image = new ImageLinks();
    await image.upload();
    
    // Make the folder structure
    if(!existsSync(`./app`)) {
        mkdirSync(`./app`)
        if(!existsSync(`./app/models/`)) {
            mkdirSync(`./app/models/`)
        }

        // only make a new config if required
        if(!existsSync(`./app/.ask/`)) {
            mkdirSync(`./app/.ask/`)
            writeFileSync(`./app/.ask/config`, JSON.stringify(askConfig, null, 2));
        }
    }

    // Make the three required files for Amazon
    writeFileSync(`./app/skill.json`, JSON.stringify(skill(url, PublishingInformation, image), null, 2));
    writeFileSync(`./app/models/en-GB.json`, JSON.stringify(interactionModel(Object.values(alexaApp.intents), PublishingInformation, alexaApp.slotTypes), null, 2));
}();