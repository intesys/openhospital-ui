import { RequestHandler } from "express";
import { OperationObject } from "../types/openApi";
declare const _default: (method: string, route: string, operationSpec: OperationObject) => RequestHandler[];
export default _default;
