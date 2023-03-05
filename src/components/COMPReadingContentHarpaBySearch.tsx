import { IHinoPorPalavra } from "@/entities/interfaces"
import styles from "../styles/COMPReadingContentHarpaBySearch.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

export default function ReadingContentHarpaBySearch({ searchWordResultContent }: { searchWordResultContent: IHinoPorPalavra[] }) {

    return (
        <article className={styles.contentSeachByWord}>
            {searchWordResultContent.map((data: IHinoPorPalavra, index: number) => {
                return (
                    <>

                        <div className={styles.container}>
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