import { app } from 'alexa-app';
import { AmazonDefault } from './intents/amazon-default/amazon-default';
import { stopAction } from './intents/stop/stop-action';
import { endAction } from './intents/end/end-action';
import { helpAction } from './intents/help/help-action';
import { HelloWorld } from './intents/hello-world/hello-world';
import { launch } from './launch/launch';
import { SkillExpressOptions } from '../server/ExpressOptions';
import { PublishingInformation } from '../publishing-information';
import { Intent } from './models/intents/intent';
import { IntentDefinition } from './models/intents/intent-definition';


export class AlexaApp extends app {

    slotTypes = [];

    constructor() {
        super("");
    }

    addIntents() {
        this.launch(launch);
        this.addIntent(new AmazonDefault('stop', stopAction));
        this.addIntent(new AmazonDefault('cancel', endAction))
        this.addIntent(new AmazonDefault('help', helpAction))
        this.addIntent(new HelloWorld());
    }

    addIntent(intentDefinition : IntentDefinition) {
        this.intent(intentDefinition.name, intentDefinition.schema(), intentDefinition.action);
        this.slotTypes = this.slotTypes.concat(intentDefinition.slots.map(slot => slot.getSlotType()))
    }

}

