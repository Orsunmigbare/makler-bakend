"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = require("../utils");
const UserRepository_1 = __importDefault(require("../users/UserRepository"));
exports.CreateAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    try {
        let user = yield UserRepository_1.default.getUserByEmail(email);
        if (user)
            return utils_1._createResponseMessage(res, {
                data: "",
                message: "Email exists",
                code: 400,
                status: "failed"
            });
        console.log("--------> salt", utils_1._saltRounds());
        const password_hash = yield bcrypt_1.default.hash(password, utils_1._saltRounds());
        user = yield UserRepository_1.default.create({
            username,
            password: password_hash,
            email
        });
        utils_1._createResponseMessage(res, {
            data: { email: user.get("email"), username: user.get("username") },
            message: "User created successfully",
            code: 200,
            status: "success"
        });
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=index.js.map