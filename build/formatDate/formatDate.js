"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatDate(d) {
    const date = d ? new Date(d) : new Date();
    return ((date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
        '/' +
        (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
        '/' +
        date.getFullYear());
}
exports.default = formatDate;
