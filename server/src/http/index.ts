require('dotenv').config()
import process from "node:process"
import { conectaBD } from "../infrabd/conexao"
import { Logger } from "../services/logs/createLogs"
import { router } from "./routes/index_routes"
const fs = require('fs');
const path = require('path')


const express = require("express")
const app = express()
const https = require("https")
let port = process.env.portHTTP
let ipListening = process.env.NODE_ENV == "development" ? process.env.IP_LISTENING_DEV : process.env.IP_LISTENING_PROD

function StartServerWEB(): Promise<string> {
    Logger.warn("Servidor inciando tentativa de conexão ao banco de dados")
    return new Promise((resolve, reject) => {
        conectaBD.getConnection((erro: any) => {
            try {
                if (!erro) {
                    Logger.warn("Conectado no banco de dados com sucesso")
                    Logger.warn(`Inciando tentativa de start da API na  ${port} com o ip ${ipListening}!`)
                    app.use(express.json())
                    app.use(router)

                    const server: any = app
                    if (process.env.NODE_ENV == "development") {
                        const server: any = app.listen(port, process.env.IP_LISTENING, () => {
                            Logger.warn(`Servidor rodando na porta ${port} com o ip ${process.env.IP_LISTENING}! --- HTTP`)
                            Logger.warn(`Servidor rodando na porta ${port} on process ${process.pid} !`)
                        })
                    } else {
                        const server = https.createServer({
                            key: fs.readFileSync(path.resolve("certificates", "key.key")),
                            cert: fs.readFileSync(path.resolve("certificates", "cert.crt")),
                            passphrase: 'fontedevida',
                            requestCert: false,
                            rejectUnauthorized: false
                        }, app)
                            .listen(9000, ipListening);
                        Logger.warn(`Servidor rodando na porta ${port} com o ip ${process.env.IP_LISTENING}! --- HTTPS`)
                        Logger.warn(`Servidor rodando na porta ${port} on process ${process.pid} !`)
                    }

                    process.on('SIGINT', (): void => {
                        server.close((): void => {
                            Logger.warn('SIGTERM signal received: closing HTTP server and process' + process.pid);
                            process.exit(1)
                        })
                    });
                    process.on('SIGTERM', (): void => {
                        server.close((): void => {
                            Logger.warn('SIGTERM signal received: closing HTTP server and the process ' + process.pid);
                            process.exit(1)
                        })
                    });

                    process.on('uncaughtException', (err, origin): void => {
                        Logger.error(`${err} -- ${origin} on process ${process.pid}`)
                        process.exit(1)
                    });

                    resolve("Server is started on process " + process.pid)
                } else {
                    //encaminha o erro para o catch
                    throw (erro)
                }
            } catch (err) {
                reject(err)
            }
        })
    })
}
// ##########################
// START SERVER
// ##########################

function StartServer(): void {
    setTimeout((): void => {
        StartServerWEB().then(dado => Logger.warn(dado)).catch((err) => {
            Logger.error("Erro ao iniciar o servidor " + err)
            NovaTentativa(err)
        })
    }, 1000)
}

function NovaTentativa(err: any): void {
    Logger.warn("Solicitando nova tentativa")
    setTimeout(() => {
        StartServerWEB().then(dado => Logger.warn(dado)).catch((erro) => {
            Logger.error("Erro ao iniciar o servidor " + err)
            NovaTentativa(erro)
        })
    }, 5000)
}

export { StartServer }




