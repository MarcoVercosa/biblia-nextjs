//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   

import { Request, Response, NextFunction } from "express"
import { Logger } from "../logs/createLogs"
function LiberaOrigemRegistraLog(request: Request, response: Response, next: NextFunction) {

    const origem: string = request.headers.origin || "indefinido"
    Logger.http("Solicitação recebida da origem " + origem)
    let headersOriginExternal: string = process.env.headersOriginExternal as string
    let headersOriginNextExternal: string = process.env.headersOriginNextExternal as string

    if (process.env.NODE_ENV === "development") {
        if (origem.match(/192.168/) || origem.match(/indefi/) || origem.includes("localhost") || origem.includes("nextfetchbuild")) {
            next()
        } else {
            response.status(403).send("Não permitido")
        }

    } else {
        if (origem.includes(headersOriginExternal) || origem.includes(headersOriginNextExternal)) {
            next()
        } else {
            Logger.warn(`${origem} não permitido`)
            response.status(403).send("Não permitido")
        }
    }













}

export { LiberaOrigemRegistraLog }