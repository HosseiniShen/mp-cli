"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inquirPath = void 0;
var path = __importStar(require("path"));
var inquirer = __importStar(require("inquirer"));
var slash_1 = __importDefault(require("slash"));
var env_1 = require("../utils/env");
function inquirPath() {
    return new Promise(function (resolve, reject) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'path',
                message: '请输入微信开发者工具安装路径',
                description: 'Wechat devtool path'
            }
        ]).then(function (ret) {
            var retPath = slash_1.default(ret.path);
            if (retPath) {
                retPath = retPath.trim();
                var _path = path.resolve(retPath, env_1.isDarwin() ? "MacOS/cli" : "cli.bat");
                return resolve(_path);
            }
            reject();
        }).catch(reject);
    });
}
exports.inquirPath = inquirPath;
