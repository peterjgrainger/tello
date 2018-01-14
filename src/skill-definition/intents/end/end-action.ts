import { Request, response } from "alexa-app/types";

export function endAction(request: Request, response:response) {
    return response.say('Ended.').shouldEndSession(true);
}