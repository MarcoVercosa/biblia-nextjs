import { useState } from "react"
import styles from "@/styles/readingPanelHarpaCrista.module.css"

export default function ReadingPanelHarpaCrista({ numerosHinosSeletectTag, conteudoHinoPageCurrent }: any) {
    const [numerosHinos, setNumerosHinos] = useState(numerosHinosSeletectTag)
    const [conteudoHinos, setConteudoHinos] = useState(conteudoHinoPageCurrent)
    function MountSelectComponent(): any {
        let mount = []
        for (let i = 1; i <= numerosHinosSeletectTag[0]?.numero; i++) {
            mount.push(<option key={i} value={i} >{i}</option>)
        }
        return mount
    }

    return (
        <main className={styles.main}>
            <header>
                <div className={styles.buscarPorSelect}>
                    <div className={styles.select}>
                        <p>Número</p>
                    </div>
                    <div>
                        <select name="versao" value={"selectedField.versao"} >
                            <option value="selecione" disabled>Selecione</option>
                            {numerosHinosSeletectTag && <MountSelectComponent />}
                        </select>
                    </div>
                    <div>
                        <button>BUSCAR</button>
                    </div>
                </div>
                <div className={styles.buscarPorPalavra}>
                    <div>
                        <p>PALAVRA</p>
                    </div>
                    <div>
                        <input type="text" name="pesquisahino"></input>
                    </div>
                </div>
            </header>
            <article>
                {conteudoHinos && conteudoHinos[0]?.titulo}
                {conteudoHinos && conteudoHinos[0]?.letra}
            </article>

        </main>
    )
}

