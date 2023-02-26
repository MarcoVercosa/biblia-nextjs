import { useRouter } from "next/router"

export default function LeituraBiblia() {

    // const versaoAmount = 1 // somente a Almeida revisada e atualizada
    // const testamentoAmount = 2 //os dois testamentos
    // const livroAmount = 66  //todos os livros Antigo e novo testamentos
    // const capituloAmount = "solicitar api quantidade de capitulos que tem o livro. utilizar a FetchAPICapitulos()"

    const versaoAmountTest = 1 // somente a Almeida revisada e atualizada
    const testamentoAmountTest = 2 //os dois testamentos
    const livroAmountTest = 66  //todos os livros Antigo e novo testamentos
    const capituloAmountTest = 5 //somente os 5 capitulos de cada livro

    const router = useRouter()
    console.log(router.query)
    return (
        <h1>
            LeituraAAAAA
        </h1>
    )
}