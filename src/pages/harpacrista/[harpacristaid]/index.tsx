import Head from 'next/head'
import NavBar from "../../../components/navbar"
import Footer from "../../../components/footer"

import { FetchSelectNumeroHarpaServerSide, FetchConteudoHarpaServerSide } from '@/services/fetch'
import ReadingPanelHarpaCrista from '@/components/readindPanelHarpaCrista'
import { GetStaticPaths, GetStaticProps } from 'next'



export default function HarpaCrista({ numerosHinosSeletectTag, conteudoHinoPageCurrent }: any) {
    console.log(numerosHinosSeletectTag, conteudoHinoPageCurrent)
    return (
        <>
            <NavBar />
            <ReadingPanelHarpaCrista numerosHinosSeletectTag={numerosHinosSeletectTag} conteudoHinoPageCurrent={conteudoHinoPageCurrent} />
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async (context: any) => {
    let paths: any = []
    let quantidadeHinos = await FetchSelectNumeroHarpaServerSide() //buscam quantidade de hinos

    for (let i = 1; i <= quantidadeHinos[0]?.numero; i++) {
        paths.push({
            params: {
                harpacristaid: `${i}`
            }
        })
    }
    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    let numerosHinosSeletectTag: any = await FetchSelectNumeroHarpaServerSide() //buscam quantidade de hinos para gerar o <select> no component filho
    let conteudoHinoPageCurrent = await FetchConteudoHarpaServerSide(params.harpacristaid) //busca o conteudo enviando a página atual
    return {
        props: {
            data: params,
            numerosHinosSeletectTag,
            conteudoHinoPageCurrent
        }
    }
}