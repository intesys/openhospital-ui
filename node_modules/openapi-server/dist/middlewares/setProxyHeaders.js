"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => (req, res, next) => {
    res.set("Via", "HTTP/1.1 openapi-server");
    return next();
};
//# sourceMappingURL=setProxyHeaders.js.map