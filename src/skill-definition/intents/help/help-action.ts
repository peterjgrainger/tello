import { request, response } from "alexa-app/types";

/**
 * Required
 *
 * @param request
 * @param response
 */
export function helpAction(alexaRequest: request, alexaResponse: response) {
    return alexaResponse.say('Help text.').shouldEndSession(false);
}
