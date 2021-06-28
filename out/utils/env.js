"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDarwin = void 0;
/**
 * Darwin OS
 * @returns
 */
function isDarwin() {
    var platform = process.platform;
    return platform === 'darwin';
}
exports.isDarwin = isDarwin;
