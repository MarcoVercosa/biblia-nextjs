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
exports.DadosIAUseCase = void 0;
const openai_1 = require("openai");
const createLogs_1 = require("../../services/logs/createLogs");
require('dotenv').config();
class DadosIAUseCase {
    constructor() { }
    Execute(askeedToAI) {
        return __awaiter(this, void 0, void 0, function* () {
            let apikey = process.env.APIDATAIA || "";
            const configuration = new openai_1.Configuration({
                apiKey: apikey,
            });
            const openai = new openai_1.OpenAIApi(configuration);
            if (!configuration.apiKey) {
                createLogs_1.Logger.error("OpenAI API key not configured, please follow instructions in README.md");
                return {
                    response: {
                        message: "OpenAI API key not configured, please follow instructions in README.md",
                        status: 401,
                        result: []
                    }
                };
            }
            if (askeedToAI.trim().length === 0) {
                createLogs_1.Logger.warn("OpenAI - Please enter a valid question");
                return {
                    response: {
                        message: "Please enter a valid question",
                        status: 406,
                        result: []
                    }
                };
            }
            try {
                const completion = yield openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: askeedToAI,
                    temperature: 0,
                    max_tokens: 400,
                });
                createLogs_1.Logger.http("Resposta OpenAI enviada");
                return {
                    response: {
                        result: completion.data.choices[0].text,
                        status: 200,
                    }
                };
            }
            catch (error) {
                createLogs_1.Logger.error(`Error with OpenAI API request: ${error.message}`);
                if (error.response) {
                    return {
                        response: {
                            message: `Error with OpenAI API request: ${error.message}`,
                            status: 500,
                            result: []
                        }
                    };
                }
                else {
                    createLogs_1.Logger.error(`An error occurred during your request: ${error.message}`);
                    return {
                        response: {
                            message: `An error occurred during your request: ${error.message}`,
                            status: 500,
                            result: []
                        }
                    };
                }
            }
        });
    }
}
exports.DadosIAUseCase = DadosIAUseCase;
