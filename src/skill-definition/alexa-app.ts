import {app} from 'alexa-app';
import {SkillExpressOptions} from './models/ExpressOptions'
import { AmazonDefault } from './intent-middleware/amazon-default/amazon-default';

// immutable to create skill.json and
// to create the api.
export const alexaApp = new app('Skill');
const stop = new AmazonDefault('stop');

alexaApp.intent(stop.name, stop.schema, stop.action)

alexaApp.express(new SkillExpressOptions())