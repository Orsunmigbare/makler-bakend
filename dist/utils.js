"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._createResponseMessage = (res, { data, message, code, status }) => {
    res.status(code).json({ data, message, status });
};
exports._saltRounds = () => (Math.ceil(Math.random() * Date.now() / 100000000000));
//# sourceMappingURL=utils.js.map