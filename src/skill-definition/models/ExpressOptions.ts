import {ExpressOptions} from 'alexa-app';
import * as Express from 'express';

/**
 * Default express options to allow handling 
 * of request by express.
 */
export class SkillExpressOptions implements ExpressOptions {
    expressApp = Express();
    // This is required by Amazon
    checkCert = true;
} 