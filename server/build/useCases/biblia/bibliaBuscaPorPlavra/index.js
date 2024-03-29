"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bibliaBuscaPorPalavraController = void 0;
const bibliaBuscaPorPalavraUseCase_1 = require("./bibliaBuscaPorPalavraUseCase");
const bibliaBuscaPorPalavraController_1 = require("./bibliaBuscaPorPalavraController");
const bibliaBuscaPorPalavraRepository_1 = require("../../../repositories/biblia/bibliaBuscaPorPalavra/bibliaBuscaPorPalavraRepository");
let bibliaBuscaPorPalavraRepository = new bibliaBuscaPorPalavraRepository_1.BibliaBuscaPorPalavraRepository();
let bibliaBuscaPorPalavraUseCase = new bibliaBuscaPorPalavraUseCase_1.BibliaBuscaPorPalavraUseCase(bibliaBuscaPorPalavraRepository);
let bibliaBuscaPorPalavraController = new bibliaBuscaPorPalavraController_1.BibliaBuscaPorPalavraController(bibliaBuscaPorPalavraUseCase);
exports.bibliaBuscaPorPalavraController = bibliaBuscaPorPalavraController;
