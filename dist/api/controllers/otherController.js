"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.other2 = exports.other1 = void 0;
const other1 = (req, res, next) => {
    try {
        throw new Error('Not Implemented');
    }
    catch (err) {
        next(err);
    }
};
exports.other1 = other1;
const other2 = (req, res, next) => {
    try {
        throw new Error('Not Implemented');
    }
    catch (err) {
        next(err);
    }
};
exports.other2 = other2;
