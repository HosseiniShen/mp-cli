"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var strip_ansi_1 = __importDefault(require("strip-ansi"));
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel["INFO"] = "INFO";
    LoggerLevel["WARN"] = "WARN";
    LoggerLevel["ERROR"] = "ERROR";
})(LoggerLevel || (LoggerLevel = {}));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.log = function (message) {
        if (message === void 0) { message = ''; }
        console.log(message);
    };
    Logger.info = function (message) {
        if (message === void 0) { message = ''; }
        console.log(this.format(chalk_1.default.bgBlue.black(LoggerLevel.INFO), message));
    };
    Logger.warn = function (message) {
        if (message === void 0) { message = ''; }
        console.log(this.format(chalk_1.default.bgYellow.black(LoggerLevel.WARN), message));
    };
    Logger.error = function (message) {
        if (message === void 0) { message = ''; }
        console.log(this.format(chalk_1.default.bgRed(LoggerLevel.ERROR), message));
    };
    Logger.format = function (label, message) {
        if (message === void 0) { message = ''; }
        return message.split('\n').map(function (line, i) { return (i === 0
            ? label + " " + line
            : line.padStart(strip_ansi_1.default(label).length)); }).join('\n');
    };
    return Logger;
}());
exports.default = Logger;
