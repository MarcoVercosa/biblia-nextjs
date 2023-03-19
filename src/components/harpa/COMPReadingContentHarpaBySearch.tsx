import { IHinoPorPalavra } from "@/interfaces/interfaces"
import styles from "../../styles/harpa/COMPReadingContentHarpaBySearch.module.css"
import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

function ReadingContentHarpaBySearch({ searchWordResultContent }: { searchWordResultContent: IHinoPorPalavra[] }) {
    return (
        <article className={styles.contentSeachByWord}>
            {searchWordResultContent.map((data: IHinoPorPalavra, index: number): JSX.Element => {
                return (
                    <>                        <div className={styles.container}>
                        <Link href={`/harpacrista/${data?.numero}`}>
                            <div className={styles.imagemHino}>
                                <Image
                                    src="/images/readingHinoHarpa/hinoFound.svg"
                                    alt="nao encontrado"
                                    className={styles.imageErro}
                                    fill
                                    priority
                                />
                            </div>
                            <div className={styles.NumeroHinoSearch}>
                                <p>{data?.numero}</p>
                            </div>


                            <div className={styles.TituloHinoSearch}>
                                <p key={index}>{data.titulo}</p>
                            </div>
                        </Link>
                    </div>

                    </>
                )
            })
            }
        </article>
    )
}

export default memo(ReadingContentHarpaBySearch)