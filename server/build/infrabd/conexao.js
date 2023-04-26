"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectaBD = void 0;
require('dotenv').config();
const mysql2_1 = __importDefault(require("mysql2"));
let dbAddress = process.env.NODE_ENV == "development" ? process.env.HOST_DB_DEV : process.env.HOST_DB_PROD;
const conectaBD = mysql2_1.default.createPool({
    host: dbAddress,
    port: Number(process.env.portBD),
    user: process.env.userBD,
    password: process.env.passwordBD,
    database: process.env.databaseBD
});
exports.conectaBD = conectaBD;
