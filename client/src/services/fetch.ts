import {
    IresultVersao, IresultTestamento,
    IresultLivros, IresultCapitulos, IBuscaConteudoLeitura, IFindBibleBySearchAPI, IHinoPorPalavra, IGetDataFromIA
} from "@/interfaces/interfaces"

let urlAPI: string = ""
process.env.NODE_ENV == "development" ? urlAPI = "https://192.168.15.143:9000" : urlAPI = "https://vps45754.publiccloud.com.br:9000"
const pass = "x?-re_3k4wrO#*zadEsp+pho+i!lswut_@f!suben2c9u4r$9es2&r666ath_0oysp+pho+i!lswut_x?-re_3k4wrO#*zadEsp+pho+i!lswut_-re_3k4wrO#*zadEsp+pho+i!lswut"

export async function FetchAPIVersaoClientSide(): Promise<IresultVersao[]> {
    try {
        const response = await fetch(`${urlAPI}/mais/buscaversao`)
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultVersao[]
        } else { throw new Error("Forbidden or error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPITestamentoClientSide(): Promise<IresultTestamento[] | []> {
    try {
        const response = await fetch(`${urlAPI}/mais/buscatestamento`)
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultTestamento[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPILivros(testamentoID: number): Promise<IresultLivros[] | []> {
    try {
        const response = await fetch(`${urlAPI}/mais/buscalivros/${testamentoID}`)
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultLivros[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPICapitulos(versaoID: string | number, livroID: string | number): Promise<IresultCapitulos[] | []> {
    try {
        const response = await fetch(`${urlAPI}/mais/buscacapitulo/${versaoID}/${livroID}`)
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultCapitulos[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchConteudo(versaoID: string, testamentoID: string, livroId: string, capitulo: string): Promise<IBuscaConteudoLeitura | []> {
    try {
        const response = await fetch(`${urlAPI}/mais/buscaconteudo/${versaoID}/${testamentoID}/${livroId}/${capitulo}`)

        if (response.status == 200) {
            const data = await response.json()
            return data as IBuscaConteudoLeitura
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPICapitulosServerSide(versaoID: string | number, livroID: string | number): Promise<IresultCapitulos[] | []> {
    try {
        const response = await fetch(`${urlAPI}/mais/buscacapitulo/${versaoID}/${livroID}`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://nextfetchbuild'
            }
        })
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultCapitulos[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchConteudoServerSide(versaoID: string, testamentoID: string, livroId: string, capitulo: string): Promise<IBuscaConteudoLeitura | []> {
    try {
        const response = await fetch(`${urlAPI}/mais/buscaconteudo/${versaoID}/${testamentoID}/${livroId}/${capitulo}`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://nextfetchbuild'
            }
        })

        if (response.status == 200) {
            const data = await response.json()
            return data as IBuscaConteudoLeitura
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FindBibleBySearchAPIClientSide(value: string): Promise<IFindBibleBySearchAPI[] | []> {
    try {
        const response = await fetch(`${urlAPI}/mais/pesquisa/${value}`)
        let data = await response.json()
        return data as IFindBibleBySearchAPI[]
    } catch (error) {
        return []
    }
}
export async function FetchSelectNumeroHarpaServerSide() {
    try {
        const response = await fetch(`${urlAPI}/hinoharpa/buscanumeroharpa`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://nextfetchbuild'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchConteudoHarpaServerSide(value: string) {
    try {
        const response = await fetch(`${urlAPI}/hinoharpa/buscatitulopornumero/${value}`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://nextfetchbuild'
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchConteudoHinoBySearchClientSide(searchWordField: string) {
    try {
        const response = await fetch(`${urlAPI}/hinoharpa/buscatituloporpalavra/${searchWordField}`)
        let data = await response.json()
        return data as IHinoPorPalavra[]
    } catch (error) {
        return []
    }
}

export async function GetDataFromIA(word: string | undefined): Promise<IGetDataFromIA | []> {
    try {
        const response = await fetch(`${urlAPI}/ai/dataai`, {
            method: "POST",
            body: JSON.stringify({
                askedToAI: word,
                pass: pass

            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
        let data = await response.json()
        if (data?.response?.status != 200) { throw new Error(`Resposta da request => ${data?.response?.status} `) }
        return data as IGetDataFromIA
    } catch (error) {
        console.log(error)
        return []
    }
}