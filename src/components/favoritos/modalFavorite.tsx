import { IFavoritesSaveLocalStorage } from "@/interfaces/interfaces"
import { useEffect, useRef, useState } from "react"
import styles from "../../styles/favoritos/modalFavorite.module.css"

interface IProps {
    OpenCloseModalFavorito: () => void
    indexLocationArray: number
    data: IFavoritesSaveLocalStorage[]
}


export default function ModalFavorite({ OpenCloseModalFavorito, indexLocationArray, data }: IProps): JSX.Element {
    const [dataLocalStortage, setDataLocalStorage] = useState<IFavoritesSaveLocalStorage>()

    useEffect(() => {
        setDataLocalStorage((prevSate) => prevSate = data[indexLocationArray])
    }, [])

    function ChangeBackGroundColor(value: string) {
        setDataLocalStorage((prevState) => { return { ...prevState, colorNotes: value } as any })
    }
    function ChangeNotes(value: string) {
        setDataLocalStorage((prevState) => { return { ...prevState, notes: value } as any })
    }
    function UpdateDataLocalStorage() {
        try {
            let change = data.map((value: IFavoritesSaveLocalStorage, index: number) => {
                if (index == indexLocationArray) { return dataLocalStortage }//Se o index for igual ao que o componente pai enviou (indexLocationArray) então altere para os dados atualziados
                else {//se não for igual, retorne somente o valor q ja existe
                    return value
                }
            })
            localStorage.setItem("favorites", JSON.stringify(change))
            alert("Dados atualizado com sucesso.")
        } catch (error) {
            alert("Ocorreu alguma falha. Tente novamente em instantes")
        } finally {
            OpenCloseModalFavorito()
        }
    }
    return (
        <article className={styles.article}>
            <section className={styles.container} style={{ backgroundColor: dataLocalStortage?.colorNotes }}>
                <h1>MODAL FAVORITOS</h1>

                <div className={styles.versaoNome}>
                    <p>{dataLocalStortage?.versaoNome}</p>
                </div>
                <div className={styles.selectedCapitulo}>
                    <p>{dataLocalStortage?.livroNome}: {dataLocalStortage?.selectedCapitulo}</p>
                </div>
                <div className={styles.contentSelected}>
                    <p><span>{dataLocalStortage?.selectectVersiculo} -&gt; </span>{dataLocalStortage?.contentSelected}</p>
                </div>
                <div className={styles.notas}>
                    <textarea name='notas' minLength={2} maxLength={200} wrap="soft" placeholder='Não há notas' onChange={(evt) => ChangeNotes(evt.target.value)} value={dataLocalStortage?.notes}>{dataLocalStortage?.notes}</textarea>
                </div>
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
                <div className={styles.buttons}>
                    <button className={styles.buttonsEdit} onClick={UpdateDataLocalStorage} >Salvar</button>
                    <button className={styles.buttonsfechar} onClick={OpenCloseModalFavorito}>FECHAR </button>
                </div>

            </section>

        </article>

    )

}