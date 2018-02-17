import { Request, response } from "alexa-app/types";
import { PublishingInformation } from "../../../publishing-information";

/**
 * Required alexa intent.  Only change the wording after
 * stopped in the response, but you don't need to.
 *
 * Stop the session on user request
 *
 * @param request alexa-app request type
 * @param response alexa-app response type
 */
export function stopAction(request: Request, alexaResponse: response) {
    return alexaResponse.say(`Stopped ${PublishingInformation.APP_NAME} skill`).shouldEndSession(true);
}
