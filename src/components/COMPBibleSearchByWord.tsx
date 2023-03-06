import { IFindBibleBySearchAPI } from "@/entities/interfaces"; import Link from "next/link";
;
import { useEffect, useState } from "react";
import styles from "../styles/COMPBibleSearchByWord.module.css"

export default function COMPBibleSearchByWord({ data }: { data: IFindBibleBySearchAPI[] }) {
    const [dataResultSearch, setDataResultSearch] = useState<IFindBibleBySearchAPI[]>([])
    useEffect(() => {
        setDataResultSearch(data)
    }, [data])

    return (
        <>
            <section className={styles.main}>
                {dataResultSearch.map((datas: IFindBibleBySearchAPI, index: number) => {
                    return (
                        <Link target="_blank" href={`/leitura/${1}/${datas.livro_testamento_id}/${datas.livro_id}/${datas.capitulo}#${datas.versiculo}`}>
                            <div className={styles.container}>
                                <div className={styles.info}>
                                    <p>{datas.livro_nome} - "{datas.livro_abreviado}" / Cap: {datas.capitulo} Ver: {datas.versiculo}</p>
                                </div>
                                <div className={styles.content}>
                                    <p>{datas.conteudo}</p>
                                </div>

                            </div>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}