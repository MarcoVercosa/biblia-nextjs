"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
require('dotenv').config();
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express = require("express");
let router = express();
exports.router = router;
const cors = require('cors');
const rota_biblia_hinoharpa_1 = require("./rotas/rota_biblia_hinoharpa");
const rota_biblia_curiosidades_1 = require("./rotas/rota_biblia_curiosidades");
const rota_Biblia_Conteudo_1 = require("./rotas/rota_Biblia_Conteudo");
const rotaIA_1 = require("./rotas/rotaIA");
const swagger_json_1 = __importDefault(require("../../doc/swagger.json"));
const createLogs_1 = require("../../services/logs/createLogs");
router.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,HEAD,POST");
    res.header("Access-Control-Allow-Headers", "Content-Type,Accept");
    router.use(cors());
    next();
});
router.use("/curiosidades", rota_biblia_curiosidades_1.RotaCuriosidades);
router.use("/mais", rota_Biblia_Conteudo_1.RotasBibliaConteudo);
router.use("/hinoharpa", rota_biblia_hinoharpa_1.RotasHinoHarpa);
router.use("/ai", rotaIA_1.OpenAI);
if (process.env.NODE_ENV === "development") {
    createLogs_1.Logger.http("Swagger ON");
    router.use("/api-documentation", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
}
else {
    createLogs_1.Logger.http("Swagger OFF");
}
