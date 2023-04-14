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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAI = void 0;
const OpenAI = require("express").Router();
exports.OpenAI = OpenAI;
const index_1 = require("../../../useCases/dadosIA/index");
const createLogs_1 = require("../../../services/logs/createLogs");
OpenAI.post("/dataai", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    createLogs_1.Logger.http("Solicitado IA  na rota /dataai");
    index_1.dadosIAController.Handle(request, response);
}));
