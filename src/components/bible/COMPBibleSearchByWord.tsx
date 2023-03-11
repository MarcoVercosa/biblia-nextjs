import { IFindBibleBySearchAPI } from "@/interfaces/interfaces";
import Link from "next/link";
import { NextRouter } from "next/router";
import { useRouter } from "next/router";;
import { useEffect, useState } from "react";
import styles from "../../styles/bible/COMPBibleSearchByWord.module.css"
import ContentBibleNotFound from "./COMPReadingContentBibleNotFound";

export default function COMPBibleSearchByWord({ data }: { data: IFindBibleBySearchAPI[] | string }): JSX.Element {
    const [dataResultSearch, setDataResultSearch] = useState<IFindBibleBySearchAPI[] | string>([])
    const router: NextRouter = useRouter()
    useEffect(() => {
        setDataResultSearch(data)
    }, [data])


    if (dataResultSearch == "empty") {
        return (
            <section className={styles.main}>
                <ContentBibleNotFound value={router.query.biblesearchid} />
            </section>
        )
    } else {
        return (
            <section className={styles.main}>
                {dataResultSearch?.map((datas: IFindBibleBySearchAPI, index: number): JSX.Element => {
                    return (

                        <div className={styles.container}>
                            {/* O link já direciona com link ancora */}
                            <Link target="_blank" href={`/leitura/${1}/${datas.livro_testamento_id}/${datas.livro_id}/${datas.capitulo}#${datas.versiculo}`}>
                                <div className={styles.info}>
                                    <p>{datas.livro_nome} - "{datas.livro_abreviado}" / Cap: {datas.capitulo} Ver: {datas.versiculo}</p>
                                </div>
                                <div className={styles.content}>
                                    <p>{datas.conteudo}</p>
                                </div>
                            </Link>
                        </div>

                    )
                })}
            </section>
        )
    }


}