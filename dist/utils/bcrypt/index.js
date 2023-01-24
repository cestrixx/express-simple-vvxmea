"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hash = (text) => {
    return bcrypt_1.default.hash(text, 10);
};
exports.hash = hash;
const compare = (plain, hash) => {
    return bcrypt_1.default.compare(plain, hash);
};
exports.compare = compare;
