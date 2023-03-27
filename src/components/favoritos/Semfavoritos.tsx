import styles from '@/styles/favoritos/noFavoritos.module.css'

export default function SemFavorites() {
    return (
        <main className={styles.main}>
            <div className={styles.divImage}>
                <img alt="No favorites" src="/images/favorite/noFavorites.svg"></img>
                <p>Você não tem nenhum favoritos :(</p>
            </div>
        </main>
    )
}