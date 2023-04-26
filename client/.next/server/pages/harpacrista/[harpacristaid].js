(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 5991:
/***/ ((module) => {

// Exports
module.exports = {
	"contentSeachByWord": "COMPReadingContentHarpaBySearch_contentSeachByWord__RwYHg",
	"slidein": "COMPReadingContentHarpaBySearch_slidein__Ugp2o",
	"container": "COMPReadingContentHarpaBySearch_container__nSOAU",
	"imagemHino": "COMPReadingContentHarpaBySearch_imagemHino__Pzl5w"
};


/***/ }),

/***/ 7200:
/***/ ((module) => {

// Exports
module.exports = {
	"tituloEContentHino": "harpaCristaContent_tituloEContentHino__i5VNY",
	"slidein": "harpaCristaContent_slidein__nkhJ_",
	"tituloHino": "harpaCristaContent_tituloHino__KIxGy",
	"conteudoHino": "harpaCristaContent_conteudoHino__bE3xk"
};


/***/ }),

/***/ 1255:
/***/ ((module) => {

// Exports
module.exports = {
	"errorHinoArticle": "harpaCristaHinoNotFoundByWord_errorHinoArticle__2RZm4",
	"slidein": "harpaCristaHinoNotFoundByWord_slidein__sQALv",
	"divImage": "harpaCristaHinoNotFoundByWord_divImage__RIUgl",
	"message": "harpaCristaHinoNotFoundByWord_message__fsssg"
};


/***/ }),

/***/ 4687:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "readingPanelHarpaCrista_main__dqCYC",
	"slidein": "readingPanelHarpaCrista_slidein__FS8Lz",
	"buscarPorSelect": "readingPanelHarpaCrista_buscarPorSelect__F97Vi",
	"buscarPorPalavra": "readingPanelHarpaCrista_buscarPorPalavra___JzVI",
	"select": "readingPanelHarpaCrista_select__wzlFD"
};


/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HarpaCrista),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/navbar/COMPnavbar.tsx + 1 modules
var COMPnavbar = __webpack_require__(1008);
// EXTERNAL MODULE: ./src/components/footer/COMPfooter.tsx
var COMPfooter = __webpack_require__(2226);
// EXTERNAL MODULE: ./src/services/fetch.ts
var fetch = __webpack_require__(9658);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/harpa/readingPanelHarpaCrista.module.css
var readingPanelHarpaCrista_module = __webpack_require__(4687);
var readingPanelHarpaCrista_module_default = /*#__PURE__*/__webpack_require__.n(readingPanelHarpaCrista_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/harpa/harpaCristaHinoNotFoundByWord.module.css
var harpaCristaHinoNotFoundByWord_module = __webpack_require__(1255);
var harpaCristaHinoNotFoundByWord_module_default = /*#__PURE__*/__webpack_require__.n(harpaCristaHinoNotFoundByWord_module);
;// CONCATENATED MODULE: ./src/components/harpa/COMPharpaCristaHinoNotFoundByWord.tsx



function HinoNotFoundByWord({ searchWordField  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            className: (harpaCristaHinoNotFoundByWord_module_default()).errorHinoArticle,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (harpaCristaHinoNotFoundByWord_module_default()).divImage,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/images/readingHinoHarpa/hinoNotFound.svg",
                        alt: "nao encontrado",
                        className: (harpaCristaHinoNotFoundByWord_module_default()).imageErro,
                        fill: true,
                        priority: true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (harpaCristaHinoNotFoundByWord_module_default()).message,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Nenhum hino foi encontrado com a palavra pesquisada: "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: searchWordField
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/styles/harpa/harpaCristaContent.module.css
var harpaCristaContent_module = __webpack_require__(7200);
var harpaCristaContent_module_default = /*#__PURE__*/__webpack_require__.n(harpaCristaContent_module);
;// CONCATENATED MODULE: ./src/components/harpa/COMPharpaCristaContent.tsx



function ReadContentHino({ conteudoHinos  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: (harpaCristaContent_module_default()).tituloEContentHino,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (harpaCristaContent_module_default()).tituloHino,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: conteudoHinos[0]?.titulo
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (harpaCristaContent_module_default()).conteudoHino,
                children: conteudoHinos[0]?.letra.split("%").map((recebe, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: recebe
                    }, index);
                })
            })
        ]
    });
}
/* harmony default export */ const COMPharpaCristaContent = (/*#__PURE__*/(0,external_react_.memo)(ReadContentHino));

