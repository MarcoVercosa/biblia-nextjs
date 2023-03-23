import { IBuscaConteudoLeitura } from "@/interfaces/interfaces"
import { useEffect, useState, useRef } from "react"
import styles from "../../styles/bible/modalFavorite.module.css"

interface IProps {
    data: IBuscaConteudoLeitura
    OpenCloseModal: () => void
}


export default function ModalFavorite({ data, OpenCloseModal }: IProps): JSX.Element {
    const [versiculoSelected, setVersiculoSelected] = useState<number>(1)

    function CreateSelectOptions(): JSX.Element {
        console.log(data)
        let store: Array<JSX.Element> = []
        for (let count = 1; count <= data.conteudo.length; count++) {
            store.push(<option key={count} value={count}>{count}</option>)
        }
        return store as any
    }
    return (
        <article className={styles.article}>
            <section className={styles.container}>
                <div className={styles.buttons} onClick={OpenCloseModal}>
                    <img alt="Fechar" src="/images/moreinformationIA/iconsMenu/closeInfos.png"></img>
                </div>
                <div>
                    <div className={styles.nomeVersao}>
                        <h1>{data.nomeVersao[0].versao_nome}</h1>
                    </div>
                    <div className={styles.livroCapitulo}>
                        <h3>{data.nomeLivro[0].livro_nome}: {versiculoSelected}</h3>
                    </div>
                    <div className={styles.content}>
                        <p>{data.conteudo[versiculoSelected - 1].conteudo}</p>
                    </div>
                    <div className={styles.titulo}>
                        <select name="versiculos" value={versiculoSelected} onChange={(evt) => setVersiculoSelected((prevState) => prevState = Number(evt.target.value))}>
                            <CreateSelectOptions />
                        </select>

                    </div>
                </div>

            </section>
        </article>
    )

}