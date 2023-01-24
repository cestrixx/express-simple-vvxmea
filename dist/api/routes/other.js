"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/other1', controllers_1.other1);
router.post('/other2', controllers_1.other2);
exports.default = router;
