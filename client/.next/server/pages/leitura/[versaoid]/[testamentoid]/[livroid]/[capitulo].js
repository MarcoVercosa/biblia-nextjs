(() => {
var exports = {};
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 1994:
/***/ ((module) => {

// Exports
module.exports = {
	"nomeversao": "content_nomeversao___S9ht",
	"livrocapitulo": "content_livrocapitulo__C_gxu",
	"imagevoice": "content_imagevoice__4sQ67",
	"divimagemia": "content_divimagemia__LhvaI",
	"containermenuinformation": "content_containermenuinformation__FGWD_",
	"slidein": "content_slidein__p4xLf",
	"menuinformation": "content_menuinformation__YWrDH",
	"menuinformationimage": "content_menuinformationimage__moIll",
	"content": "content_content__H9cRJ"
};


/***/ }),

/***/ 4663:
/***/ ((module) => {

// Exports
module.exports = {
	"article": "modalFavorite_article__BQqa1",
	"container": "modalFavorite_container__VppjF",
	"buttonClose": "modalFavorite_buttonClose__sbo5e",
	"main": "modalFavorite_main__WcmWj",
	"nomeVersao": "modalFavorite_nomeVersao__dk_nR",
	"livroCapitulo": "modalFavorite_livroCapitulo__wO_Hf",
	"content": "modalFavorite_content__KBKVX",
	"selectCapitulos": "modalFavorite_selectCapitulos__ssYso",
	"inputNotes": "modalFavorite_inputNotes__PwWBi",
	"selectColorContainer": "modalFavorite_selectColorContainer__l4oTR",
	"selectColor": "modalFavorite_selectColor__r0lAF",
	"buttons": "modalFavorite_buttons__ZGPfn",
	"buttonsok": "modalFavorite_buttonsok__YwTsc",
	"buttonsfechar": "modalFavorite_buttonsfechar__WcsjW"
};


/***/ }),

/***/ 4769:
/***/ ((module) => {

// Exports
module.exports = {
	"article": "modalMoreInformationIA_article__PJpUt",
	"container": "modalMoreInformationIA_container__5At3x",
	"buttons": "modalMoreInformationIA_buttons___ZfCu",
	"titulo": "modalMoreInformationIA_titulo__L7viX"
};


/***/ }),

/***/ 9488:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "readingPanel_main__TgOma",
	"slidein": "readingPanel_slidein__8r6s1",
	"articlenavegacao": "readingPanel_articlenavegacao__LusWm",
	"articlenavegacaoseelct": "readingPanel_articlenavegacaoseelct__lrOJD",
	"articlenavegacaoarrow": "readingPanel_articlenavegacaoarrow__kGCjG"
};


/***/ }),

