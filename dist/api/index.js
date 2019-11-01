"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_api_1 = require("./users.api");
const auht_api_1 = require("./auht.api");
exports.API_ROUTER = (app) => {
    app.use('/api/v1/users', users_api_1.UserRouter);
    app.use('/api/v1/auth', auht_api_1.AuthRouter);
};
//# sourceMappingURL=index.js.map