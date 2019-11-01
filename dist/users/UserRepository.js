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
const UserModel_1 = __importDefault(require("./UserModel"));
class UserRepository {
    static getUserByEmail(email) {
        return UserModel_1.default.findOne({
            where: { email }
        });
    }
    static create({ username, password, email }) {
        console.log('--------> user', password);
        return UserModel_1.default.create({ username, password, email });
    }
    static findUserByEmail({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return UserModel_1.default.findOne({
                    where: { email }
                });
            }
            catch (e) {
                return null;
            }
        });
    }
    static updateUserbyId({ details, id }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield UserModel_1.default.findByPk(id);
                return user.update(Object.assign({}, details));
            }
            catch (e) {
                return null;
            }
        });
    }
    static updateUserByEmail({ details, email }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield UserModel_1.default.findOne({
                    where: { email }
                });
                return user.update(Object.assign({}, details));
            }
            catch (e) {
                return null;
            }
        });
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map