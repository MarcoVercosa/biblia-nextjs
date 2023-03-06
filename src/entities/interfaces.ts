export interface IresultVersao {
    versao_id: number
    versao_nome: string
}

export interface IresultTestamento {
    testamento_id: number
    testamento_nome: string
}

export interface IresultLivros {
    livro_id: string;
    livro_testamento_id: string;
    livro_posicao: string;
    livro_nome: string;
    livro_abreviado: string;
}

export interface IresultCapitulos {
    capitulo: number
}

export interface ISelectFieldOptions {
    versao: string
    versao_id: number,
    testamento: string,
    testamento_id: number,
    livro: string,
    livro_id: number,
    capitulo: string,
    capitulo_id: number,
}

export interface IBuscaConteudoLeitura {
    conteudo: Array<{ conteudo: string }>;
    nomeLivro: Array<{ livro_nome: string, livro_abreviado: string }>;
    quantidadecapitulo: Array<{ capitulo: number }>;
    nomeVersao: Array<{ versao_nome: string; }>
    capituloAtual: number
}

export interface IPropsModalSelectLeitura {
    OpenCloseModal: () => void
}
export interface IFindBibleBySearchAPI {
    capitulo: number;
    livro_abreviado: string;
    versao_id: number;
    livro_id: number;
    livro_nome: string;
    livro_testamento_id: number
    conteudo: string;
    versiculo: number
}


export interface IPropsReadingPanelHarpaCrista {
    numerosHinosCreateSeletectTag: Array<{ numero: number }>
    conteudoHinoPageCurrent: boolean | Array<{ titulo: string, letra: string }>
    idCanticoURL: number | string
}

export interface IHinoPorPalavra {
    numero: number;
    titulo: string
}

export interface IReadContentHino {
    conteudoHinos: boolean | Array<{ titulo: string, letra: string }>
}
