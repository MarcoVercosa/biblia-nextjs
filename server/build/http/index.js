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
const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const https = require("https");
let port = node_process_1.default.env.portHTTP;
let ipListening = node_process_1.default.env.NODE_ENV == "development" ? node_process_1.default.env.IP_LISTENING_DEV : node_process_1.default.env.IP_LISTENING_PROD;
function StartServerWEB() {
    createLogs_1.Logger.warn("Servidor inciando tentativa de conexão ao banco de dados");
    return new Promise((resolve, reject) => {
        conexao_1.conectaBD.getConnection((erro) => {
            try {
                if (!erro) {
                    createLogs_1.Logger.warn("Conectado no banco de dados com sucesso");
                    createLogs_1.Logger.warn(`Inciando tentativa de start da API na  ${port} com o ip ${ipListening}!`);
                    app.use(express.json());
                    app.use(index_routes_1.router);
                    // const server: any = app.listen(port, process.env.IP_LISTENING, () => {
                    // Logger.warn(`Servidor rodando na porta ${port} com o ip ${process.env.IP_LISTENING}!`)
                    // Logger.warn(`Servidor rodando na porta ${port} on process ${process.pid} !`)
                    // })
                    const server = https.createServer({
                        key: fs.readFileSync(path.resolve("certificates", "key.key")),
                        cert: fs.readFileSync(path.resolve("certificates", "cert.crt")),
                        passphrase: 'fontedevida',
                        requestCert: false,
                        rejectUnauthorized: false
                    }, app)
                        .listen(9000, ipListening);
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
