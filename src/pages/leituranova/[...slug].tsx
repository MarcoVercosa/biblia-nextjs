import { useRouter } from "next/router"
import { FetchConteudo } from "@/services/fetch"

// const versaoAmount = 1 // somente a Almeida revisada e atualizada
// const testamentoAmount = 2 //os dois testamentos
// const livroAmount = 66  //todos os livros Antigo e novo testamentos
// const capituloAmount = "solicitar api quantidade de capitulos que tem o livro. utilizar a FetchAPICapitulos()"

const versaoAmountTest = 1 // somente a Almeida revisada e atualizada
const testamentoAmountTest = 2 //os dois testamentos
const livroAmountTest = 66  //todos os livros Antigo e novo testamentos
const capituloAmountTest = 5 //somente os 5 capitulos de cada livro


export default function LeituraBiblia({ slug }: any) {


    const router = useRouter()
    // console.log("router.query")
    // console.log(router.query)
    // console.log("slug")
    // console.log(slug)
    return (
        <h1>
            LeituraNOVA
        </h1>
    )
}


export async function getStaticPaths(): Promise<any> {

    let data = []
    for (let testamento = 1; testamento <= testamentoAmountTest; testamento++) {
        for (var livros = 1; livros <= livroAmountTest; livros++) {
            for (var capitulos = 1; capitulos <= capituloAmountTest; capitulos++) {
                data.push(`conteudo/${versaoAmountTest}/${testamento}/${livros}/${capitulos}`)
            }
        }
    }

    return {
        paths: [
            { params: { slug: data } }],
        fallback: true
    }
}

export async function getStaticProps({ params }: any) {
    console.log("PRRRROOOOOOPPPPPPSSS")
    console.log(params)
    return {
        props: {
            slug: params
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