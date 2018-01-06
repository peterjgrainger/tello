import {ExpressOptions} from 'alexa-app';
import * as Express from 'express';


export class SkillExpressOptions implements ExpressOptions {
    expressApp = Express();
    checkCert = true;
} 