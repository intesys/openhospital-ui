"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const sendBody = () => (req, res, next) => {
    if (!lodash_1.isUndefined(lodash_1.get(res, "locals.body"))) {
        return res.send(res.locals.body);
    }
    return next();
};
exports.default = sendBody;
//# sourceMappingURL=sendBody.js.map