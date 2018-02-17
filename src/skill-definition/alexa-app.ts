import { app } from 'alexa-app';
import { PublishingInformation } from '../publishing-information';
import { SkillExpressOptions } from '../server/ExpressOptions';
import { AmazonDefault } from './intents/amazon-default/amazon-default';
import { endAction } from './intents/end/end-action';
import { HelloWorld } from './intents/hello-world/hello-world';
import { helpAction } from './intents/help/help-action';
import { stopAction } from './intents/stop/stop-action';
import { launch } from './launch/launch';
import { Intent } from './models/intents/intent';
import { IntentDefinition } from './models/intents/intent-definition';

export class AlexaApp extends app {

    public slotTypes = [];

    constructor() {
        super("");
    }

    public addIntents() {
        this.launch(launch);
        this.addIntent(new AmazonDefault('stop', stopAction));
        this.addIntent(new AmazonDefault('cancel', endAction));
        this.addIntent(new AmazonDefault('help', helpAction));
        this.addIntent(new HelloWorld());
    }

    public addIntent(intentDefinition: IntentDefinition) {
        this.intent(intentDefinition.name, intentDefinition.schema(), intentDefinition.action);
        this.slotTypes = this.slotTypes.concat(intentDefinition.slots.map((slot) => slot.getSlotType()));

        if ( new Set(this.slotTypes.map((value) => value.name)).size !== this.slotTypes.length) {
            throw new RangeError('Some of the slot types have the same name, they need to be unique');
        }
    }

}