// EXTERNAL MODULE: ./src/styles/harpa/COMPReadingContentHarpaBySearch.module.css
var COMPReadingContentHarpaBySearch_module = __webpack_require__(5991);
var COMPReadingContentHarpaBySearch_module_default = /*#__PURE__*/__webpack_require__.n(COMPReadingContentHarpaBySearch_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/harpa/COMPReadingContentHarpaBySearch.tsx





function ReadingContentHarpaBySearch({ searchWordResultContent  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: (COMPReadingContentHarpaBySearch_module_default()).contentSeachByWord,
        children: searchWordResultContent.map((data, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    "                        ",
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (COMPReadingContentHarpaBySearch_module_default()).container,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: `/harpacrista/${data?.numero}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (COMPReadingContentHarpaBySearch_module_default()).imagemHino,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/readingHinoHarpa/hinoFound.svg",
                                        alt: "nao encontrado",
                                        className: (COMPReadingContentHarpaBySearch_module_default()).imageErro,
                                        fill: true,
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (COMPReadingContentHarpaBySearch_module_default()).NumeroHinoSearch,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: data?.numero
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (COMPReadingContentHarpaBySearch_module_default()).TituloHinoSearch,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: data.titulo
                                    }, index)
                                })
                            ]
                        })
                    })
                ]
            });
        })
    });
}
/* harmony default export */ const COMPReadingContentHarpaBySearch = (/*#__PURE__*/(0,external_react_.memo)(ReadingContentHarpaBySearch));

// EXTERNAL MODULE: ./src/components/loading/COMPloading.tsx
var COMPloading = __webpack_require__(7031);
;// CONCATENATED MODULE: ./src/components/harpa/COMPReadingPanelHarpaCrista.tsx









function ReadingPanelHarpaCrista({ numerosHinosCreateSeletectTag , conteudoHinoPageCurrent , idCanticoURL  }) {
    const [numerosHinos, setNumerosHinos] = (0,external_react_.useState)(numerosHinosCreateSeletectTag);
    const [conteudoHinos, setConteudoHinos] = (0,external_react_.useState)(conteudoHinoPageCurrent);
    const [selectedHino, setSelectedHino] = (0,external_react_.useState)("Selecione");
    const searchWordFieldREF = (0,external_react_.useRef)();
    const [searchWordResultContent, setSearchWordResultContent] = (0,external_react_.useState)([]);
    const [searchWordResultContentError, setSearchWordResultContentError] = (0,external_react_.useState)(false);
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setConteudoHinos(conteudoHinoPageCurrent) //atualzia conteudo do hino
        ;
        setNumerosHinos(numerosHinosCreateSeletectTag) //atualzia array de numeros dos hinos
        ;
        setSelectedHino(idCanticoURL?.toString()) //atualiza o id pesquisado vindo da URL
        ;
        setSearchWordResultContentError(false) // false para se houver componente de palavra não encontrada na tela, não renderizar
        ;
        setSearchWordResultContent([]) // se houver dados de pesquisa na tela, forçará a não ser renderizado
        ;
    }, [
        idCanticoURL,
        conteudoHinoPageCurrent
    ]);
    //USE EFFECT= Se um componente atualizar a URL, os componentes abaixo não atualizam. O useEffect força a atualização dos componente se a url/conteudoHino alterar
    function MountSelectComponent() {
        let mount = [];
        for(let i = 1; i <= numerosHinos[0]?.numero; i++){
            mount.push(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: i,
                children: i
            }, i));
        }
        return mount;
    }
    function UpdateSelectedFieldHino(value) {
        setSelectedHino(value);
    }
    function GoHinoSelected() {
        if (selectedHino == "selecione") {
            return;
        } //se o valor é selecione, nao faça nada
        router.push(`/harpacrista/${selectedHino}`);
    }
    async function GoFindHinoBySearch(value) {
        let word = searchWordFieldREF.current?.value;
        if (value != "Enter") {
            return;
        }
        if (word.length > 1 && word.length < 16) {
            try {
                setLoading(true);
                let response = await (0,fetch/* FetchConteudoHinoBySearchClientSide */.td)(word);
                if (response.length < 1) {
                    setConteudoHinos([]) //não renderiza conteudo
                    ;
                    setSelectedHino("selecione") //altera o combobox para selecione
                    ;
                    setSearchWordResultContent([]) //zera resultado de pesquisa por palavra
                    ;
                    setSearchWordResultContentError(word) //ativa componente de erro
                    ;
                    setLoading(false);
                } else {
                    setConteudoHinos([]);
                    setSelectedHino("selecione");
                    setSearchWordResultContent(response);
                    setSearchWordResultContentError(false);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Digite pelo o menos 2 letras");
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (readingPanelHarpaCrista_module_default()).main,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (readingPanelHarpaCrista_module_default()).buscarPorSelect,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (readingPanelHarpaCrista_module_default()).select,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "N\xdaMERO"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    name: "versao",
                                    value: selectedHino,
                                    onChange: (evt)=>UpdateSelectedFieldHino(evt.target.value),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            defaultValue: "selecione",
                                            value: "selecione",
                                            children: "Selecione"
                                        }),
                                        numerosHinos && /*#__PURE__*/ jsx_runtime_.jsx(MountSelectComponent, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: GoHinoSelected,
                                    children: "BUSCAR"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (readingPanelHarpaCrista_module_default()).buscarPorPalavra,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "PALAVRA"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    name: "pesquisahino",
                                    minLength: 2,
                                    maxLength: 15,
                                    placeholder: "Press enter to search",
                                    ref: searchWordFieldREF,
                                    onKeyDown: (evt)=>{
                                        GoFindHinoBySearch(evt.key);
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            loading ? /*#__PURE__*/ jsx_runtime_.jsx(COMPloading/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        children: conteudoHinos && /*#__PURE__*/ jsx_runtime_.jsx(COMPharpaCristaContent, {
                            conteudoHinos: conteudoHinos
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        children: searchWordResultContent.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(COMPReadingContentHarpaBySearch, {
                            searchWordResultContent: searchWordResultContent
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        children: searchWordResultContentError && /*#__PURE__*/ jsx_runtime_.jsx(HinoNotFoundByWord, {
                            searchWordField: searchWordFieldREF.current?.value
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/pages/harpacrista/[harpacristaid]/index.tsx






function HarpaCrista({ numerosHinosCreateSeletectTag , conteudoHinoPageCurrent , idCanticoURL  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            conteudoHinoPageCurrent && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            conteudoHinoPageCurrent[0]?.titulo,
                            " - Hino da Harpa - Fonte de vida"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `${conteudoHinoPageCurrent[0]?.titulo} - ${conteudoHinoPageCurrent[0]?.letra.substring(1, 90)}...`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(COMPnavbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ReadingPanelHarpaCrista, {
                numerosHinosCreateSeletectTag: numerosHinosCreateSeletectTag,
                conteudoHinoPageCurrent: conteudoHinoPageCurrent,
                idCanticoURL: idCanticoURL
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(COMPfooter/* default */.Z, {})
        ]
    });
}
const getStaticPaths = async (context)=>{
    let paths = [];
    let quantidadeHinos = await (0,fetch/* FetchSelectNumeroHarpaServerSide */.qi)() //buscam quantidade de hinos
    ;
    for(let i = 1; i <= quantidadeHinos[0]?.numero; i++){
        paths.push({
            params: {
                harpacristaid: `${i}`
            }
        });
    }
    return {
        paths,
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    let numerosHinosCreateSeletectTag = await (0,fetch/* FetchSelectNumeroHarpaServerSide */.qi)() //buscam quantidade de hinos para gerar o <select> no component filho
    ;
    try {
        if (isNaN(Number(params.harpacristaid))) {
            throw new Error("Params URL. N\xe3o \xe9 possivel converter o ID do Hino para Numero. Provavel parametro inv\xe1lido ou erro desconhecido");
        }
        //linha acima verifica primeiro se o parâmetro pode ser convertido para number. Ajuda a evitar caracteres desconhecidos
        let regex = /^[1-9][0-9]*$/ //Esse REGEX aumenta a segurança verificando se a entrada contém apenas números e começa com um dígito diferente de zero.
        ;
        if (regex.test(params.harpacristaid)) {
            let conteudoHinoPageCurrent = await (0,fetch/* FetchConteudoHarpaServerSide */.Sd)(params.harpacristaid) //busca o conteudo enviando a página atual
            ;
            if (conteudoHinoPageCurrent.length < 1 || conteudoHinoPageCurrent.message) {
                conteudoHinoPageCurrent = false;
            }
            return {
                props: {
                    idCanticoURL: params.harpacristaid,
                    numerosHinosCreateSeletectTag,
                    conteudoHinoPageCurrent
                }
            };
        } else {
            throw new Error("Regras regex getStaticProps Hino harpa n\xe3o aceita ou erro desconhecido");
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                idCanticoURL: "selecione",
                numerosHinosCreateSeletectTag,
                conteudoHinoPageCurrent: false
            }
        };
    }
};


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,675,31], () => (__webpack_exec__(6558)));
module.exports = __webpack_exports__;

})();