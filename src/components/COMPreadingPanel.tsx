import { IBuscaConteudoLeitura } from "../entities/interfaces"
import styles from "@/styles/readingPanel.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import ContentBibleNotFound from "./COMPReadingContentBibleNotFound"

export default function ReadingPanel({ data }: { data: IBuscaConteudoLeitura }) {
    const [comboBox, setComboBox] = useState<Array<any>>([])
    const [comboBoxSelected, setComboBoxSelected] = useState<number | any>(null)
    const router = useRouter()

    useEffect(() => {
        let store = []
        for (let i = 1; i <= data?.quantidadecapitulo[0].capitulo; i++) {
            store.push(<option key={i} value={i} >{i}</option>)
        }
        setComboBox(store)//armazena o html <option> criado acima
        setComboBoxSelected(data?.capituloAtual)//deixa o numero do capitulo atual no combobox
    }, [data])

    function SelectedComboBox(data: number) {
        setComboBoxSelected(data)
    }

    function NextPage() {
        if (data?.capituloAtual == data.quantidadecapitulo[0].capitulo) { return }
        const { versaoid, testamentoid, livroid } = router.query //onbtem as vars da url dinâmica
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${data.capituloAtual + 1}`)
    }
    function BeforePage() {
        if (data?.capituloAtual == 1) { return }
        const { versaoid, testamentoid, livroid } = router.query //onbtem as vars da url dinâmica
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${data.capituloAtual - 1}`)
    }
    function SelectPage(page: number) {
        const { versaoid, testamentoid, livroid } = router.query //onbtem as vars da url dinâmica
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${page}`)
    }


    // return (
    //     <>

    if (data.conteudo.length > 1) {
        return (
            <main className={styles.main}>
                <div className={styles.nomeversao}><h3>{data?.nomeVersao[0].versao_nome}</h3></div>
                <div className={styles.livrocapitulo}>
                    <h1>{data?.nomeLivro[0].livro_nome}: {data?.capituloAtual}</h1>
                </div>
                <div className={styles.content}>
                    {data?.conteudo.map((dados: any, index: number) => {
                        return (<p key={index}><span>{index + 1} </span>  - {dados.conteudo}</p>)
                    })
                    }
                </div>
                <article className={styles.articlenavegacao}>
                    <div className={styles.articlenavegacaoarrow}
                        onClick={BeforePage}
                    >
                        <div>
                            <Image
                                src="/images/arrowsReading/arrowLeft.png"
                                alt="Logo"
                                // className={styles.imageButtonMenu}
                                width={100}
                                height={50}
                                priority
                            />
                        </div>
                        <div>
                            <p>{data?.capituloAtual == 1 ? data?.capituloAtual : data?.capituloAtual - 1}</p>
                            {/* Se a página já estiver no capiptulo um, não permita aparecer o  zero */}
                        </div>
                    </div>
                    <div className={styles.articlenavegacaoseelct}>
                        <select name="capitulos" value={comboBoxSelected} onChange={(evt) => { SelectedComboBox(Number(evt.target.value)), SelectPage(Number(evt.target.value)) }}  >
                            {comboBox}
                        </select>
                    </div>
                    <div className={styles.articlenavegacaoarrow}
                        onClick={NextPage}
                    >
                        <div>
                            <p>{data?.capituloAtual == data?.quantidadecapitulo[0].capitulo ? data?.capituloAtual : data?.capituloAtual + 1}</p>
                        </div>
                        <div>
                            <Image
                                src="/images/arrowsReading/arrowRight.png"
                                alt="Logo"
                                // className={styles.imageButtonMenu}
                                width={100}
                                height={50}
                                priority
                            />
                        </div>
                    </div>
                </article>
            </main>
        )
    } else {
        return (
            <main className={styles.main}>
                <ContentBibleNotFound />
            </main>
        )
    }

}
