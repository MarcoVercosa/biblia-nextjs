exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 5373:
/***/ ((module) => {

// Exports
module.exports = {
	"footerfooter": "footer_footerfooter__HUrcR",
	"footerUl": "footer_footerUl__Ujm7Q",
	"footerMavs": "footer_footerMavs__3vvnD"
};


/***/ }),

/***/ 9866:
/***/ ((module) => {

// Exports
module.exports = {
	"backgroundeffectmodal": "modalSelectLeitura_backgroundeffectmodal__bqAU_",
	"modalcontainer": "modalSelectLeitura_modalcontainer__rxyeA",
	"modalTitulo": "modalSelectLeitura_modalTitulo__D7ElE",
	"modalmain": "modalSelectLeitura_modalmain__TiBQr",
	"modalopcoes": "modalSelectLeitura_modalopcoes__Y9RqC",
	"selectlabel": "modalSelectLeitura_selectlabel__CQbQJ",
	"modalopcoesversao": "modalSelectLeitura_modalopcoesversao__rlNqE",
	"modalopcoestestamento": "modalSelectLeitura_modalopcoestestamento__parVy",
	"modalopcoeslivro": "modalSelectLeitura_modalopcoeslivro__uEeJ_",
	"modalopcoescapitulo": "modalSelectLeitura_modalopcoescapitulo__uBALN",
	"buttons": "modalSelectLeitura_buttons__5Ah0i",
	"buttonsok": "modalSelectLeitura_buttonsok__T3Qpl",
	"buttonsfechar": "modalSelectLeitura_buttonsfechar__gpUe1"
};


/***/ }),

/***/ 8549:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "navbar_main__TfJIr",
	"menuBotton": "navbar_menuBotton__3gO7k",
	"imageButtonMenu": "navbar_imageButtonMenu__yFdRt",
	"menu": "navbar_menu___oosq",
	"slidein": "navbar_slidein__OuqNB",
	"menuIcons": "navbar_menuIcons__1XLOv",
	"imageMenu": "navbar_imageMenu__2O8LS",
	"contentLeft": "navbar_contentLeft__05O8X",
	"slideinTitle": "navbar_slideinTitle__L40bO",
	"imagediv": "navbar_imagediv__19TT8",
	"imagedivimage": "navbar_imagedivimage__Ikm1r",
	"searchMenu": "navbar_searchMenu__4o4dB"
};


/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_footer_footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5373);
/* harmony import */ var _styles_footer_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_styles_footer_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footerfooter),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: (_styles_footer_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footerUl),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: (_styles_footer_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().Mavs),
                    children: "Developer by: MAVS"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "\xa9 2022 - 2023"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Todos os direitos reservados"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Footer));


/***/ }),

/***/ 1008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ COMPnavbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/navbar/navbar.module.css
var navbar_module = __webpack_require__(8549);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/styles/navbar/modalSelectLeitura.module.css
var modalSelectLeitura_module = __webpack_require__(9866);
var modalSelectLeitura_module_default = /*#__PURE__*/__webpack_require__.n(modalSelectLeitura_module);
// EXTERNAL MODULE: ./src/services/fetch.ts
var fetch = __webpack_require__(9658);
;// CONCATENATED MODULE: ./src/components/navbar/COMPmodalSelectLeitura.tsx






