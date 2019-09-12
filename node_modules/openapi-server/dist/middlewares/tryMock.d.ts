import { RequestHandler } from "express";
/**
 * @param method one value of `operations`
 * @param route path key, as example: '/item/{id}'
 */
declare const tryMock: (method: string, route: string) => RequestHandler;
export default tryMock;
