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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.FetchAPICapitulosServerSide = void 0;
var fs = require("fs");
var path = require('path');
var versao = 1; // somente a Almeida revisada e atualizada
var antigoTestamento = 1;
var livrosAntigoTestamento = 39;
var novoTestamento = 2;
var livroNovotestamento = 66; //todos os livros Antigo e novo testamentos
var urlApiDev = 'https://vps45754.publiccloud.com.br:9000';
function FetchAPICapitulosServerSide(versaoID, livroID) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("".concat(urlApiDev, "/mais/buscacapitulo/").concat(versaoID, "/").concat(livroID), {
                            headers: {
                                'Content-Type': 'application/json',
                                'origin': 'http://nextfetchbuild'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!(response.status == 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3: throw new Error("Forbidden or internal error");
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [2 /*return*/, []];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.FetchAPICapitulosServerSide = FetchAPICapitulosServerSide;
function MountFileSiteMap() {
    return __awaiter(this, void 0, void 0, function () {
        var testamento, livros, fetchCapitulos, capitulos, testamento, livros, fetchCapitulos, capitulos, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fs.writeFile("siteMapFonteDeVida.xml", "\n<?xml version=\"1.0\"'}'encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">", function (err) {
                        if (err)
                            console.log(err);
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 14, , 15]);
                    testamento = 1;
                    _a.label = 2;
                case 2:
                    if (!(testamento <= antigoTestamento)) return [3 /*break*/, 7];
                    livros = 1;
                    _a.label = 3;
                case 3:
                    if (!(livros <= livrosAntigoTestamento)) return [3 /*break*/, 6];
                    return [4 /*yield*/, FetchAPICapitulosServerSide(versao, livros)]; //obtem a quantidade exata de capitulos do livro da vez
                case 4:
                    fetchCapitulos = _a.sent() //obtem a quantidade exata de capitulos do livro da vez
                    ;
                    for (capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++) { //para cada capitulo encontrado
                        fs.writeFile(path.resolve("siteMapFonteDeVida.xml"), "\n<url>\n<loc>https://fontedevida.app.br/leitura/".concat(versao, "/").concat(testamento, "/").concat(livros, "/").concat(capitulos, "</loc>\n<lastmod>2023-04-26T18:35:03+01:00</lastmod>\n<priority>0.8</priority>\n</url>"), { flag: "a" }, function (err) {
                            if (err)
                                console.log(err);
                            ;
                        });
                    }
                    _a.label = 5;
                case 5:
                    livros++;
                    return [3 /*break*/, 3];
                case 6:
                    testamento++;
                    return [3 /*break*/, 2];
                case 7:
                    testamento = 2;
                    _a.label = 8;
                case 8:
                    if (!(testamento <= novoTestamento)) return [3 /*break*/, 13];
                    livros = 40;
                    _a.label = 9;
                case 9:
                    if (!(livros <= livroNovotestamento)) return [3 /*break*/, 12];
                    return [4 /*yield*/, FetchAPICapitulosServerSide(versao, livros)]; //obtem a quantidade exata de capitulos do livro da vez
                case 10:
                    fetchCapitulos = _a.sent() //obtem a quantidade exata de capitulos do livro da vez
                    ;
                    for (capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++) { //para cada capitulo encontrado
                        fs.writeFile(path.resolve("siteMapFonteDeVida.xml"), "\n<url>\n<loc>https://fontedevida.app.br/leitura/".concat(versao, "/").concat(testamento, "/").concat(livros, "/").concat(capitulos, "</loc>\n<lastmod>2023-04-26T18:35:03+01:00</lastmod>\n<priority>0.8</priority>\n</url>"), { flag: "a" }, function (err) {
                            if (err)
                                console.log(err);
                            ;
                        });
                    }
                    _a.label = 11;
                case 11:
                    livros++;
                    return [3 /*break*/, 9];
                case 12:
                    testamento++;
                    return [3 /*break*/, 8];
                case 13:
                    fs.writeFile("siteMapFonteDeVida.xml", "\n</urlset>", { flag: "a" }, function (err) {
                        if (err)
                            console.log(err);
                    });
                    return [3 /*break*/, 15];
                case 14:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    });
}
MountFileSiteMap();
