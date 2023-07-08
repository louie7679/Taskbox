"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromEmail = void 0;
const pool_1 = __importDefault(require("../pool"));
async function getUserFromEmail(email) {
    return (0, pool_1.default)("users").where({ email }).first();
}
exports.getUserFromEmail = getUserFromEmail;
//# sourceMappingURL=users.js.map