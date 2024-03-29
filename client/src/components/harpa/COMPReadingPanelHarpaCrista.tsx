import { useEffect, useState, useRef } from "react"
import styles from "@/styles/harpa/readingPanelHarpaCrista.module.css"
import { useRouter } from "next/router"
import { IHinoPorPalavra, IPropsReadingPanelHarpaCrista } from "@/interfaces/interfaces"
import HinoNotFoundByWord from "./COMPharpaCristaHinoNotFoundByWord"
import ReadContentHino from "./COMPharpaCristaContent"
import ReadingContentHarpaBySearch from "./COMPReadingContentHarpaBySearch"
import { FetchConteudoHinoBySearchClientSide } from "@/services/fetch"
import Loading from "../loading/COMPloading"
export default function ReadingPanelHarpaCrista({ numerosHinosCreateSeletectTag, conteudoHinoPageCurrent, idCanticoURL }: IPropsReadingPanelHarpaCrista): JSX.Element {
    const [numerosHinos, setNumerosHinos] = useState(numerosHinosCreateSeletectTag)
    const [conteudoHinos, setConteudoHinos] = useState(conteudoHinoPageCurrent)
    const [selectedHino, setSelectedHino] = useState("Selecione")
    const searchWordFieldREF = useRef<HTMLInputElement>()
    const [searchWordResultContent, setSearchWordResultContent] = useState<IHinoPorPalavra[]>([])
    const [searchWordResultContentError, setSearchWordResultContentError] = useState<boolean | string>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const router = useRouter()

    useEffect(() => {
        setConteudoHinos(conteudoHinoPageCurrent) //atualzia conteudo do hino
        setNumerosHinos(numerosHinosCreateSeletectTag) //atualzia array de numeros dos hinos
        setSelectedHino(idCanticoURL?.toString()) //atualiza o id pesquisado vindo da URL
        setSearchWordResultContentError(false)// false para se houver componente de palavra não encontrada na tela, não renderizar
        setSearchWordResultContent([]) // se houver dados de pesquisa na tela, forçará a não ser renderizado
    }, [idCanticoURL, conteudoHinoPageCurrent])
    //USE EFFECT= Se um componente atualizar a URL, os componentes abaixo não atualizam. O useEffect força a atualização dos componente se a url/conteudoHino alterar
    function MountSelectComponent(): any {
        let mount = []
        for (let i = 1; i <= numerosHinos[0]?.numero; i++) {
            mount.push(<option key={i} value={i} >{i}</option>)
        }
        return mount
    }
    function UpdateSelectedFieldHino(value: string) {
        setSelectedHino(value)
    }

    function GoHinoSelected() {
        if (selectedHino == "selecione") { return }//se o valor é selecione, nao faça nada
        router.push(`/harpacrista/${selectedHino}`)
    }

    async function GoFindHinoBySearch(value: string) {
        let word = searchWordFieldREF.current?.value as string
        if (value != "Enter") { return }
        if (word.length > 1 && word.length < 16) {
            try {
                setLoading(true)
                let response: IHinoPorPalavra[] = await FetchConteudoHinoBySearchClientSide(word)
                if (response.length < 1) {// se nada retornar
                    setConteudoHinos([])//não renderiza conteudo
                    setSelectedHino("selecione") //altera o combobox para selecione
                    setSearchWordResultContent([]) //zera resultado de pesquisa por palavra
                    setSearchWordResultContentError(word) //ativa componente de erro
                    setLoading(false)
                } else {
                    setConteudoHinos([])
                    setSelectedHino("selecione")
                    setSearchWordResultContent(response)
                    setSearchWordResultContentError(false)
                    setLoading(false)
                }

            } catch (error) {
                console.log(error)
            }
        } else { alert("Digite pelo o menos 2 letras") }
    }

    return (
        <main className={styles.main}>
            <header>
                <div className={styles.buscarPorSelect}>
                    <div className={styles.select}>
                        <p>NÚMERO</p>
                    </div>
                    <div>
                        <select name="versao" value={selectedHino} onChange={(evt) => UpdateSelectedFieldHino(evt.target.value)} >
                            <option defaultValue={"selecione"} value="selecione">Selecione</option>
                            {numerosHinos && <MountSelectComponent />}
                        </select>
                    </div>
                    <div>
                        <button onClick={GoHinoSelected}>BUSCAR</button>
                    </div>
                </div>
                <div className={styles.buscarPorPalavra}>
                    <div>
                        <p>PALAVRA</p>
                    </div>
                    <div>
                        <input type="text" name="pesquisahino" minLength={2} maxLength={15} placeholder="Press enter to search" ref={searchWordFieldREF as any} onKeyDown={(evt) => { GoFindHinoBySearch(evt.key) }} />

                    </div>
                </div>
            </header>
            {loading ? <Loading /> :
                <>
                    <article>
                        {/* conteudo do hino selecionado */}
                        {conteudoHinos && <ReadContentHino conteudoHinos={conteudoHinos} />}
                    </article>
                    <article>
                        {/* Conteudo dos hinos encontrados pela busca por palavra */}
                        {searchWordResultContent.length > 0 && <ReadingContentHarpaBySearch searchWordResultContent={searchWordResultContent} />}
                    </article>
                    <article>
                        {/* Mensagem de erro caso a palvravra não retorne nenhum hino */}
                        {searchWordResultContentError &&
                            <HinoNotFoundByWord searchWordField={searchWordFieldREF.current?.value as string} />
                        }
                    </article>
                </>
            }
        </main>
    )
}

