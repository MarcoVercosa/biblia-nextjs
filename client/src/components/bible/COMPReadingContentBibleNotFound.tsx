import Image from "next/image";
import { memo } from "react";
import styles from "../../styles/bible/COMPReadingContentBibleNotFound.module.css"


function ContentBibleNotFound({ value }: { value?: string | any }): JSX.Element {
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

export default memo(ContentBibleNotFound)