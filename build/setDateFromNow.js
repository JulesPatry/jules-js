"use strict";
// Please be mindful of the device or server creating this date. Servers are usually set to UTC while devices like browser or phone are local to that user
Object.defineProperty(exports, "__esModule", { value: true });
function setDateFromNow(day = 1, hours = 0, minutes = 0, seconds = 0, ms = 0) {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // sets now to midnight
    now.setDate(now.getDate() + day);
    now.setHours(hours, minutes, seconds, ms);
    return now;
}
exports.default = setDateFromNow;
