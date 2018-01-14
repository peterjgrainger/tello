import {app} from 'alexa-app';
import {SkillExpressOptions} from './models/ExpressOptions'
import { AmazonDefault } from './intents/amazon-default/amazon-default';
import { stopAction } from './intents/stop/stop-action';
import { endAction } from './intents/end/end-action';
import { helpAction } from './intents/help/help-action';


export const alexaApp = new app('Skill');
const stop = new AmazonDefault('stop', stopAction);
const end = new AmazonDefault('cancel', endAction);
const help = new AmazonDefault('help', helpAction);


alexaApp.intent(stop.name, stop.schema, stop.action)
alexaApp.intent(end.name, end.schema, end.action)
alexaApp.intent(help.name, help.schema, help.action)

alexaApp.express(new SkillExpressOptions())