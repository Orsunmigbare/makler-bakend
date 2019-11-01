"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser = __importStar(require("body-parser"));
const api_1 = require("./api");
dotenv_1.default.config();
exports.app.use(morgan_1.default("tiny"));
// let db = require('./db');
exports.app.use(body_parser.urlencoded({ extended: false }));
exports.app.use(body_parser.json());
console.log("dir filename", __dirname, __dirname);
console.log("------> db", process.env.DB_NAME, __filename);
const port = process.env.PORT || 3005;
const db_1 = require("./db");
exports.app.set("port", port);
api_1.API_ROUTER(exports.app);
db_1.authenticate();
exports.app.listen(port, () => {
    console.log(`server started successfully on port ${port}`);
});
//# sourceMappingURL=app.js.map