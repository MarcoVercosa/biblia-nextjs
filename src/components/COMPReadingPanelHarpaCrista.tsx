import { useEffect, useState } from "react"
import styles from "@/styles/readingPanelHarpaCrista.module.css"
import { useRouter } from "next/router"
import { IHinoPorPalavra, IPropsReadingPanelHarpaCrista } from "@/interfaces/interfaces"
import HinoNotFoundByWord from "./COMPharpaCristaHinoNotFoundByWord"
import ReadContentHino from "./COMPharpaCristaContent"
import ReadingContentHarpaBySearch from "./COMPReadingContentHarpaBySearch"
import { FetchConteudoHinoBySearchClientSide } from "@/services/fetch"
export default function ReadingPanelHarpaCrista({ numerosHinosCreateSeletectTag, conteudoHinoPageCurrent, idCanticoURL }: IPropsReadingPanelHarpaCrista) {
    const [numerosHinos, setNumerosHinos] = useState(numerosHinosCreateSeletectTag)
    const [conteudoHinos, setConteudoHinos] = useState(conteudoHinoPageCurrent)
    const [selectedHino, setSelectedHino] = useState("Selecione")
    const [searchWordField, setSearchWordField] = useState("")
    const [searchWordResultContent, setSearchWordResultContent] = useState<IHinoPorPalavra[]>([])
    const [searchWordResultContentError, setSearchWordResultContentError] = useState<boolean | string>(false)

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
    function UpdateWordSearchField(value: string) {
        setSearchWordResultContentError(false) //FALSE para não permitir: se ao digitar na pesquisa, se ja houver mensagem de erro, ele ficará renderizando na mesagem de erro as palavras digitadas
        setSearchWordField(value)
    }

    function GoHinoSelected() {
        if (selectedHino == "selecione") { return }//se o valor é selecione, nao faça nada
        router.push(`/harpacrista/${selectedHino}`)
    }

    async function GoFindHinoBySearch(value: string) {
        if (value != "Enter") { return }
        if (searchWordField.length > 1 && searchWordField.length < 11) {
            try {
                let response: IHinoPorPalavra[] = await FetchConteudoHinoBySearchClientSide(searchWordField)
                if (response.length < 1) {// se nada retornar
                    setConteudoHinos([])//não renderiza conteudo
                    setSelectedHino("selecione") //altera o combobox para selecione
                    setSearchWordResultContent([]) //zera resultado de pesquisa por palavra
                    setSearchWordResultContentError(searchWordField) //ativa componente de erro
                } else {
                    setConteudoHinos([])
                    setSelectedHino("selecione")
                    setSearchWordResultContent(response)
                    setSearchWordResultContentError(false)
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
                        <input type="text" name="pesquisahino" minLength={2} maxLength={10} placeholder="Press enter to search" value={searchWordField} onChange={(evt) => { UpdateWordSearchField(evt.target.value) }} onKeyDown={(evt) => { GoFindHinoBySearch(evt.key) }}></input>
                    </div>
                </div>
            </header>
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
                    <HinoNotFoundByWord searchWordField={searchWordField} />
                }
            </article>

        </main>
    )
}

