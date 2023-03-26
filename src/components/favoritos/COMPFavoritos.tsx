import styles from '@/styles/favoritos/favoritos.module.css'
import { useEffect, useState } from 'react'
import { IFavoritesSaveLocalStorage } from '@/interfaces/interfaces'

export default function RenderFavoritos() {

    const [dataFromLocalStorage, setDataFromLocalStorage] = useState<IFavoritesSaveLocalStorage[]>()

    useEffect((): void => {
        if (window) {
            setDataFromLocalStorage(JSON.parse(localStorage.getItem("favorites") as any))
        }
    }, [])
    return (

        <>
            <main className={styles.main}>
                <div className={styles.content}>
                    {dataFromLocalStorage?.map((data: IFavoritesSaveLocalStorage) => {
                        return (
                            <div className={styles.container} style={{ backgroundColor: data.colorNotes }}>
                                <div className={styles.starImage} >
                                    <img src="images/modaFavorite/favorite.svg" ></img>
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
                                    <textarea name='notas' minLength={2} maxLength={200} wrap="soft" placeholder='Não há notas' disabled={true}>{data.notes}</textarea>
                                </div>

                                <div className={styles.goContentImage}>
                                    <img className={styles.goContentImage}></img>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </main>
        </>

    )
}