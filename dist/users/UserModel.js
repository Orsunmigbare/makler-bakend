"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../db/index");
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    username: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    firstname: sequelize_1.DataTypes.STRING,
    lastname: sequelize_1.DataTypes.STRING,
    reset_token: sequelize_1.DataTypes.STRING,
    id: { type: sequelize_1.DataTypes.STRING, primaryKey: true }
}, { sequelize: index_1.sequelize, modelName: "user" });
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map