"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const globals_1 = require("../lib/globals");
const proxy_1 = __importDefault(require("../lib/proxy"));
const void_1 = __importDefault(require("./void"));
/**
 * @param method one value of `operations`
 * @param route path key, as example: '/item/{id}'
 */
const tryProxy = (method, route) => (req, res, next) => {
    if (!lodash_1.isUndefined(lodash_1.get(res, "locals.body"))) {
        return void_1.default(req, res, next);
    }
    return proxy_1.default(globals_1.proxyUrl)(req, res, next);
};
exports.default = tryProxy;
//# sourceMappingURL=tryProxy.js.map