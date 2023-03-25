import { IBuscaConteudoLeitura, IFavoritesSaveLocalStorage } from "@/interfaces/interfaces"
import { useState, useRef } from "react"
import { useRouter } from 'next/router'
import styles from "../../styles/bible/modalFavorite.module.css"

interface IProps {
    data: IBuscaConteudoLeitura
    OpenCloseModal: () => void
}


export default function ModalFavorite({ data, OpenCloseModal }: IProps): JSX.Element {
    console.log("ModalFavorite")
    const [versiculoSelected, setVersiculoSelected] = useState<number>(1)
    const [backGoundColorSelected, setBackGoundColorSelected] = useState<string>("rgb(255, 255, 255)")
    const inputNotes = useRef<HTMLInputElement>()
    const router = useRouter()

    function CreateSelectOptions(): JSX.Element {
        let store: Array<JSX.Element> = []
        for (let count = 1; count <= data.conteudo.length; count++) {
            store.push(<option key={count} value={count}>{count}</option>)
        }
        return store as any
    }
    function ChangeBackGroundColor(value: string) {
        setBackGoundColorSelected((prevState) => prevState = value)
    }

    function SaveFavorite() {
        let valueStorageLocal = JSON.parse(localStorage.getItem('favorites') as string)
        if (valueStorageLocal) {
            valueStorageLocal.push(
                {
                    versaoNome: data.nomeVersao[0].versao_nome,
                    livroNome: data.nomeLivro[0].livro_nome,
                    selectedCapitulo: String(data.capituloAtual),
                    selectectVersiculo: String(versiculoSelected),
                    contentSelected: data.conteudo[versiculoSelected - 1].conteudo,
                    colorNotes: backGoundColorSelected,
                    notes: inputNotes.current?.value as string,
                    path: router.asPath,
                }
            )
            localStorage.setItem("favorites", JSON.stringify(valueStorageLocal))
        } else {
            const favorite: IFavoritesSaveLocalStorage[] = [{
                versaoNome: data.nomeVersao[0].versao_nome,
                livroNome: data.nomeLivro[0].livro_nome,
                selectedCapitulo: String(data.capituloAtual),
                selectectVersiculo: String(versiculoSelected),
                contentSelected: data.conteudo[versiculoSelected - 1].conteudo,
                colorNotes: backGoundColorSelected,
                notes: inputNotes.current?.value as string,
                path: router.asPath,
            }]
            localStorage.setItem("favorites", JSON.stringify(favorite))
        }
    }


    return (
        <article className={styles.article}>
            <section className={styles.container} style={{ backgroundColor: backGoundColorSelected }}>
                <div className={styles.buttonClose} onClick={OpenCloseModal}>
                    <img alt="Fechar" src="/images/moreinformationIA/iconsMenu/closeInfos.png"></img>
                </div>
                <div className={styles.main}>
                    <div className={styles.nomeVersao}>
                        <h1>{data.nomeVersao[0].versao_nome}</h1>
                    </div>
                    <div className={styles.livroCapitulo}>
                        <h3>{data.nomeLivro[0].livro_nome}: {versiculoSelected}</h3>
                    </div>
                    <div className={styles.content}>
                        <p>{data.conteudo[versiculoSelected - 1].conteudo}</p>
                    </div>
                    <div className={styles.selectCapitulos}>
                        <select name="versiculos" value={versiculoSelected} onChange={(evt) => setVersiculoSelected((prevState) => prevState = Number(evt.target.value))}>
                            <CreateSelectOptions />
                        </select>
                    </div>
                </div>

                <div className={styles.inputNotes}>
                    <textarea name='Digite' ref={inputNotes as any} minLength={2} maxLength={200} wrap="soft" placeholder='Nota sobre o versiculo acima'></textarea>
                </div>
                <div className={styles.selectColorContainer}>
                    <p>Adicione uma cor</p>
                    <div className={styles.selectColor}>
                        <div className={styles.selectColorWhite} style={{ backgroundColor: "rgba(255, 255, 255)" }}
                            onClick={() => ChangeBackGroundColor("rgba(255, 255, 255, 0.446)")}
                        >
                        </div>
                        <div className={styles.selectColorGreen} style={{ backgroundColor: "rgba(42, 240, 42)" }}
                            onClick={() => ChangeBackGroundColor("rgb(42, 240, 42)")}
                        >
                        </div>
                        <div className={styles.selectColorBlue} style={{ backgroundColor: "rgb(69, 69, 252)" }}
                            onClick={() => ChangeBackGroundColor("rgb(69, 69, 252)")}
                        >
                        </div>
                        <div className={styles.selectColorRed} style={{ backgroundColor: "rgb(255, 75, 75)" }}
                            onClick={() => ChangeBackGroundColor("rgb(255, 75, 75)")}
                        >
                        </div>
                        <div className={styles.selectColorOrange} style={{ backgroundColor: "rgb(247, 176, 45)" }}
                            onClick={() => ChangeBackGroundColor("rgb(247, 176, 45)")}
                        >
                        </div>
                    </div>

                </div>
                <div className={styles.buttons}>
                    <button className={styles.buttonsok} onClick={SaveFavorite} ><img src="/images/modaFavorite/favorite.svg"></img></button>
                    <button className={styles.buttonsfechar} onClick={OpenCloseModal}>FECHAR </button>
                </div>

            </section>
        </article>

    )

}