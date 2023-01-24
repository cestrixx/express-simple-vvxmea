"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./api/routes");
const app = (0, express_1.default)();
const port = 3010;
const path = require('path');
app.use(express_1.default.static('static'));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use((0, helmet_1.default)());
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});
app.use('/auth', routes_1.authRoute);
app.use('/logout', routes_1.otherRoute);
app.use((err, req, res, next) => {
    res.status(500).json({
        status: 500,
        message: err.message,
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
