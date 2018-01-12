import { Request, response } from "alexa-app/types";

export function action(request: Request, response:response) {
    return response.say('Stopped.')
}