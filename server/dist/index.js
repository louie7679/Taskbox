"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const constants_1 = require("./constants");
const sessions_route_1 = require("./routes/sessions.route");
const users_route_1 = require("./routes/users.route");
const tasks_route_1 = require("./routes/tasks.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_session_1.default)({ secret: constants_1.SESSION_SECRET, resave: false, saveUninitialized: false }));
const api = express_1.default.Router();
api.use("/sessions", sessions_route_1.sessions);
api.use("/users", users_route_1.users);
api.use("/tasks", tasks_route_1.tasks);
app.use("/api", api);
app.listen(constants_1.EXPRESS_PORT, () => console.log("Server listening on port " + constants_1.EXPRESS_PORT));
//# sourceMappingURL=index.js.map