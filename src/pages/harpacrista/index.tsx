import Head from 'next/head'
import styles from '@/styles/harpaCrista.module.css'
import NavBar from "../../components/navbar"
import Footer from "../../components/footer"

import { FetchSelectNumeroHarpa } from '@/services/fetch'
import { JSXElementConstructor, useState } from 'react'



export default function HarpaCrista({ data }: any) {
    console.log(data)

    const [select, setSelect] = useState<any>()

    function MountSelectComponent(): any {
        let mount = []
        for (let i = 1; i < data[0]?.numero; i++) {
            mount.push(<option key={i} value={i} >{i}</option>)
        }
        return mount
        // setSelect(mount)

    }
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <header>
                    <div className={styles.buscarPorSelect}>
                        <div className={styles.select}>
                            <p>Número</p>
                        </div>
                        <div>
                            <select name="versao" value={"selectedField.versao"} >
                                <option value="selecione" disabled>Selecione</option>
                                {data && <MountSelectComponent />}
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

            </main>
        </>
    )
}

export async function getServerSideProps() {

    let data = await FetchSelectNumeroHarpa()
    return { props: { data } }

}