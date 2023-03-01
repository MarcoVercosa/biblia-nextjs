import {
    IresultVersao, IresultTestamento,
    IresultLivros, IresultCapitulos, IBuscaConteudoLeitura
} from "@/entities/interfaces"

const urlApiDev = 'http://localhost:9000'
const urlApiProd = 'http://...'

export async function FetchAPIVersaoServerSide(): Promise<IresultVersao[]> {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscaversao`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://localhost'
            }
        })
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultVersao[]
        } else { throw new Error("Forbidden or error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPITestamentoServerSide(): Promise<IresultTestamento[]> {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscatestamento`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://localhost'
            }

        })
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultTestamento[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPILivros(testamentoID: number) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscalivros/${testamentoID}`)
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultLivros[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPICapitulos(versaoID: string | number, livroID: string | number) {
    console.log("CAPITULOS")
    try {
        const response = await fetch(`${urlApiDev}/mais/buscacapitulo/${versaoID}/${livroID}`)
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultCapitulos[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchConteudo(versaoID: string, testamentoID: string, livroId: string, capitulo: string) {
    console.log("FetchConteudo")
    try {
        const response = await fetch(`${urlApiDev}/mais/buscaconteudo/${versaoID}/${testamentoID}/${livroId}/${capitulo}`)

        if (response.status == 200) {
            const data = await response.json()
            return data as IBuscaConteudoLeitura
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPICapitulosServerSide(versaoID: string | number, livroID: string | number) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscacapitulo/${versaoID}/${livroID}`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://localhost'
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

export async function FetchConteudoServerSide(versaoID: string, testamentoID: string, livroId: string, capitulo: string) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscaconteudo/${versaoID}/${testamentoID}/${livroId}/${capitulo}`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://localhost'
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