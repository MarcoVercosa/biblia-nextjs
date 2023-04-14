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
exports.DadosIAController = void 0;
const createLogs_1 = require("../../services/logs/createLogs");
class DadosIAController {
    constructor(dadosIAUseCase) {
        this.dadosIAUseCase = dadosIAUseCase;
    }
    Handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const askedToAI = request.body.askedToAI || '';
            const pass = request.body.pass || '';
            try {
                if (pass != "x?-re_3k4wrO#*zadEsp+pho+i!lswut_@f!suben2c9u4r$9es2&r666ath_0oysp+pho+i!lswut_x?-re_3k4wrO#*zadEsp+pho+i!lswut_-re_3k4wrO#*zadEsp+pho+i!lswut") {
                    throw `Not authorized`;
                }
                let resultado = yield this.dadosIAUseCase.Execute(askedToAI);
                return response.status(resultado.response.status).json({ response: resultado.response });
            }
            catch (error) {
                createLogs_1.Logger.error("OPENIA: " + error);
                return response.status(401).json({
                    response: {
                        message: error,
                        status: 401,
                        result: []
                    }
                });
            }
        });
    }
}
exports.DadosIAController = DadosIAController;
