import styles from '@/styles/favoritos/favoritos.module.css'
import { useEffect, useRef, useState } from 'react'
import { IFavoritesSaveLocalStorage } from '@/interfaces/interfaces'
import ModalFavorite from './modalFavorite'
import SemFavorites from './Semfavoritos'
import Link from 'next/link'

export default function RenderFavoritos() {

    const [dataFromLocalStorage, setDataFromLocalStorage] = useState<IFavoritesSaveLocalStorage[]>([])
    const [semFavoritos, setSemFavoritos] = useState<boolean>(false)
    const [openCloseModalFavorito, setOpenCloseModalFavorito] = useState<boolean>()
    let indexLocationArray = useRef<IFavoritesSaveLocalStorage>()

    useEffect((): void => {
        if (window) {//se a property window já estiver carregada no client
            let dataLocal = JSON.parse(localStorage.getItem("favorites") as string)
            if (!dataLocal || dataLocal.length < 1) { setSemFavoritos((prevState) => prevState = true) }//se não houver dados no localStorage
            else {
                setSemFavoritos((prevState) => prevState = false)
            }
            setDataFromLocalStorage((prevState) => prevState = dataLocal)
        }
    }, [openCloseModalFavorito])
    function OpenCloseModalFavorito(indexArray?: number) {
        if (!isNaN(indexArray as number)) {//se houver número, então foi solicitado abertura do menu
            indexLocationArray.current = indexArray as any
            setOpenCloseModalFavorito((prevState) => !prevState)
        } else {
            setOpenCloseModalFavorito((prevState) => !prevState)
        }
    }

    if (semFavoritos) {
        return (
            <SemFavorites />
        )
    }
    return (
        <>
            {openCloseModalFavorito && <ModalFavorite OpenCloseModalFavorito={OpenCloseModalFavorito} indexLocationArray={indexLocationArray.current as any} data={dataFromLocalStorage as IFavoritesSaveLocalStorage[]} />}

            <main className={styles.main}>
                <div className={styles.content}>
                    {dataFromLocalStorage?.map((data: IFavoritesSaveLocalStorage, index: number) => {
                        return (
                            <div key={index} className={styles.container} style={{ backgroundColor: data.colorNotes }}>
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
                                    <Link
                                        key={index}
                                        href={data.path}
                                    >
                                        <button className={styles.buttonsGoURL} ><img src="/images/favorite/goURL.svg"></img></button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}