"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dadosIAController = void 0;
const dadosIAUseCase_1 = require("./dadosIAUseCase");
const dadosIAController_1 = require("./dadosIAController");
const dadosIAUseCase = new dadosIAUseCase_1.DadosIAUseCase();
const dadosIAController = new dadosIAController_1.DadosIAController(dadosIAUseCase);
exports.dadosIAController = dadosIAController;
