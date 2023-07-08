"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_1 = __importDefault(require("../middleware/validate"));
const tasks_1 = require("../models/tasks");
exports.users = (0, express_1.Router)();
exports.users.get("/:id/tasks", (0, validate_1.default)([(0, express_validator_1.param)("id").isInt()]), async (req, res) => {
    const userId = req.params.id;
    try {
        const tasks = await (0, tasks_1.getAssociatedTasksForUser)(Number(userId));
        res.json(tasks);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});
//# sourceMappingURL=users.route.js.map