import {app} from 'alexa-app';
import {SkillExpressOptions} from './models/ExpressOptions'

export const alexaApp = new app('Skill');

alexaApp.express(new SkillExpressOptions())