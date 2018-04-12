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
/**
 * 方法修饰器
 * 把修饰器写法换成中间件的模式去提供
 */
const MethodDecoratorMiddlewave = ({ target, name, descriptor }, fn) => {
    const oldValue = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            // 注意这里不能改成箭头函数，this 指向问题
            const next = () => __awaiter(this, void 0, void 0, function* () {
                return yield oldValue.apply(this, args);
            });
            return yield fn(next);
        });
    };
    return descriptor;
};
exports.default = MethodDecoratorMiddlewave;
