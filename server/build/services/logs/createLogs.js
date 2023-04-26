"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, json, printf } = winston_1.default.format;
const errorFilter = winston_1.default.format((info, opts) => {
    return info.level === 'error' ? info : false;
});
const warnFilter = winston_1.default.format((info, opts) => {
    return info.level === 'warn' ? info : false;
});
const infoFilter = winston_1.default.format((info, opts) => {
    return info.level === 'info' ? info : false;
});
const httpFilter = winston_1.default.format((info, opts) => {
    return info.level === 'http' ? info : false;
});
const alertFilter = winston_1.default.format((info, opts) => {
    return info.level === 'alert' ? info : false;
});
const verboseFilter = winston_1.default.format((info, opts) => {
    return info.level === 'verbose' ? info : false;
});
path_1.default.resolve("certificates", "key.key");
let transports = [];
let pathLogs = process.env.NODE_ENV == "production" ? path_1.default.resolve("logs", "production") : path_1.default.resolve("logs", "development");
let Printf = printf((info) => `{"level":"${info.level}","message": ${JSON.stringify(info.message)},"Date":"${info.timestamp}"}`);
// if (process.env.NODE_ENV == 'production') {
transports = [
    new winston_1.default.transports.File({
        filename: `${pathLogs}/error.log`, level: 'error',
        format: combine(errorFilter(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), Printf),
    }),
    new winston_1.default.transports.File({
        filename: `${pathLogs}/warn.log`, level: 'warn',
        format: combine(warnFilter(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), Printf),
    }),
    new winston_1.default.transports.File({
        filename: `${pathLogs}/info.log`, level: 'info',
        format: combine(infoFilter(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), Printf),
    }),
    new winston_1.default.transports.File({
        filename: `${pathLogs}/http.log`, level: 'http',
        format: combine(httpFilter(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), Printf),
    }),
    new winston_1.default.transports.File({
        filename: `${pathLogs}/alert.log`, level: 'alert',
        format: combine(alertFilter(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), Printf),
    }),
    new winston_1.default.transports.File({
        filename: `${pathLogs}/verbose.log`, level: 'verbose',
        format: combine(verboseFilter(), timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), Printf),
    })
];
const Logger = winston_1.default.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), json(), Printf),
    transports
});
exports.Logger = Logger;
