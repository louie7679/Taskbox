"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssociatedTasksForUser = void 0;
const pool_1 = __importDefault(require("../pool"));
async function getAssociatedTasksForUser(id) {
    return await (0, pool_1.default)("tasks")
        .where("assignee_id", "=", id)
        .orWhere("assigner_id", "=", id)
        .leftJoin("training_assignments", "tasks.info_id", "training_assignments.id")
        .leftJoin("time_off_requests", "tasks.info_id", "time_off_request.id")
        .leftJoin("performance_review_requests", "tasks.info_id", "performance_review_requests.id");
}
exports.getAssociatedTasksForUser = getAssociatedTasksForUser;
//# sourceMappingURL=tasks.js.map