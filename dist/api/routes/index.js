"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.otherRoute = exports.authRoute = void 0;
const auth_1 = __importDefault(require("./auth"));
exports.authRoute = auth_1.default;
const other_1 = __importDefault(require("./other"));
exports.otherRoute = other_1.default;
