import {
    IresultVersao, IresultTestamento,
    IresultLivros, IresultCapitulos
} from "@/components/entities/interfaces"

const urlApiDev = 'http://marcosusepc:9000'
const urlApiProd = 'http://...'

export async function FetchAPIVersao(): Promise<IresultVersao[]> {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscaversao`)
        const data = await response.json()
        return data as IresultVersao[]
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPITestamento(): Promise<IresultTestamento[]> {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscatestamento`)
        const data = await response.json()
        return data as IresultTestamento[]
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPILivros(testamentoID: number) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscalivros/${testamentoID}`)
        const data = await response.json()
        return data as IresultLivros[]
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function FetchAPICapitulos(versaoID: string | number, livroID: string | number) {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscacapitulo/${versaoID}/${livroID}`)
        const data = await response.json()
        return data as IresultCapitulos[]
    } catch (error) {
        console.log(error)
        return []
    }
}