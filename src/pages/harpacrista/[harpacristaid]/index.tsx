import Head from 'next/head'
import NavBar from "../../../components/COMPnavbar"
import Footer from "../../../components/COMPfooter"

import { FetchSelectNumeroHarpaServerSide, FetchConteudoHarpaServerSide } from '@/services/fetch'
import ReadingPanelHarpaCrista from '@/components/COMPReadingPanelHarpaCrista'
import { GetStaticPaths, GetStaticProps } from 'next'



export default function HarpaCrista({ numerosHinosCreateSeletectTag, conteudoHinoPageCurrent, idCanticoURL }: any) {
    return (
        <>
            <NavBar />
            <ReadingPanelHarpaCrista numerosHinosCreateSeletectTag={numerosHinosCreateSeletectTag} conteudoHinoPageCurrent={conteudoHinoPageCurrent} idCanticoURL={idCanticoURL} />
            <Footer />
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
    let numerosHinosCreateSeletectTag: any = await FetchSelectNumeroHarpaServerSide() //buscam quantidade de hinos para gerar o <select> no component filho
    try {
        if (isNaN(Number(params.harpacristaid))) { throw new Error("Params URL. Não é possivel converter o ID do Hino para Numero. Provavel parametro inválido ou erro desconhecido"); }
        //linha acima verifica primeiro se o parâmetro pode ser convertido para number. Ajuda a evitar caracteres desconhecidos
        let regex = /^[1-9][0-9]*$/  //Esse REGEX aumenta a segurança verificando se a entrada contém apenas números e começa com um dígito diferente de zero.
        if (regex.test(params.harpacristaid)) {
            let conteudoHinoPageCurrent = await FetchConteudoHarpaServerSide(params.harpacristaid) //busca o conteudo enviando a página atual
            if (conteudoHinoPageCurrent.length < 1 || conteudoHinoPageCurrent.message) {// se nao trazer nada ou mensagem de erro, deixa false para o componente filho saber q não há hino para renderizar
                conteudoHinoPageCurrent = false
            }
            return {
                props: {
                    idCanticoURL: params.harpacristaid,
                    numerosHinosCreateSeletectTag,
                    conteudoHinoPageCurrent
                }
            }
        } else {
            throw new Error("Regras regex getStaticProps Hino harpa não aceita ou erro desconhecido");
        }
    } catch (error: any) {
        console.log(error.message)
        return {
            props: {
                idCanticoURL: "selecione",
                numerosHinosCreateSeletectTag,
                conteudoHinoPageCurrent: false
            }
        }
    }
}