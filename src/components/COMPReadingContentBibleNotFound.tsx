import Image from "next/image";
import styles from "../styles/COMPReadingContentBibleNotFound.module.css"


export default function ContentBibleNotFound() {
    return (
        <>
            <article className={styles.errorHinoArticle}>
                <div className={styles.divImage}>
                    <Image
                        src="/images/readingBible/notFound.svg"
                        alt="nao encontrado"
                        className={styles.imageErro}
                        fill
                        priority
                    />
                </div>
                <div className={styles.message}>
                    <p>Conteúdo solicitado não encontrado.</p>
                </div>
            </article>
        </>
    )
}