import { GetStaticProps, GetStaticPaths } from 'next';
import { FetchAPICapitulosServerSide, FetchConteudoServerSide } from "@/services/fetch"
import { IBuscaConteudoLeitura, } from "@/interfaces/interfaces"
import Head from 'next/head'
import NavBar from "../../../../../../components/navbar/COMPnavbar"
import ReadingPanel from "@/components/bible/COMPreadingContentBiblePanel"
import Footer from "../../../../../../components/footer/COMPfooter"
import Loading from '@/components/loading/COMPloading';

const versao = 1 // somente a Almeida revisada e atualizada
const todostestamentos = 2 //os dois testamentos
const antigoTestamento = 1
const novoTestamento = 2
const todosLivros = 66  //todos os livros Antigo e novo testamentos
const livrosAntigoTestamento = 39
const livroNovotestamento = 66
const capituloAmountTest = 150 //somente os 5 capitulos de cada livro

interface IGetStaticProps {
    versaoid: string,
    testamentoid: string,
    livroid: string,
    capitulo: string
}

export default function LeituraBiblia({ data }: { data: IBuscaConteudoLeitura }): JSX.Element {
    if (!data) {
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
            {data?.conteudo?.length > 1 &&
                <Head>
                    <title>{data?.nomeLivro[0]?.livro_nome} {data?.capituloAtual} - Almeida revisada e atualizada - Vida da fonte</title>
                    <meta name="description" content={`${data?.conteudo[0]?.conteudo.substring(1, 90)} ...`}></meta>
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

    try {
        for (let testamento = 1; testamento <= antigoTestamento; testamento++) {
            for (var livros = 1; livros <= livrosAntigoTestamento; livros++) {
                let fetchCapitulos = await FetchAPICapitulosServerSide(versao, livros)//obtem a quantida de exata de capitulos do livro da vez
                for (var capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++) {
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
        console.log(response)
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

