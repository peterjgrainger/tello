import { AlexaApp } from "../skill-definition/alexa-app";
import { SkillExpressOptions } from "./ExpressOptions";
import * as Express from 'express';

const app = Express();

const PORT = process.env.PORT || 3000;

const alexaApp = new AlexaApp()

alexaApp.express(new SkillExpressOptions(app))

alexaApp.addIntents();

app.listen(PORT, () => console.log("Listening on port " + PORT + "."));