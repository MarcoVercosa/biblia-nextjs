import { GetDataFromIA } from "@/services/fetch"
import { useEffect, useState } from "react"
import Loading from "../loading/COMPloading"
import styles from "../../styles/bible/modalMoreInformationIA.module.css"

export default function ModalMoreInfoIA({ word, OpenCloseModal }: { word: string | undefined, OpenCloseModal: () => void }): JSX.Element {
    const [information, setInformation] = useState<{ title: string | undefined, content: string | undefined }>({
        title: "",
        content: ""
    })
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        async function GetDataFromAPI() {
            setLoading(true)
            let response: any = await GetDataFromIA(word)
            setInformation(prevState => { return { ...prevState, title: word, content: response?.response?.result } })
            setLoading(false)
        }
        GetDataFromAPI()
    }, [word])

    if (loading) {
        return (
            <article className={styles.article}>
                <Loading />
            </article>
        )
    } else {
        return (
            <article className={styles.article}>
                <section className={styles.container}>
                    <div className={styles.buttons} onClick={OpenCloseModal}>
                        <img alt="Fechar" src="/images/moreinformationIA/iconsMenu/closeInfos.png"></img>
                    </div>
                    <div className={styles.titulo}>
                        <h1>{information.title}</h1>
                        <p>{information.content}</p>

                    </div>

                </section>
            </article>
        )
    }
}

