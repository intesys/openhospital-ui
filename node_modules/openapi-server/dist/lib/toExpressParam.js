"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerParamRegExp = /\{([^/}]+)}/g;
exports.default = (route) => {
    return route.replace(swaggerParamRegExp, (match, param) => `:${param}`);
};
//# sourceMappingURL=toExpressParam.js.map