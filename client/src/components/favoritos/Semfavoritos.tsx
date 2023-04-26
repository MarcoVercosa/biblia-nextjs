import styles from '@/styles/favoritos/noFavoritos.module.css'
import { memo } from 'react'

function SemFavorites() {
    return (
        <main className={styles.main}>
            <div className={styles.divImage}>
                <img alt="No favorites" src="/images/favorite/noFavorites.svg"></img>
                <p>Você ainda não tem nenhum favoritos :(</p>
            </div>
        </main>
    )
}

export default memo(SemFavorites)