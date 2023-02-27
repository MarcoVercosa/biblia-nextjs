import { GetStaticProps, GetStaticPaths } from 'next';
import { FetchConteudo, FetchAPICapitulos } from "@/services/fetch"
import { IBuscaConteudoLeitura } from "@/components/entities/interfaces"

// const versaoAmount = 1 // somente a Almeida revisada e atualizada
// const testamentoAmount = 2 //os dois testamentos
// const livroAmount = 66  //todos os livros Antigo e novo testamentos
// const capituloAmount = "solicitar api quantidade de capitulos que tem o livro. utilizar a FetchAPICapitulos()"

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


export default function LeituraBiblia({ data }: any) {
    return (
        <>
            <h1>LEITURAAA</h1>
            <h3>{data?.nomeVersao[0].versao_nome}</h3>
            <h1>
                {data?.nomeLivro[0].livro_nome}
            </h1>
            <h3>{data?.capituloAtual}</h3>
            {data?.conteudo.map((dados: any, index: number) => {
                return (
                    <p key={index}>{dados.conteudo}</p>
                )
            })
            }
        </>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    let paths = []
    for (let testamento = 1; testamento <= antigoTestamento; testamento++) {
        for (var livros = 1; livros <= livrosAntigoTestamento; livros++) {
            let fetchCapitulos = await FetchAPICapitulos(versao, livros)
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
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const { versaoid, testamentoid, livroid, capitulo } = params as IGetStaticProps
    let response = await FetchConteudo(versaoid, testamentoid, livroid, capitulo) as IBuscaConteudoLeitura
    return {
        props: {
            data: response
        }
    }
}



// for (var testamento = 1; testamento <= testamentoAmountTest; testamento++) {
//     for (var livros = 1; livros <= livroAmountTest; livros++) {
//         for (var capitulos = 1; capitulos <= capituloAmountTest; capitulos++) {
//             console.log(`conteudo/${versaoAmountTest}/${testamento}/${testamento}/${capitulos}`)
//         }
//     }
// }