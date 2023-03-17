import Image from "next/image";
import styles from "../../styles/bible/COMPReadingContentBibleNotFound.module.css"


export default function ContentBibleNotFound({ value }: { value?: string | any }): JSX.Element {
    console.log("ContentBibleNotFound")
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
                    <p>Conteúdo solicitado não encontrado.<span> - {value} - </span></p>
                </div>
            </article>
        </>
    )
}