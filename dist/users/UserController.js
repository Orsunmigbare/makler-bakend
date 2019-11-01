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
const mail_1 = require("../mail");
const utils_1 = require("../utils");
const UserRepository_1 = __importDefault(require("./UserRepository"));
exports.forgotPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // const email_hash = btoa(email)
        // const emailresetLink = 'www.makler.com/${email_hash}';
        let reset_token = Math.ceil(Math.random() * 100000), reset_token_hash = bcrypt_1.default.hash(reset_token, utils_1._saltRounds);
        yield UserRepository_1.default.updateUserByEmail({
            email,
            details: { reset_token: reset_token_hash }
        });
        yield mail_1.sendPasswordResetToken({ token: reset_token, email });
        utils_1._createResponseMessage(res, {
            data: "",
            message: "A passowrd reset token has been sent to your mail",
            code: "",
            status: "success"
        });
    }
    catch (e) {
        next(e);
    }
});
exports.restetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { reset_token, new_password, email } = req.body;
        let user = yield UserRepository_1.default.findUserByEmail({ email });
        if (!user)
            return utils_1._createResponseMessage(res, {
                data: "",
                message: "Error reseting Password, User not found",
                code: "",
                status: "falied"
            });
        let token_match = yield bcrypt_1.default.compare(user.get('reset_token'), reset_token);
        if (!user && !token_match)
            return utils_1._createResponseMessage(res, {
                data: "",
                message: "Error reseting Password",
                code: "",
                status: "falied"
            });
        new_password = yield bcrypt_1.default.hash(new_password, utils_1._saltRounds);
        UserRepository_1.default.updateUserbyId({
            id: user.get('id'),
            details: { password: new_password }
        });
    }
    catch (e) {
        next(e);
    }
});
exports.RegisterDeatils = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const details = Object.assign({}, req.body.details);
    try {
        let user = yield UserRepository_1.default.updateUserbyId({ details: Object.assign({}, details), id: req.user.id });
        utils_1._createResponseMessage(res, { data: user, message: 'User Updated Succesfully', code: 200, status: 'success' });
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=UserController.js.map