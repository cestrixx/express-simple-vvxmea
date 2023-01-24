"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sign = (payload) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign({}, 'Secret', { algorithm: 'PS384', audience: payload }, (error, token) => {
            if (error)
                reject(error);
            resolve(token);
        });
    });
};
exports.sign = sign;
const verify = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, 'Secret', { algorithms: ['PS384'] }, (err, payload) => {
            if (err)
                reject(err);
            resolve(payload);
        });
    });
};
exports.verify = verify;
