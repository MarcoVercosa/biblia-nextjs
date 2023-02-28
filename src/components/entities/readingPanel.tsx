import { IBuscaConteudoLeitura } from "./interfaces"
import styles from "@/styles/readingPanel.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function ReadingPanel({ data }: IBuscaConteudoLeitura) {

    const [comboBox, setComboBox] = useState<Array<any>>([])
    const [comboBoxSelected, setComboBoxSelected] = useState<number | any>(null)

    useEffect(() => {
        let store = []
        for (let i = 1; i <= data?.quantidadecapitulo[0].capitulo; i++) {
            store.push(<option value={i} >{i}</option>)
        }
        setComboBox(store)//armazena o html <option> criado acima
        setComboBoxSelected(data?.capituloAtual)//deixa o numero do capitulo atual no combobox
    }, [data])

    function SelectedComboBox(data: number) {
        setComboBoxSelected(data)
    }

    return (

        <>
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
                    <div className={styles.articlenavegacaoarrow}>
                        <Image
                            src="/images/arrowsReading/arrowLeft.png"
                            alt="Logo"
                            // className={styles.imageButtonMenu}
                            width={70}
                            height={50}
                            priority
                        />
                    </div>
                    <div>
                        <select name="capitulos" value={comboBoxSelected} onChange={(evt) => { SelectedComboBox(Number(evt.target.value)) }}  >
                            {comboBox}
                        </select>
                    </div>
                    <div className={styles.articlenavegacaoarrow}>
                        <Image
                            src="/images/arrowsReading/arrowRight.png"
                            alt="Logo"
                            // className={styles.imageButtonMenu}
                            width={70}
                            height={50}
                            priority
                        />
                    </div>
                </article>
            </main>
        </>

    )
}