function ModalSelectLeitura({ OpenCloseModal  }) {
    const [versao, setVersao] = (0,external_react_.useState)();
    const [testamento, setTestamento] = (0,external_react_.useState)();
    const [livros, setLivros] = (0,external_react_.useState)([]);
    const [capitulo, setCapitulo] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        async function FindDataAPIModalMenu() {
            let preRenderVersaoOpcoes = await (0,fetch/* FetchAPIVersaoClientSide */.Ak)();
            let preRenderTestamentoOpcoes = await (0,fetch/* FetchAPITestamentoClientSide */._H)();
            setVersao(preRenderVersaoOpcoes);
            setTestamento(preRenderTestamentoOpcoes);
        }
        FindDataAPIModalMenu();
    }, []);
    const [selectedField, setSelectedField] = (0,external_react_.useState)({
        versao: "selecione",
        versao_id: 0,
        testamento: "selecione",
        testamento_id: 0,
        livro: "selecione",
        livro_id: 0,
        capitulo: "selecione",
        capitulo_id: 0
    });
    const router = (0,router_.useRouter)();
    function UpdateSelectedFields(field, value, keyName, keyValue) {
        setSelectedField((prevState)=>{
            return {
                ...prevState,
                [field]: value,
                [keyName]: keyValue
            };
        });
    }
    async function ClickTestamento(valueIdTestamento) {
        let response = await (0,fetch/* FetchAPILivros */.UQ)(Number(valueIdTestamento));
        setLivros(response);
        setCapitulo([]);
        setSelectedField((prevState)=>{
            return {
                ...prevState,
                capitulo: "selecione",
                capitulo_id: 0,
                livro: "selecione",
                livro_id: 0
            };
        }) //ao alterar o testamento, volta para o padrão os campos selecionados Livro e capitulo
        ;
    }
    async function ClickLivro(livroIDSelect) {
        if (Number(livroIDSelect) != 0) {
            let response = await (0,fetch/* FetchAPICapitulos */.J9)(selectedField.versao_id, livroIDSelect);
            let component = [];
            for(let i = 1; i <= response[0].capitulo; i++){
                component.push(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                    value: i,
                    children: i
                }, i));
            } //cria o componente conforme o numero de capitulos
            setCapitulo(component);
            setSelectedField((prevState)=>{
                return {
                    ...prevState,
                    capitulo: "selecione",
                    capitulo_id: 0
                };
            }) //ao alterar o Livro, volta para o padrão o campo selecionado capitulo 
            ;
        } else {
            setSelectedField((prevState)=>{
                return {
                    ...prevState,
                    capitulo: "selecione",
                    capitulo_id: 0
                };
            });
        } //ao alterar o Livro, volta para o padrão o campo selecionado capitulo 
    }
    function GoBible() {
        if (selectedField.versao != "selecione" && selectedField.testamento != "selecione" && selectedField.livro != "selecione" && selectedField.capitulo != "selecione") {
            OpenCloseModal();
            router.push(`/leitura/${selectedField.versao_id}/${selectedField.testamento_id}/${selectedField.livro_id}/${selectedField.capitulo_id}`);
        } else {
            alert("Selecione todos os campos antes de iniciar a leitura");
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (modalSelectLeitura_module_default()).backgroundeffectmodal,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            className: (modalSelectLeitura_module_default()).modalcontainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (modalSelectLeitura_module_default()).modalTitulo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Selecione suas op\xe7\xf5es"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (modalSelectLeitura_module_default()).modalmain,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (modalSelectLeitura_module_default()).modalopcoes,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (modalSelectLeitura_module_default()).modalopcoesversao,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (modalSelectLeitura_module_default()).selectlabel,
                                            children: "Vers\xe3o"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            name: "versao",
                                            value: selectedField.versao,
                                            onChange: (evt)=>{
                                                UpdateSelectedFields("versao", evt.target.value, "versao_id", evt.target.value);
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "selecione",
                                                    disabled: true,
                                                    children: "Selecione"
                                                }),
                                                versao && versao.map((data)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: data.versao_id,
                                                        children: data.versao_nome
                                                    }, data.versao_id);
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (modalSelectLeitura_module_default()).modalopcoestestamento,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (modalSelectLeitura_module_default()).selectlabel,
                                            children: "Testamento"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            name: "testamento",
                                            value: selectedField.testamento,
                                            disabled: selectedField.versao == "selecione",
                                            onChange: (evt)=>{
                                                UpdateSelectedFields("testamento", evt.target.value, "testamento_id", evt.target.value), ClickTestamento(evt.target.value);
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "selecione",
                                                    disabled: true,
                                                    children: "Selecione"
                                                }),
                                                testamento && testamento.map((data)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: data.testamento_id,
                                                        children: data.testamento_nome
                                                    }, data.testamento_id);
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (modalSelectLeitura_module_default()).modalopcoeslivro,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (modalSelectLeitura_module_default()).selectlabel,
                                            children: "Livro"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            name: "livro",
                                            value: selectedField.livro,
                                            disabled: selectedField.testamento == "selecione",
                                            onChange: (evt)=>{
                                                UpdateSelectedFields("livro", evt.target.value, "livro_id", evt.target.value), ClickLivro(evt.target.value);
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "selecione",
                                                    children: "Selecione"
                                                }),
                                                livros && livros.map((dataLivro)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: dataLivro.livro_id,
                                                        children: dataLivro.livro_nome
                                                    }, dataLivro.livro_id);
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (modalSelectLeitura_module_default()).modalopcoescapitulo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (modalSelectLeitura_module_default()).selectlabel,
                                            children: "Cap\xedtulo"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            name: "capitulo",
                                            value: selectedField.capitulo,
                                            disabled: selectedField.livro == "selecione",
                                            onChange: (evt)=>{
                                                UpdateSelectedFields("capitulo", evt.target.value, "capitulo_id", evt.target.value);
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "selecione",
                                                    children: "Selecione"
                                                }),
                                                capitulo && capitulo
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (modalSelectLeitura_module_default()).buttons,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (modalSelectLeitura_module_default()).buttonsok,
                                    onClick: GoBible,
                                    children: "OK"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (modalSelectLeitura_module_default()).buttonsfechar,
                                    onClick: OpenCloseModal,
                                    children: "FECHAR "
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/navbar/COMPnavbar.tsx







