import { Request, response } from "alexa-app/types";

export function stopAction(request: Request, response:response) {
    return response.say('Stopped.').shouldEndSession(true);
}