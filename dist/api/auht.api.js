"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const index_1 = require("../auth/index");
const UserController_1 = require("../users/UserController");
Router.post('/create', index_1.CreateAccount);
Router.post('/forgot', UserController_1.forgotPassword);
Router.post('/reset', UserController_1.restetPassword);
exports.AuthRouter = Router;
//# sourceMappingURL=auht.api.js.map