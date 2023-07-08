"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const knex_1 = __importDefault(require("knex"));
const config = require("../knexfile.js");
exports.default = (0, knex_1.default)(config);
//# sourceMappingURL=pool.js.map