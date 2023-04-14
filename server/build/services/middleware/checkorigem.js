"use strict";
//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiberaOrigemRegistraLog = void 0;
const createLogs_1 = require("../logs/createLogs");
function LiberaOrigemRegistraLog(request, response, next) {
    const origem = request.headers.origin || "indefinido";
    createLogs_1.Logger.http("Solicitação recebida da origem " + origem);
    let originHeader = process.env.headersOrigin;
    if (process.env.NODE_ENV === "development") {
        if (origem.match(/192.168/) || origem.match(/indefi/) || origem.includes("localhost")) {
            next();
        }
        else {
            response.status(403).send("Não permitido");
        }
    }
    else {
        if (origem.includes(originHeader)) {
            next();
        }
        else {
            response.status(403).send("Não permitido");
        }
    }
}
exports.LiberaOrigemRegistraLog = LiberaOrigemRegistraLog;
