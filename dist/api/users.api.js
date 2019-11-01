"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const UserController_1 = require("../users/UserController");
Router.post('/details', UserController_1.RegisterDeatils);
exports.UserRouter = Router;
//# sourceMappingURL=users.api.js.map