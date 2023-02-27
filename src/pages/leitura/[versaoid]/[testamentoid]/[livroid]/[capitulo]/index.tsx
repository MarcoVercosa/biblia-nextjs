import { useRouter } from "next/router"
import { GetStaticProps, GetStaticPaths } from 'next';
import { FetchConteudo } from "@/services/fetch"
import { IBuscaConteudoLeitura } from "@/components/entities/interfaces"

// const versaoAmount = 1 // somente a Almeida revisada e atualizada
// const testamentoAmount = 2 //os dois testamentos
// const livroAmount = 66  //todos os livros Antigo e novo testamentos
// const capituloAmount = "solicitar api quantidade de capitulos que tem o livro. utilizar a FetchAPICapitulos()"

const versaoAmountTest = 1 // somente a Almeida revisada e atualizada
const testamentoAmountTest = 2 //os dois testamentos
const livroAmountTest = 66  //todos os livros Antigo e novo testamentos
const capituloAmountTest = 5 //somente os 5 capitulos de cada livro

interface IGetStaticProps {
    versaoid: string,
    testamentoid: string,
    livroid: string,
    capitulo: string
}


export default function LeituraBiblia({ data }: any) {
    const router = useRouter()
    console.log(router.query)
    console.log(data)
    return (
        <>
            <h1>LEITURAAA</h1>
            <h3>{data?.nomeVersao[0].versao_nome}</h3>
            <h1>
                {data?.nomeLivro[0].livro_nome}
            </h1>
            {data?.conteudo.map((dados: any) => {
                return (
                    <p>{dados.conteudo}</p>
                )
            })
            }
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    let paths = []
    for (let testamento = 1; testamento <= testamentoAmountTest; testamento++) {
        for (var livros = 1; livros <= livroAmountTest; livros++) {
            for (var capitulos = 1; capitulos <= capituloAmountTest; capitulos++) {
                paths.push({
                    params: {
                        versaoid: `${versaoAmountTest}`,
                        testamentoid: `${testamento}}`,
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