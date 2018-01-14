import { Request, response } from "alexa-app/types";

export function helpAction(request: Request, response:response) {
    return response.say('Help text.').shouldEndSession(false);
}