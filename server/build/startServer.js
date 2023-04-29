"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const cluster_1 = __importDefault(require("cluster"));
const createLogs_1 = require("./services/logs/createLogs");
const http_1 = require("./http");
function RunPrimaryProcess() {
    let cpus = process.env.NODE_ENV == "production" ? os_1.default.cpus().length - 1 : 4;
    //if environment is a not production, use only 4 core of CPU (my pc)
    for (let index = 0; index < cpus; index++) {
        createLogs_1.Logger.warn(`${process.pid} is started`);
        cluster_1.default.fork();
    }
    cluster_1.default.on("exit", (worker, code, signal) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            //se o processo finalizou com err e não foi o S.O que o desconectou, gere uma nova copia
            createLogs_1.Logger.warn(` Worker ${worker.process.pid} - code ${code} Signal ${signal} died. Scheduling another process`);
            cluster_1.default.fork();
        }
    });
}
function RunWorkerProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, http_1.StartServer)();
        // for each cluster.fork() above, a new server instance will be created calling the function StartServer()
    });
}
cluster_1.default.isPrimary ? RunPrimaryProcess() : RunWorkerProcess();
// if there is not process  running, so make one process for each cpu , else only one process
