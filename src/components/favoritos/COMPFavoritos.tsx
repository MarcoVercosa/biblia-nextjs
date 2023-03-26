import styles from '@/styles/favoritos/favoritos.module.css'
import { useEffect, useRef, useState } from 'react'
import { IFavoritesSaveLocalStorage } from '@/interfaces/interfaces'
import ModalFavorite from './modalFavorite'

export default function RenderFavoritos() {

    const [dataFromLocalStorage, setDataFromLocalStorage] = useState<IFavoritesSaveLocalStorage[]>()
    const [openCloseModalFavorito, setOpenCloseModalFavorito] = useState<boolean>(false)
    let indexLocationArray = useRef<IFavoritesSaveLocalStorage>()

    useEffect((): void => {
        if (window) {
            console.log("useEffect")
            setDataFromLocalStorage(JSON.parse(localStorage.getItem("favorites") as string))
            console.log(JSON.parse(localStorage.getItem("favorites") as string))
        }
    }, [openCloseModalFavorito])
    function OpenCloseModalFavorito(indexArray?: number) {
        if (!isNaN(indexArray as number)) {//se houver número, foi solicitado abertura do menu
            // let data: any = dataFromLocalStorage
            // indexLocationArray.current = data[indexArray as number]
            indexLocationArray.current = indexArray as any
            setOpenCloseModalFavorito((prevState) => !prevState)
        } else {
            setOpenCloseModalFavorito((prevState) => !prevState)
        }
    }
    return (
        <>
            {openCloseModalFavorito && <ModalFavorite OpenCloseModalFavorito={OpenCloseModalFavorito} indexLocationArray={indexLocationArray.current as any} data={dataFromLocalStorage as IFavoritesSaveLocalStorage[]} />}
            <main className={styles.main}>
                <div className={styles.content}>
                    {dataFromLocalStorage?.map((data: IFavoritesSaveLocalStorage, index: number) => {
                        return (
                            <div className={styles.container} style={{ backgroundColor: data.colorNotes }}>
                                <div className={styles.starImage} >
                                    <img src="images/favorite/favorite.svg" ></img>
                                </div>

                                <div className={styles.versaoNome}>
                                    <p>{data.versaoNome}</p>
                                </div>
                                <div className={styles.selectedCapitulo}>
                                    <p>{data.livroNome}: {data.selectedCapitulo}</p>
                                </div>
                                <div className={styles.contentSelected}>
                                    <p><span>{data.selectectVersiculo} -&gt; </span>{data.contentSelected}</p>
                                </div>
                                <div className={styles.notas}>
                                    <textarea name='notas' minLength={2} maxLength={200} wrap="soft" placeholder='Não há notas' value={data.notes} disabled={true}></textarea>
                                </div>

                                <div className={styles.goContentImage}>
                                    <img className={styles.goContentImage}></img>
                                </div>

                                <div className={styles.buttons}>
                                    <button className={styles.buttonsEdit} onClick={() => OpenCloseModalFavorito(index)} ><img src="/images/favorite/edit.svg"></img></button>
                                    <button className={styles.buttonsfechar} onClick={() => ""}>FECHAR </button>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </main>
        </>

    )
}