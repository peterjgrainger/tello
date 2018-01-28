import { Request, response } from "alexa-app/types";


export function launch(request: Request, response: response) { 
        return response.say('W00t launched').shouldEndSession(false);
};