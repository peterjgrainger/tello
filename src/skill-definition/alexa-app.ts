import { app } from 'alexa-app';
import { AmazonDefault } from './intents/amazon-default/amazon-default';
import { stopAction } from './intents/stop/stop-action';
import { endAction } from './intents/end/end-action';
import { helpAction } from './intents/help/help-action';
import { HelloWorld } from './intents/hello-world/hello-world';
import { launch } from './launch/launch';
import { SkillExpressOptions } from '../server/ExpressOptions';
import { PublishingInformation } from '../publishing-information';


export class AlexaApp extends app {

    constructor() {
        super("");
    }

    addIntents() {
        const stop = new AmazonDefault('stop', stopAction);
        const end = new AmazonDefault('cancel', endAction);
        const help = new AmazonDefault('help', helpAction);
        const hello = new HelloWorld();

        /**
         * These are required intents.  You can modify
         * but there are strict rules
         */
        this.launch(launch);
        this.intent(stop.name, stop.schema, stop.action)
        this.intent(end.name, end.schema, end.action)
        this.intent(help.name, help.schema, help.action)

        /**
         * Add your own intents here.
         */
        this.intent(hello.name, hello.schema, hello.action);
    }

}

