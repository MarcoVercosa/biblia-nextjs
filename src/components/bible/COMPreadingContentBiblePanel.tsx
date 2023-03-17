import { IBuscaConteudoLeitura } from "../../interfaces/interfaces"
import styles from "@/styles/bible/readingPanel.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import ContentBibleNotFound from "./COMPReadingContentBibleNotFound"
import Content from "./COMPContentBible"

export default function ReadingPanel({ data }: { data: IBuscaConteudoLeitura }): JSX.Element {
    console.log("ReadingPanel")
    const [comboBox, setComboBox] = useState<Array<any>>([])
    const [comboBoxSelected, setComboBoxSelected] = useState<number | any>(null)
    const [anchorURLValue, setAnchorURLValue] = useState<string>("")
    const router = useRouter()

    useEffect(() => {
        let store: Array<JSX.Element> = []
        for (let i = 1; i <= data?.quantidadecapitulo[0]?.capitulo; i++) {
            store.push(<option key={i} value={i} >{i}</option>)
        }
        setComboBox(store)//armazena o html <option> criado acima
        setComboBoxSelected(data?.capituloAtual)//deixa o numero do capitulo atual no combobox

    }, [data])
    useEffect(() => {// useEffetc somente para anchorLink
        if (!router.isReady) { return }//Se o router ainda não conseguiu carregar os paramns, nao faça nada
        if (router.asPath.split("#").length < 2) { return setAnchorURLValue("") }//o length será 2 somente se  a url possuir #
        setAnchorURLValue(router.asPath.split("#")[1])
        // o router asPath pega a url e divide se baseando pelo #
        // a array terá 2 indices se achar o #, ficando no 2 indice [1]  somente o valor do link ancora
    }, [router.isReady, data])
    function SelectedComboBox(data: number) {
        setComboBoxSelected(data)
    }
    function NextPage() {
        if (data?.capituloAtual == data.quantidadecapitulo[0].capitulo) { return }
        const { versaoid, testamentoid, livroid } = router.query //obtem as vars da url dinâmica
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${data.capituloAtual + 1}`)
    }
    function BeforePage() {
        if (data?.capituloAtual == 1) { return }
        const { versaoid, testamentoid, livroid } = router.query //obtem as vars da url dinâmica
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${data.capituloAtual - 1}`)
    }
    function SelectPage(page: number) {
        const { versaoid, testamentoid, livroid } = router.query //obtem as vars da url dinâmica
        router.push(`/leitura/${versaoid}/${testamentoid}/${livroid}/${page}`)
    }

    if (data?.conteudo.length > 1) {
        return (
            <main className={styles.main}>
                <Content data={data} anchorURLValue={anchorURLValue} />

                <article className={styles.articlenavegacao}>
                    <div className={styles.articlenavegacaoarrow} onClick={BeforePage}>
                        <div>
                            <Image
                                src="/images/arrowsReading/arrowLeft.png"
                                alt="Logo"
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
                    <div className={styles.articlenavegacaoarrow} onClick={NextPage}>
                        <div>
                            {/* Se a página atual for igual a quantidade total de capitulo (ultimo capitulo) não some + 1 */}
                            <p>{data?.capituloAtual == data?.quantidadecapitulo[0].capitulo ? data?.capituloAtual : data?.capituloAtual + 1}</p>
                        </div>
                        <div>
                            <Image
                                src="/images/arrowsReading/arrowRight.png"
                                alt="Logo"
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
