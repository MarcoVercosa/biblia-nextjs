"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartServer = void 0;
require('dotenv').config();
const node_process_1 = __importDefault(require("node:process"));
const conexao_1 = require("../infrabd/conexao");
const createLogs_1 = require("../services/logs/createLogs");
const index_routes_1 = require("./routes/index_routes");
const express = require("express");
const app = express();
let port = node_process_1.default.env.portHTTP;
function StartServerWEB() {
    createLogs_1.Logger.warn("Servidor inciando tentativa de conexão ao banco de dados");
    return new Promise((resolve, reject) => {
        conexao_1.conectaBD.getConnection((erro) => {
            try {
                if (!erro) {
                    createLogs_1.Logger.warn("Conectado no banco de dados com sucesso");
                    app.use(express.json());
                    app.use(index_routes_1.router);
                    const server = app.listen(port, '192.168.15.143', () => {
                        createLogs_1.Logger.warn(`Servidor rodando na porta ${port} !`);
                        createLogs_1.Logger.warn(`Servidor rodando na porta ${port} on process ${node_process_1.default.pid} !`);
                    });
                    node_process_1.default.on('SIGINT', () => {
                        server.close(() => {
                            createLogs_1.Logger.warn('SIGTERM signal received: closing HTTP server and process' + node_process_1.default.pid);
                            node_process_1.default.exit(1);
                        });
                    });
                    node_process_1.default.on('SIGTERM', () => {
                        server.close(() => {
                            createLogs_1.Logger.warn('SIGTERM signal received: closing HTTP server and the process ' + node_process_1.default.pid);
                            node_process_1.default.exit(1);
                        });
                    });
                    node_process_1.default.on('uncaughtException', (err, origin) => {
                        createLogs_1.Logger.error(`${err} -- ${origin} on process ${node_process_1.default.pid}`);
                        node_process_1.default.exit(1);
                    });
                    resolve("Server is started on process " + node_process_1.default.pid);
                }
                else {
                    //encaminha o erro para o catch
                    throw (erro);
                }
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
// ##########################
// START SERVER
// ##########################
function StartServer() {
    setTimeout(() => {
        StartServerWEB().then(dado => createLogs_1.Logger.warn(dado)).catch((err) => {
            createLogs_1.Logger.error("Erro ao iniciar o servidor " + err);
            NovaTentativa(err);
        });
    }, 1000);
}
exports.StartServer = StartServer;
function NovaTentativa(err) {
    createLogs_1.Logger.warn("Solicitando nova tentativa");
    setTimeout(() => {
        StartServerWEB().then(dado => createLogs_1.Logger.warn(dado)).catch((erro) => {
            createLogs_1.Logger.error("Erro ao iniciar o servidor " + err);
            NovaTentativa(erro);
        });
    }, 5000);
}