function NavBar() {
    const [menu, setMenu] = (0,external_react_.useState)(false);
    const [modal, setModal] = (0,external_react_.useState)(false);
    const inputSearchRef = (0,external_react_.useRef)();
    const menuRefClickOutSide = (0,external_react_.useRef)();
    const OpenMenu = ()=>setMenu(!menu);
    const OpenCloseModal = ()=>setModal(!modal);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const checkIfClickedOutside = (e)=>{
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (menu && menuRefClickOutSide.current && !menuRefClickOutSide.current.contains(e.target)) {
                setMenu(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return ()=>{
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [
        menu
    ]);
    function GoSearchByWord(value) {
        if (value != "Enter") {
            return;
        }
        let word = inputSearchRef.current?.value;
        if (word.length < 2 || word.length > 15) {
            return alert("Caracteres: min 2 e max 15");
        }
        router.push(`/pesquisabiblia/${word}`);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            modal && /*#__PURE__*/ jsx_runtime_.jsx(ModalSelectLeitura, {
                OpenCloseModal: OpenCloseModal
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: (navbar_module_default()).main,
                ref: menuRefClickOutSide,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).menuBotton,
                        onClick: ()=>OpenMenu(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: menu ? "/images/iconsMenu/closeMenu.png" : "/images/iconsMenu/openMenu.png",
                            alt: "menu",
                            className: (navbar_module_default()).imageButtonMenu,
                            width: 70,
                            height: 50,
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).menu,
                        style: {
                            display: menu ? "block" : "none"
                        },
                        onClick: ()=>OpenMenu(),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (navbar_module_default()).menuIcons,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/iconsMenu/home.png",
                                            alt: "Home",
                                            className: (navbar_module_default()).imageMenu,
                                            width: 80,
                                            height: 60,
                                            priority: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: OpenCloseModal,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/iconsMenu/bible.png",
                                        alt: "biblia",
                                        className: (navbar_module_default()).imageMenu,
                                        width: 90,
                                        height: 60,
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/harpacrista/${Math.floor(Math.random() * (524 - 1 + 1)) + 1}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/iconsMenu/music.png",
                                            alt: "biblia",
                                            className: (navbar_module_default()).imageMenu,
                                            width: 80,
                                            height: 60,
                                            priority: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/favoritos",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/iconsMenu/favorite.png",
                                            alt: "favoritos",
                                            className: (navbar_module_default()).imageMenu,
                                            width: 80,
                                            height: 60,
                                            priority: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/iconsMenu/about.png",
                                            alt: "sobre",
                                            className: (navbar_module_default()).imageMenu,
                                            width: 80,
                                            height: 60,
                                            priority: true
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (navbar_module_default()).contentLeft,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "FONTE DE VIDA on line"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (navbar_module_default()).imagediv,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/menu/image.png",
                                    alt: "Logoleaodejuda",
                                    className: (navbar_module_default()).imagedivimage,
                                    fill: true,
                                    priority: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).searchMenu,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            name: "Digite",
                            ref: inputSearchRef,
                            minLength: 2,
                            maxLength: 15,
                            placeholder: "Press enter to search",
                            onKeyDown: (evt)=>{
                                GoSearchByWord(evt.key);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const COMPnavbar = (/*#__PURE__*/(0,external_react_.memo)(NavBar));


/***/ }),

/***/ 9658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ak": () => (/* binding */ FetchAPIVersaoClientSide),
/* harmony export */   "DN": () => (/* binding */ FetchAPICapitulosServerSide),
/* harmony export */   "J9": () => (/* binding */ FetchAPICapitulos),
/* harmony export */   "Sd": () => (/* binding */ FetchConteudoHarpaServerSide),
/* harmony export */   "UQ": () => (/* binding */ FetchAPILivros),
/* harmony export */   "W0": () => (/* binding */ GetDataFromIA),
/* harmony export */   "_H": () => (/* binding */ FetchAPITestamentoClientSide),
/* harmony export */   "a": () => (/* binding */ FetchConteudoServerSide),
/* harmony export */   "qi": () => (/* binding */ FetchSelectNumeroHarpaServerSide),
/* harmony export */   "qz": () => (/* binding */ FindBibleBySearchAPIClientSide),
/* harmony export */   "td": () => (/* binding */ FetchConteudoHinoBySearchClientSide)
/* harmony export */ });
/* unused harmony export FetchConteudo */
//const urlApiDev = 'http://192.168.15.143:9000'
const urlApiDev = "http://172.20.0.3:9000";
const urlApiProd = "http://...";
const pass = "x?-re_3k4wrO#*zadEsp+pho+i!lswut_@f!suben2c9u4r$9es2&r666ath_0oysp+pho+i!lswut_x?-re_3k4wrO#*zadEsp+pho+i!lswut_-re_3k4wrO#*zadEsp+pho+i!lswut";
async function FetchAPIVersaoClientSide() {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscaversao`);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Forbidden or error");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchAPITestamentoClientSide() {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscatestamento`);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Forbidden or internal error");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchAPILivros(testamentoID) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscalivros/${testamentoID}`);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Forbidden or internal error");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchAPICapitulos(versaoID, livroID) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscacapitulo/${versaoID}/${livroID}`);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Forbidden or internal error");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchConteudo(versaoID, testamentoID, livroId, capitulo) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscaconteudo/${versaoID}/${testamentoID}/${livroId}/${capitulo}`);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Forbidden or internal error");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchAPICapitulosServerSide(versaoID, livroID) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscacapitulo/${versaoID}/${livroID}`, {
            headers: {
                "Content-Type": "application/json",
                "origin": "http://localhost"
            }
        });
        if (response.status == 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Forbidden or internal error");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchConteudoServerSide(versaoID, testamentoID, livroId, capitulo) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscaconteudo/${versaoID}/${testamentoID}/${livroId}/${capitulo}`, {
            headers: {
                "Content-Type": "application/json",
                "origin": "http://localhost"
            }
        });
        if (response.status == 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Forbidden or internal error");
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FindBibleBySearchAPIClientSide(value) {
    try {
        const response = await fetch(`${urlApiDev}/mais/pesquisa/${value}`);
        let data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}
async function FetchSelectNumeroHarpaServerSide() {
    try {
        const response = await fetch(`${urlApiDev}/hinoharpa/buscanumeroharpa`, {
            headers: {
                "Content-Type": "application/json",
                "origin": "http://localhost"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchConteudoHarpaServerSide(value) {
    try {
        const response = await fetch(`${urlApiDev}/hinoharpa/buscatitulopornumero/${value}`, {
            headers: {
                "Content-Type": "application/json",
                "origin": "http://localhost"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
async function FetchConteudoHinoBySearchClientSide(searchWordField) {
    try {
        const response = await fetch(`${urlApiDev}/hinoharpa/buscatituloporpalavra/${searchWordField}`);
        let data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}
async function GetDataFromIA(word) {
    try {
        const response = await fetch(`${urlApiDev}/ai/dataai`, {
            method: "POST",
            body: JSON.stringify({
                askedToAI: word,
                pass: pass
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        let data = await response.json();
        if (data?.response?.status != 200) {
            throw new Error(`Resposta da request => ${data?.response?.status} `);
        }
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}


/***/ })

};
;