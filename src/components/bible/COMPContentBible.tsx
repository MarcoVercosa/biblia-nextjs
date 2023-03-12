import { IBuscaConteudoLeitura } from "@/interfaces/interfaces"
import styles from "@/styles/bible/content.module.css"
import Image from "next/image";
import { useState } from "react";

export default function Content({ data, anchorURLValue }: { data: IBuscaConteudoLeitura, anchorURLValue: string }): JSX.Element {
    const [openMenuInformation, setOpenMenuInformation] = useState<boolean>(false)

    function OpenCloseMenuInformation(): void {
        setOpenMenuInformation(!openMenuInformation)
    }
    return (
        <>
            <div className={styles.nomeversao}><h3>{data?.nomeVersao[0].versao_nome}</h3></div>
            <div className={styles.livrocapitulo}>
                <h1>{data?.nomeLivro[0].livro_nome}: {data?.capituloAtual}</h1>
                <div className={styles.divimagemia} onClick={OpenCloseMenuInformation}>
                    <Image
                        src="/images/moreinformationIA/information.svg"
                        alt="Sobre esse capítulo"
                        className={styles.imageMoreInformation}
                        fill
                        priority
                    />
                    <div className={styles.containermenuinformation} style={{ display: openMenuInformation ? "flex" : "none" }}>
                        <div className={styles.menuinformation}>
                            <div className={styles.menuinformationimage}>
                                <img alt="Sobre essa versão" src="/images/moreinformationIA/iconsMenu/versao.png"></img>
                                <p>Sobre esta versão</p>
                            </div>
                            <div className={styles.menuinformationimage}>
                                <img alt="Sobre esse livro" src="/images/moreinformationIA/iconsMenu/livro.png"></img>
                                <p>Sobre esse livro</p>
                            </div>
                            <div className={styles.menuinformationimage}>
                                <img alt="Sobre esse capitulo" src="/images/moreinformationIA/iconsMenu/capitulo.svg"></img>
                                <p>Sobre esse capitulo</p>
                            </div>
                            <div className={styles.menuinformationimage}>
                                <img alt="Curiosidade" src="/images/moreinformationIA/iconsMenu/curiosidade.png"></img>
                                <p>Curiosidades sobre o livro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {data?.conteudo.map((dados: any, index: number) => {
                    return (<p id={(index + 1).toString()} style={{ color: anchorURLValue == (index + 1).toString() ? "red" : "black" }} key={index}><span>{index + 1} </span>  - {dados.conteudo}</p>)
                })
                }
            </div>
        </>
    )
}