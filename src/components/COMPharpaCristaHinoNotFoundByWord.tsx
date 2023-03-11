import Image from "next/image";
import styles from "../styles/harpaCristaHinoNotFoundByWord.module.css"


export default function HinoNotFoundByWord({ searchWordField }: { searchWordField: string }): JSX.Element {
    return (
        <>
            <article className={styles.errorHinoArticle}>
                <div className={styles.divImage}>
                    <Image
                        src="/images/readingHinoHarpa/hinoNotFound.svg"
                        alt="nao encontrado"
                        className={styles.imageErro}
                        fill
                        priority
                    />
                </div>
                <div className={styles.message}>
                    <p>Nenhum hino foi encontrado com a palavra pesquisada: </p><span>{searchWordField}</span>
                </div>
            </article>
        </>
    )
}