import { GetStaticProps, GetStaticPaths } from 'next';
import { FetchAPICapitulosServerSide, FetchConteudoServerSide } from "@/services/fetch"
import { IBuscaConteudoLeitura, } from "@/interfaces/interfaces"
import Head from 'next/head'
import NavBar from "../../../../../../components/navbar/COMPnavbar"
import ReadingPanel from "@/components/bible/COMPreadingContentBiblePanel"
import Footer from "../../../../../../components/footer/COMPfooter"
import Loading from '@/components/loading/COMPloading';
import { NextRouter, useRouter } from 'next/router';

const versao = 1 // somente a Almeida revisada e atualizada
const antigoTestamento = 1
const livrosAntigoTestamento = 39


const novoTestamento = 2
const livroNovotestamento = 66 //todos os livros Antigo e novo testamentos

interface IGetStaticProps {
    versaoid: string,
    testamentoid: string,
    livroid: string,
    capitulo: string
}

export default function LeituraBiblia({ data }: { data: IBuscaConteudoLeitura }): JSX.Element {
    const router: NextRouter = useRouter()
    if (!data || router.isFallback) {
        //mesmo se não houver dados , será respondido um objecto com a pesquisa solicitada, só q com a key "conteudo" vazia
        //fazendo com q mesmo  não havendo conteudo, com a resposta o data fique verdadeiro
        return (
            <>
                <NavBar />
                <Loading />
                <Footer />
            </>
        )
    }
    return (
        <>
            {data?.conteudo?.length > 0 &&
                <Head>
                    <title>{data?.nomeLivro[0]?.livro_nome} {data?.capituloAtual} - {data?.nomeVersao[0].versao_nome} - Vida da fonte</title>
                    <meta name="description" content={`${data?.conteudo[0]?.conteudo.substring(0, 115)} ...`}></meta>
                </Head>
            }

            <NavBar />
            <ReadingPanel data={data} />
            <Footer />
        </>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    let paths = []

    try {//cria paths do ANTIGO testamento
        for (let testamento = 1; testamento <= antigoTestamento; testamento++) {//somente 1 (antigo testamento)
            for (var livros = 1; livros <= livrosAntigoTestamento; livros++) {//para cada livro do antigo testamento
                let fetchCapitulos = await FetchAPICapitulosServerSide(versao, livros)//obtem a quantidade exata de capitulos do livro da vez
                for (var capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++) {//para cada capitulo encontrado
                    paths.push({
                        params: {
                            versaoid: `${versao}`,
                            testamentoid: `${testamento}`,
                            livroid: `${livros}`,
                            capitulo: `${capitulos}`
                        }
                    })
                }
            }
        }
        //cria paths do NOVO testamento
        for (let testamento = 2; testamento <= novoTestamento; testamento++) {//somente o 2 (novo testamento)
            for (var livros = 40; livros <= livroNovotestamento; livros++) {//para cada livro do novo testamento INICIANDO A PARTIR DO 40, POIS O ANTIGO TESTAMENTO TERMINA NO 39
                let fetchCapitulos = await FetchAPICapitulosServerSide(versao, livros)//obtem a quantidade exata de capitulos do livro da vez
                for (var capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++) {//para cada capitulo encontrado
                    paths.push({
                        params: {
                            versaoid: `${versao}`,
                            testamentoid: `${testamento}`,
                            livroid: `${livros}`,
                            capitulo: `${capitulos}`
                        }
                    })
                }
            }
        }

        return { paths, fallback: true }
    } catch (err) {
        paths.push({
            params: {
                versaoid: `0`,
                testamentoid: `0`,
                livroid: `0`,
                capitulo: `0`
            }
        })
        return { paths, fallback: true }
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const { versaoid, testamentoid, livroid, capitulo } = params as IGetStaticProps
    try {
        let response = await FetchConteudoServerSide(versaoid, testamentoid, livroid, capitulo) as IBuscaConteudoLeitura //busca conteudo conforme url da página
        //mesmo se não houver dados , srá respondido m objecto com a pesquis solicitada, só q com a key conteudo vazia
        return {
            props: {
                data: response
            }
        }
    } catch (error) {
        return {
            props: {
                data: []
            }
        }
    }
}

