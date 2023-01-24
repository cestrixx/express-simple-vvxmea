"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.other2 = exports.other1 = exports.logout = exports.login = void 0;
const authController_1 = require("./authController");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return authController_1.login; } });
Object.defineProperty(exports, "logout", { enumerable: true, get: function () { return authController_1.logout; } });
const otherController_1 = require("./otherController");
Object.defineProperty(exports, "other1", { enumerable: true, get: function () { return otherController_1.other1; } });
Object.defineProperty(exports, "other2", { enumerable: true, get: function () { return otherController_1.other2; } });
