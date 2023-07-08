"use strict";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_SECRET = exports.EXPRESS_PORT = void 0;
const console_1 = require("console");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function getEnv(key) {
    (0, console_1.assert)(process.env[key], `.env file is missing the \`${key}\` field.`);
    return process.env[key];
}
exports.EXPRESS_PORT = process.env.EXPRESS_PORT || 3201;
exports.SESSION_SECRET = getEnv("SESSION_SECRET");
//# sourceMappingURL=constants.js.map