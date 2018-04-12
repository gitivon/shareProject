"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("./middleware");
exports.once = () => {
    return (target, name, descriptor) => {
        console.log(target);
        return middleware_1.default({ target, name, descriptor }, (next) => __awaiter(this, void 0, void 0, function* () {
            const key = Symbol(`Once:${name}`);
            if (!target[key]) {
                target[key] = yield next();
            }
            return target[key];
        }));
    };
};
