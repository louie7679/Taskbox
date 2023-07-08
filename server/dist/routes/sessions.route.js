"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessions = void 0;
const express_validator_1 = require("express-validator");
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const validate_1 = __importDefault(require("../middleware/validate"));
const users_1 = require("../models/users");
exports.sessions = (0, express_1.Router)();
/**
 * Retrieves a user session.
 *
 * Request body
 * empty
 *
 * Response body
 * 200
 * An empty body if the user dose not exist
 * A body with a 'user_id' field if they do exist
 */
exports.sessions.get("/", (req, res) => {
    return res
        .status(200)
        .json(req.session.user_id ? { user_id: req.session.user_id } : {});
});
/**
 * Creates a new session given an email and password.
 *
 * Request body
 * email The users email
 * password The users password
 *
 * Response body
 * 200
 *  user_id The id of the user just logged in as.
 * 400
 *  errors An array of error objects describing which body values are incorrect.
 * 422
 *  error A string error message detailing why login was not successful.
 * 500
 *  empty body
 */
exports.sessions.post("/", (0, validate_1.default)([(0, express_validator_1.body)("email").isEmail().normalizeEmail(), (0, express_validator_1.body)("password").trim()]), async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await (0, users_1.getUserFromEmail)(email);
        if (user && bcryptjs_1.default.compareSync(password, user.password_digest)) {
            req.session.user_id = String(user.id);
            return res.status(200).json({ user_id: user.id });
        }
        else {
            return res.status(422).json({ error: "Incorrect email or password." });
        }
    }
    catch (e) {
        console.log("Error while trying to find user: " + e);
        return res.sendStatus(500);
    }
});
/**
 * Ends a user session.
 *
 * Request body
 * empty
 *
 * Response body
 * 200
 * empty
 */
exports.sessions.delete("/", (req, res) => {
    if (req.session.user_id) {
        req.session.user_id = undefined;
    }
    return res.sendStatus(200);
});
//# sourceMappingURL=sessions.route.js.map