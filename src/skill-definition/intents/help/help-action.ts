import { Request, response } from "alexa-app/types";

/**
 * Required
 *
 * @param request
 * @param response
 */
export function helpAction(request: Request, alexaResponse: response) {
    return alexaResponse.say('Help text.').shouldEndSession(false);
}
