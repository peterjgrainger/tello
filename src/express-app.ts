import { alexaApp } from "./skill-definition/alexa-app";
import { SkillExpressOptions } from "./skill-definition/models/ExpressOptions";
import * as Express from 'express';

const app = Express();

const PORT = process.env.PORT || 3000;

alexaApp.express(new SkillExpressOptions(app));

app.listen(PORT, () => console.log("Listening on port " + PORT + "."));