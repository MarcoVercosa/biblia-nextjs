"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotaCuriosidades = void 0;
const express_1 = require("express");
const createLogs_1 = require("../../../services/logs/createLogs");
const checkorigem_1 = require("../../../services/middleware/checkorigem");
const index_1 = require("../../../useCases/curiosidades/index");
// =========== CURIOSIDADES =================
let RotaCuriosidades = (0, express_1.Router)();
exports.RotaCuriosidades = RotaCuriosidades;
RotaCuriosidades.get("/buscacuriosidade/:id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    createLogs_1.Logger.http("Solicitado CURIOSIDADES na rota /buscacuriosidade/:id");
    index_1.curiosidadesController.Handle(request, response);
});
