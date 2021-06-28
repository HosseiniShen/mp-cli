"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
var child_process_1 = require("child_process");
var logger_1 = __importDefault(require("./logger"));
function execute(command, args, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        child_process_1.execFile(command, args, options, function (error, stdout, stderr) {
            if (error) {
                logger_1.default.error(error.message);
                return reject(error);
            }
            if (stderr) {
                logger_1.default.warn(stderr);
            }
            logger_1.default.info(stdout);
            resolve(stdout);
        });
    });
}
exports.execute = execute;
