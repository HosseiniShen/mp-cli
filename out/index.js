#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var devtool_1 = require("./lib/devtool");
commander_1.default
    .version('1.0.0', '-V, --version')
    .command('open [project]')
    .option('-D, --dev', 'run in development mode')
    .description('Start wechat devtool')
    .action(function (project, options) {
    devtool_1.open(project, options.dev);
});
commander_1.default
    .command('close [project]')
    .option('-D, --dev', 'close in development mode')
    .option('-Q, --quit', 'close devtools')
    .description('Close devtool with option')
    .action(function (project, _a) {
    var dev = _a.dev, quit = _a.quit;
    devtool_1.close(project, dev, quit);
});
commander_1.default.parse();
