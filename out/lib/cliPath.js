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
exports.saveCliPath = exports.loadCliPath = void 0;
var os = __importStar(require("os"));
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var logger_1 = __importDefault(require("../utils/logger"));
var pathName = path.join(os.homedir(), '.mpclirc');
/**
 * 加载保存的cli执行文件位置
 * @returns
 */
function loadCliPath() {
    if (fs.existsSync(pathName)) {
        try {
            return fs.readFileSync(pathName, 'utf-8');
        }
        catch (error) {
            logger_1.default.error("Loading saved cli path: " +
                ("" + error.message));
            process.exit(1);
        }
    }
}
exports.loadCliPath = loadCliPath;
/**
 * 保存的cli执行文件位置
 * @param cliPath
 */
function saveCliPath(cliPath) {
    if (!cliPath)
        return;
    try {
        fs.writeFileSync(pathName, cliPath);
    }
    catch (error) {
        logger_1.default.error("Saving cli path: " +
            ("" + error.message));
    }
}
exports.saveCliPath = saveCliPath;
