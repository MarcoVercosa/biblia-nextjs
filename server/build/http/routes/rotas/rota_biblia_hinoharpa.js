"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotasHinoHarpa = void 0;
const RotasHinoHarpa = require("express").Router();
exports.RotasHinoHarpa = RotasHinoHarpa;
const checkorigem_1 = require("../../../services/middleware/checkorigem");
const index_1 = require("../../../useCases/hinoHarpa/hinoHarpaNumeros/index");
const index_2 = require("../../../useCases/hinoHarpa/hinoHarpaTitulo/index");
const index_3 = require("../../../useCases/hinoHarpa/hinoHarpaBuscaPorPalavra/index");
const createLogs_1 = require("../../../services/logs/createLogs");
// =========== HINO HARPA  ===========
//busca somente os numeros de todos os hinos
RotasHinoHarpa.get("/buscanumeroharpa", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    createLogs_1.Logger.http("Solicitado HINOHARPA na rota /buscanumeroharpa");
    index_1.hinoHarpaNumerosController.Handle(request, response);
});
// solicita retorno da LETRA via número Harpa Cristã
RotasHinoHarpa.get("/buscatitulopornumero/:id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    createLogs_1.Logger.http("Solicitado HINOHARPA na rota /buscatitulopornumero/:id");
    index_2.hinoHarpaTitulosController.Handle(request, response);
});
RotasHinoHarpa.get("/buscatituloporpalavra/:id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    createLogs_1.Logger.http("Solicitado HINOHARPA na rota /buscatituloporpalavra/:id");
    index_3.hinoHarpaBuscaPorPalavraController.Handle(request, response);
});
