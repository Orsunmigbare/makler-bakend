"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DB_NAME = process.env.DB_NAME;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_HOST = process.env.DB_HOST;
exports.sequelize = new Sequelize(exports.DB_NAME, exports.DB_USER, exports.DB_PASSWORD, {
    HOST: exports.DB_HOST,
    dialect: "mysql",
    port: 8889
});
exports.authenticate = () => {
    return exports.sequelize
        .authenticate()
        .then(() => {
        console.log("Database Connection has been established successfully.");
    })
        .catch(err => {
        console.error("Unable to connect to the database:", err);
    });
};
//# sourceMappingURL=index.js.map