/***/ 5058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LeituraBiblia),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/services/fetch.ts
var fetch = __webpack_require__(9658);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/navbar/COMPnavbar.tsx + 1 modules
var COMPnavbar = __webpack_require__(1008);
// EXTERNAL MODULE: ./src/styles/bible/readingPanel.module.css
var readingPanel_module = __webpack_require__(9488);
var readingPanel_module_default = /*#__PURE__*/__webpack_require__.n(readingPanel_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/bible/COMPReadingContentBibleNotFound.tsx
var COMPReadingContentBibleNotFound = __webpack_require__(8915);
// EXTERNAL MODULE: ./src/styles/bible/content.module.css
var content_module = __webpack_require__(1994);
var content_module_default = /*#__PURE__*/__webpack_require__.n(content_module);
;// CONCATENATED MODULE: ./src/services/saveFavoriteLocalStorage.ts
class SaveFavoriteClass {
    constructor({ data , versiculoSelected , colorNotes , notes , path  }){
        this.data = data;
        this.versiculoSelected = versiculoSelected;
        this.colorNotes = colorNotes;
        this.notes = notes;
        this.path = path;
        this.currentValueStorage = [];
    }
    CheckDuplicate() {
        let checkDuplicated = this.currentValueStorage.some((data)=>data.path == this.path);
        if (checkDuplicated) {
            return true;
        } else {
            return false;
        }
    }
    GetDataLocalStorage() {
        let dataStorage = JSON.parse(localStorage.getItem("favorites"));
        return dataStorage;
    }
    GrowKeyAndSave() {
        this.currentValueStorage.push({
            versaoNome: this.data.nomeVersao[0].versao_nome,
            livroNome: this.data.nomeLivro[0].livro_nome,
            selectedCapitulo: String(this.data.capituloAtual),
            selectectVersiculo: String(this.versiculoSelected),
            contentSelected: this.data.conteudo[this.versiculoSelected - 1].conteudo,
            colorNotes: this.colorNotes,
            notes: this.notes,
            path: this.path
        });
        localStorage.setItem("favorites", JSON.stringify(this.currentValueStorage));
    }
    CreateKeyAndSave() {
        this.currentValueStorage = [
            {
                versaoNome: this.data.nomeVersao[0].versao_nome,
                livroNome: this.data.nomeLivro[0].livro_nome,
                selectedCapitulo: String(this.data.capituloAtual),
                selectectVersiculo: String(this.versiculoSelected),
                contentSelected: this.data.conteudo[this.versiculoSelected - 1].conteudo,
                colorNotes: this.colorNotes,
                notes: this.notes,
                path: this.path
            }
        ];
        localStorage.setItem("favorites", JSON.stringify(this.currentValueStorage));
    }
    SaveDataStorage() {
        try {
            this.currentValueStorage = this.GetDataLocalStorage() //Obtem os dados
            ;
            if (!this.currentValueStorage || this.currentValueStorage.length < 1) {
                this.CreateKeyAndSave() //Se não existir, então crie
                ;
                return "Conteudo criado ! Verifique seu painel 'Favoritos'";
            } else {
                if (this.CheckDuplicate()) {
                    return "Esse conte\xfado j\xe1 est\xe1 em seus favoritos !";
                } //Verifique se nos dados encontrados já existe o valor a ser adicionado
                this.GrowKeyAndSave() //se false, adicione o valor na key já criada                                                  
                ;
                return "Conteudo adicionado junto com seus favoritos existentes. ! Verifique seu painel 'Favoritos'";
            }
        } catch (error) {
            console.log(error);
            return "Ocorreu algum erro ao salvar seus favoritos. Tente novamente em instantes";
        }
    }
}

// EXTERNAL MODULE: ./src/styles/bible/modalFavorite.module.css
var modalFavorite_module = __webpack_require__(4663);
var modalFavorite_module_default = /*#__PURE__*/__webpack_require__.n(modalFavorite_module);
;// CONCATENATED MODULE: ./src/components/bible/modalFavorite.tsx





function ModalFavorite({ data , OpenCloseModal  }) {
    console.log("ModalFavorite");
    const [versiculoSelected, setVersiculoSelected] = (0,external_react_.useState)(1);
    const [colorNotes, setColorNotes] = (0,external_react_.useState)("rgb(255, 255, 255)");
    const inputNotes = (0,external_react_.useRef)();
    const router = (0,router_.useRouter)();
    function CreateSelectOptions() {
        let store = [];
        for(let count = 1; count <= data.conteudo.length; count++){
            store.push(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: count,
                children: count
            }, count));
        }
        return store;
    }
    function ChangeBackGroundColor(value) {
        setColorNotes((prevState)=>prevState = value);
    }
    function Save() {
        console.log(router);
        const notes = inputNotes.current?.value;
        let saveData = new SaveFavoriteClass({
            data,
            versiculoSelected,
            colorNotes,
            notes,
            path: `/leitura/${router.query.versaoid}/${router.query.testamentoid}/${router.query.livroid}/${router.query.capitulo}#${versiculoSelected}`
        });
        let result = saveData.SaveDataStorage();
        alert(result);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: (modalFavorite_module_default()).article,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: (modalFavorite_module_default()).container,
            style: {
                backgroundColor: colorNotes
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (modalFavorite_module_default()).buttonClose,
                    onClick: OpenCloseModal,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "Fechar",
                        src: "/images/moreinformationIA/iconsMenu/closeInfos.png"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (modalFavorite_module_default()).main,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (modalFavorite_module_default()).nomeVersao,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: data.nomeVersao[0].versao_nome
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (modalFavorite_module_default()).livroCapitulo,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    data.nomeLivro[0].livro_nome,
                                    ": ",
                                    versiculoSelected
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (modalFavorite_module_default()).content,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: data.conteudo[versiculoSelected - 1].conteudo
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (modalFavorite_module_default()).selectCapitulos,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                name: "versiculos",
                                value: versiculoSelected,
                                onChange: (evt)=>setVersiculoSelected((prevState)=>prevState = Number(evt.target.value)),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CreateSelectOptions, {})
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (modalFavorite_module_default()).inputNotes,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        name: "Digite",
                        ref: inputNotes,
                        minLength: 2,
                        maxLength: 200,
                        wrap: "soft",
                        placeholder: "Nota sobre o versiculo acima"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (modalFavorite_module_default()).selectColorContainer,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Adicione uma cor"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (modalFavorite_module_default()).selectColor,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (modalFavorite_module_default()).selectColorWhite,
                                    style: {
                                        backgroundColor: "rgba(255, 255, 255)"
                                    },
                                    onClick: ()=>ChangeBackGroundColor("rgba(255, 255, 255, 0.446)")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (modalFavorite_module_default()).selectColorGreen,
                                    style: {
                                        backgroundColor: "rgba(42, 240, 42)"
                                    },
                                    onClick: ()=>ChangeBackGroundColor("rgb(42, 240, 42)")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (modalFavorite_module_default()).selectColorBlue,
                                    style: {
                                        backgroundColor: "rgb(69, 69, 252)"
                                    },
                                    onClick: ()=>ChangeBackGroundColor("rgb(69, 69, 252)")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (modalFavorite_module_default()).selectColorRed,
                                    style: {
                                        backgroundColor: "rgb(255, 75, 75)"
                                    },
                                    onClick: ()=>ChangeBackGroundColor("rgb(255, 75, 75)")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (modalFavorite_module_default()).selectColorOrange,
                                    style: {
                                        backgroundColor: "rgb(247, 176, 45)"
                                    },
                                    onClick: ()=>ChangeBackGroundColor("rgb(247, 176, 45)")
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (modalFavorite_module_default()).buttons,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (modalFavorite_module_default()).buttonsok,
                            onClick: Save,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/modalFavorite/favorite.svg"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (modalFavorite_module_default()).buttonsfechar,
                            onClick: OpenCloseModal,
                            children: "FECHAR "
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/loading/COMPloading.tsx
var COMPloading = __webpack_require__(7031);
// EXTERNAL MODULE: ./src/styles/bible/modalMoreInformationIA.module.css
var modalMoreInformationIA_module = __webpack_require__(4769);
var modalMoreInformationIA_module_default = /*#__PURE__*/__webpack_require__.n(modalMoreInformationIA_module);
;// CONCATENATED MODULE: ./src/components/bible/modalMoreInfoIA.tsx





function ModalMoreInfoIA({ word , OpenCloseModal  }) {
    const [information, setInformation] = (0,external_react_.useState)({
        title: "",
        content: ""
    });
    const [loading, setLoading] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        async function GetDataFromAPI() {
            setLoading(true);
            let response = await (0,fetch/* GetDataFromIA */.W0)(word);
            setInformation((prevState)=>{
                return {
                    ...prevState,
                    title: word,
                    content: response?.response?.result
                };
            });
            setLoading(false);
        }
        GetDataFromAPI();
    }, [
        word
    ]);
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("article", {
            className: (modalMoreInformationIA_module_default()).article,
            children: /*#__PURE__*/ jsx_runtime_.jsx(COMPloading/* default */.Z, {})
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("article", {
            className: (modalMoreInformationIA_module_default()).article,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (modalMoreInformationIA_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (modalMoreInformationIA_module_default()).buttons,
                        onClick: OpenCloseModal,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "Fechar",
                            src: "/images/moreinformationIA/iconsMenu/closeInfos.png"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (modalMoreInformationIA_module_default()).titulo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: information.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: information.content
                            })
                        ]
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./src/components/bible/COMPContentBible.tsx






function Content({ data , anchorURLValue  }) {
    const [openMenuInformation, setOpenMenuInformation] = (0,external_react_.useState)(false);
    const [openCloseModal, setOpenCloseModal] = (0,external_react_.useState)(false);
    const [openCloseFavoriteModal, setOpenCloseFavoriteModal] = (0,external_react_.useState)(false);
    const [wordSelectedMenu, setWordSelectedMenu] = (0,external_react_.useState)("");
    const menuRefClickOutSide = (0,external_react_.useRef)();
    const OpenCloseMenuInformation = ()=>{
        setOpenMenuInformation((prevState)=>!prevState);
    };
    function OpenCloseModal(word) {
        if (!openCloseModal) {
            setWordSelectedMenu(word);
        } //se o openCloseModal já estiver como false, e pq estão solicitando a abertura do modal (para true), então envie o valor do botão selecionado
        setOpenCloseModal(!openCloseModal);
    }
    function OpenCloseFavoriteModal() {
        setOpenCloseFavoriteModal((prevState)=>!prevState);
    }
    (0,external_react_.useEffect)(()=>{
        const checkIfClickedOutside = (e)=>{
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (openMenuInformation && menuRefClickOutSide.current && !menuRefClickOutSide.current.contains(e.target)) {
                setOpenMenuInformation(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return ()=>{
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [
        openMenuInformation
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            openCloseModal && /*#__PURE__*/ jsx_runtime_.jsx(ModalMoreInfoIA, {
                word: wordSelectedMenu,
                OpenCloseModal: OpenCloseModal
            }),
            openCloseFavoriteModal && /*#__PURE__*/ jsx_runtime_.jsx(ModalFavorite, {
                data: data,
                OpenCloseModal: OpenCloseFavoriteModal
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (content_module_default()).nomeversao,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: data?.nomeVersao[0].versao_nome
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (content_module_default()).livrocapitulo,
                ref: menuRefClickOutSide,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            data?.nomeLivro[0].livro_nome,
                            ": ",
                            data?.capituloAtual
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (content_module_default()).divimagemia,
                        onClick: OpenCloseMenuInformation,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/moreinformationIA/information.png",
                                alt: "Menu IA",
                                className: (content_module_default()).imageMoreInformation,
                                fill: true,
                                priority: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (content_module_default()).containermenuinformation,
                                style: {
                                    display: openMenuInformation ? "flex" : "none"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (content_module_default()).menuinformation,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (content_module_default()).menuinformationimage,
                                            onClick: ()=>OpenCloseModal(`Me fale sobre a versão da biblia ${data?.nomeVersao[0].versao_nome}.`),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "Sobre essa vers\xe3o",
                                                    src: "/images/moreinformationIA/iconsMenu/versao.png"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Sobre a vers\xe3o"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (content_module_default()).menuinformationimage,
                                            onClick: ()=>OpenCloseModal(`Me fale sobre o livro de ${data?.nomeLivro[0].livro_nome} da biblia.`),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "Sobre esse livro",
                                                    src: "/images/moreinformationIA/iconsMenu/livro.png"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Sobre o livro"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (content_module_default()).menuinformationimage,
                                            onClick: ()=>OpenCloseModal(`Me fale sobre o capitulo ${data?.capituloAtual} do livro de ${data?.nomeLivro[0].livro_nome} da biblia.`),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "Sobre esse capitulo",
                                                    src: "/images/moreinformationIA/iconsMenu/capitulo.svg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Sobre o capitulo"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (content_module_default()).menuinformationimage,
                                            onClick: ()=>OpenCloseModal(`Me fale 5 curiosidades sobre o livro ${data?.nomeLivro[0].livro_nome} da biblia`),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "Curiosidade",
                                                    src: "/images/moreinformationIA/iconsMenu/curiosidade.png"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Curiosidades sobre o livro"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (content_module_default()).menuinformationimage,
                                            onClick: ()=>OpenCloseFavoriteModal(),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "Favoritar",
                                                    src: "/images/moreinformationIA/iconsMenu/favorite.png"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Favorito"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (content_module_default()).content,
                children: data?.conteudo.map((dados, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        id: (index + 1).toString(),
                        style: {
                            color: anchorURLValue == (index + 1).toString() ? "red" : "black"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    index + 1,
                                    " "
                                ]
                            }),
                            "  - ",
                            dados.conteudo
                        ]
                    }, index);
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/bible/COMPreadingContentBiblePanel.tsx







function ReadingPanel({ data  }) {
    const [comboBox, setComboBox] = (0,external_react_.useState)([]);
    const [comboBoxSelected, setComboBoxSelected] = (0,external_react_.useState)(0);
    const [anchorURLValue, setAnchorURLValue] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        let store = [];
        for(let i = 1; i <= data?.quantidadecapitulo[0]?.capitulo; i++){
            store.push(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                value: i,
                children: i
            }, i));
        }
        setComboBox(store) //armazena o html <option> criado acima
        ;
        setComboBoxSelected(data?.capituloAtual) //deixa o numero do capitulo atual no combobox
        ;
    }, [
        data
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!router.isReady) {
            return;
        } //Se o router ainda não conseguiu carregar os paramns, nao faça nada
        if (router.asPath.split("#").length < 2) {
            return setAnchorURLValue("");
        } //o length será 2 somente se  a url possuir #
        setAnchorURLValue(router.asPath.split("#")[1]);
    // o router asPath pega a url e divide se baseando pelo #
    // a array terá 2 indices se achar o #, ficando no 2 indice [1]  somente o valor do link ancora
    }, [
        router.isReady,
        data
    ]);
    function SelectedComboBox(data) {
        setComboBoxSelected(data);
    }
    function NextPage() {
        if (data?.capituloAtual == data.quantidadecapitulo[0].capitulo) {
            return;
        }
        const { versaoid , testamentoid , livroid  } = router.query //obtem as vars da url dinâmica
        ;
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${data.capituloAtual + 1}`);
    }
    function BeforePage() {
        if (data?.capituloAtual == 1) {
            return;
        }
        const { versaoid , testamentoid , livroid  } = router.query //obtem as vars da url dinâmica
        ;
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${data.capituloAtual - 1}`);
    }
    function SelectPage(page) {
        const { versaoid , testamentoid , livroid  } = router.query //obtem as vars da url dinâmica
        ;
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${page}`);
    }
    if (data?.conteudo.length > 1) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (readingPanel_module_default()).main,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                    data: data,
                    anchorURLValue: anchorURLValue
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                    className: (readingPanel_module_default()).articlenavegacao,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (readingPanel_module_default()).articlenavegacaoarrow,
                            onClick: BeforePage,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/arrowsReading/arrowLeft.png",
                                        alt: "Logo",
                                        width: 100,
                                        height: 50,
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: data?.capituloAtual == 1 ? data?.capituloAtual : data?.capituloAtual - 1
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (readingPanel_module_default()).articlenavegacaoseelct,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                name: "capitulos",
                                value: comboBoxSelected,
                                onChange: (evt)=>{
                                    SelectedComboBox(Number(evt.target.value)), SelectPage(Number(evt.target.value));
                                },
                                children: comboBox
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (readingPanel_module_default()).articlenavegacaoarrow,
                            onClick: NextPage,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: data?.capituloAtual == data?.quantidadecapitulo[0].capitulo ? data?.capituloAtual : data?.capituloAtual + 1
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/arrowsReading/arrowRight.png",
                                        alt: "Logo",
                                        width: 100,
                                        height: 50,
                                        priority: true
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: (readingPanel_module_default()).main,
            children: /*#__PURE__*/ jsx_runtime_.jsx(COMPReadingContentBibleNotFound/* default */.Z, {})
        });
    }
}

// EXTERNAL MODULE: ./src/components/footer/COMPfooter.tsx
var COMPfooter = __webpack_require__(2226);
;// CONCATENATED MODULE: ./src/pages/leitura/[versaoid]/[testamentoid]/[livroid]/[capitulo]/index.tsx








const versao = 1 // somente a Almeida revisada e atualizada
;
const antigoTestamento = 1;
const livrosAntigoTestamento = 39;
const novoTestamento = 2;
const livroNovotestamento = 66 //todos os livros Antigo e novo testamentos
;
function LeituraBiblia({ data  }) {
    const router = (0,router_.useRouter)();
    if (!data || router.isFallback) {
        //mesmo se não houver dados , será respondido um objecto com a pesquisa solicitada, só q com a key "conteudo" vazia
        //fazendo com q mesmo  não havendo conteudo, com a resposta o data fique verdadeiro
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(COMPnavbar/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(COMPloading/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(COMPfooter/* default */.Z, {})
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            data?.conteudo?.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            data?.nomeLivro[0]?.livro_nome,
                            " ",
                            data?.capituloAtual,
                            " - ",
                            data?.nomeVersao[0].versao_nome,
                            " - Fonte de vida"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `${data?.conteudo[0]?.conteudo.substring(0, 115)} ...`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(COMPnavbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ReadingPanel, {
                data: data
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(COMPfooter/* default */.Z, {})
        ]
    });
}
const getStaticPaths = async ()=>{
    let paths = [];
    try {
        for(let testamento = 1; testamento <= antigoTestamento; testamento++){
            for(var livros = 1; livros <= livrosAntigoTestamento; livros++){
                let fetchCapitulos = await (0,fetch/* FetchAPICapitulosServerSide */.DN)(versao, livros) //obtem a quantidade exata de capitulos do livro da vez
                ;
                for(var capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++){
                    paths.push({
                        params: {
                            versaoid: `${versao}`,
                            testamentoid: `${testamento}`,
                            livroid: `${livros}`,
                            capitulo: `${capitulos}`
                        }
                    });
                }
            }
        }
        //cria paths do NOVO testamento
        for(let testamento = 2; testamento <= novoTestamento; testamento++){
            for(var livros = 40; livros <= livroNovotestamento; livros++){
                let fetchCapitulos = await (0,fetch/* FetchAPICapitulosServerSide */.DN)(versao, livros) //obtem a quantidade exata de capitulos do livro da vez
                ;
                for(var capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++){
                    paths.push({
                        params: {
                            versaoid: `${versao}`,
                            testamentoid: `${testamento}`,
                            livroid: `${livros}`,
                            capitulo: `${capitulos}`
                        }
                    });
                }
            }
        }
        return {
            paths,
            fallback: true
        };
    } catch (err) {
        paths.push({
            params: {
                versaoid: `0`,
                testamentoid: `0`,
                livroid: `0`,
                capitulo: `0`
            }
        });
        return {
            paths,
            fallback: true
        };
    }
};
const getStaticProps = async ({ params  })=>{
    const { versaoid , testamentoid , livroid , capitulo  } = params;
    try {
        let response = await (0,fetch/* FetchConteudoServerSide */.a)(versaoid, testamentoid, livroid, capitulo)//busca conteudo conforme url da página
        ;
        //mesmo se não houver dados , srá respondido m objecto com a pesquis solicitada, só q com a key conteudo vazia
        return {
            props: {
                data: response
            }
        };
    } catch (error) {
        return {
            props: {
                data: []
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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,675,31,915], () => (__webpack_exec__(5058)));
module.exports = __webpack_exports__;

})();