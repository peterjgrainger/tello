"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
class SkillExpressOptions {
    constructor() {
        this.expressApp = Express();
        this.checkCert = true;
    }
}
exports.SkillExpressOptions = SkillExpressOptions;
//# sourceMappingURL=ExpressOptions.js.map