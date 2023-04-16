"use strict";
//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiberaOrigemRegistraLog = void 0;
const createLogs_1 = require("../logs/createLogs");
function LiberaOrigemRegistraLog(request, response, next) {
    const origem = request.headers.origin || "indefinido";
    createLogs_1.Logger.http("Solicitação recebida da origem " + origem);
    let headersOriginExternal = process.env.headersOriginExternal;
    let headersOriginNext = process.env.headersOriginNext;
    let headersOriginNextExtern = process.env.headersOriginNextExtern;
    if (process.env.NODE_ENV === "development") {
        if (origem.match(/192.168/) || origem.match(/indefi/) || origem.includes("localhost")) {
            next();
        }
        else {
            response.status(403).send("Não permitido");
        }
    }
    else {
        if (origem.includes(headersOriginExternal) || origem.includes(headersOriginNext) || origem.includes("fontedevida.app.br")) {
            next();
        }
        else {
            createLogs_1.Logger.warn(`${origem} não permitido`);
            response.status(403).send("Não permitido");
        }
    }
}
exports.LiberaOrigemRegistraLog = LiberaOrigemRegistraLog;
