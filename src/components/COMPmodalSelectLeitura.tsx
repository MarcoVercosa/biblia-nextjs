import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from 'next/router'
import styles from "../styles/modalSelectLeitura.module.css"
import { FetchAPILivros, FetchAPICapitulos, FetchAPIVersaoClientSide, FetchAPITestamentoClientSide } from "@/services/fetch";
import { IresultVersao, IresultTestamento, IresultLivros, IresultCapitulos, ISelectFieldOptions, IPropsModalSelectLeitura } from "../interfaces/interfaces";


export default function ModalSelectLeitura({ OpenCloseModal }: IPropsModalSelectLeitura) { //as props preReder são feitas através de fetch via getServerSideProps na page Home, pois a versão e testamento, são sempre os mesmos
    const [versao, setVersao] = useState<IresultVersao[]>();
    const [testamento, setTestamento] = useState<IresultTestamento[]>();
    const [livros, setLivros] = useState<IresultLivros[]>([]);
    const [capitulo, setCapitulo] = useState<any>([]);

    useEffect(() => {
        async function FindDataAPIModalMenu() {
            let preRenderVersaoOpcoes: IresultVersao[] = await FetchAPIVersaoClientSide()
            let preRenderTestamentoOpcoes: IresultTestamento[] = await FetchAPITestamentoClientSide()
            setVersao(preRenderVersaoOpcoes)
            setTestamento(preRenderTestamentoOpcoes)
        }
        FindDataAPIModalMenu()
    }, [])

    const [selectedField, setSelectedField] = useState<ISelectFieldOptions>({
        versao: "selecione",
        versao_id: 0,
        testamento: "selecione",
        testamento_id: 0,
        livro: "selecione",
        livro_id: 0,
        capitulo: "selecione",
        capitulo_id: 0,
    })
    const router = useRouter()

    function UpdateSelectedFields(field: string, value: string, keyName: string, keyValue: string) {
        setSelectedField(prevState => { return { ...prevState, [field]: value, [keyName]: keyValue } })
    }
    async function ClickTestamento(valueIdTestamento: string) {//ao selecionar um testamento, irá solicitar os livros enviando  o id do testamento
        let response: IresultLivros[] = await FetchAPILivros(Number(valueIdTestamento))
        setLivros(response)
        setCapitulo([])
        setSelectedField(prevState => { return { ...prevState, capitulo: "selecione", capitulo_id: 0, livro: "selecione", livro_id: 0 } }) //ao alterar o testamento, volta para o padrão os campos selecionados Livro e capitulo
    }
    async function ClickLivro(livroIDSelect: string) {// ao selecionar livro, irá solicitar os capitulos do livro selecionado
        if (Number(livroIDSelect) != 0) { //Se o livroIDSelect for  diferente de 0, é pq o livro  está com a opção diferente de  => selecione
            let response: IresultCapitulos[] = await FetchAPICapitulos(selectedField.versao_id, livroIDSelect)
            let component = []
            for (let i = 1; i <= response[0].capitulo; i++) { component.push(<option key={i} value={i} >{i}</option>) }//cria o componente conforme o numero de capitulos
            setCapitulo(component)
            setSelectedField(prevState => { return { ...prevState, capitulo: "selecione", capitulo_id: 0 } }) //ao alterar o Livro, volta para o padrão o campo selecionado capitulo 
        } else { setSelectedField(prevState => { return { ...prevState, capitulo: "selecione", capitulo_id: 0 } }) } //ao alterar o Livro, volta para o padrão o campo selecionado capitulo 
    }
    function GoBible() {
        if (selectedField.versao != "selecione" && selectedField.testamento != "selecione"
            && selectedField.livro != "selecione" && selectedField.capitulo != "selecione") {
            OpenCloseModal()
            router.push(`/leitura/${selectedField.versao_id}/${selectedField.testamento_id}/${selectedField.livro_id}/${selectedField.capitulo_id}`)
        } else { alert("Selecione todos os campos antes de iniciar a leitura") }
    }
    return (
        <div className={styles.backgroundeffectmodal}>
            <article className={styles.modalcontainer}>
                <div className={styles.modalTitulo}>
                    <h1>Selecione suas opções</h1>
                </div>
                <div className={styles.modalmain}>
                    <div className={styles.modalopcoes}>
                        <div className={styles.modalopcoesversao} >
                            <div className={styles.selectlabel}>Versão</div>
                            <select name="versao" value={selectedField.versao} onChange={(evt) => { UpdateSelectedFields("versao", evt.target.value, "versao_id", evt.target.value) }}>
                                <option value="selecione" disabled>Selecione</option>
                                {versao && versao.map((data: IresultVersao) => {
                                    return (<option key={data.versao_id} value={data.versao_id} >{data.versao_nome}</option>)
                                })}
                            </select>
                        </div>
                        <div className={styles.modalopcoestestamento} >
                            <div className={styles.selectlabel} >Testamento</div>
                            <select name="testamento" value={selectedField.testamento} disabled={selectedField.versao == "selecione"} onChange={(evt) => { UpdateSelectedFields("testamento", evt.target.value, "testamento_id", evt.target.value), ClickTestamento(evt.target.value) }}>
                                <option value="selecione" disabled>Selecione</option>
                                {testamento && testamento.map((data: IresultTestamento) => {
                                    return (<option key={data.testamento_id} value={data.testamento_id} >{data.testamento_nome}</option>)
                                })}
                            </select>
                        </div>
                        <div className={styles.modalopcoeslivro} >
                            <div className={styles.selectlabel} >Livro</div>
                            <select name="livro" value={selectedField.livro} disabled={selectedField.testamento == "selecione"} onChange={(evt) => { UpdateSelectedFields("livro", evt.target.value, "livro_id", evt.target.value), ClickLivro(evt.target.value) }}>
                                <option value="selecione" >Selecione</option>
                                {livros && livros.map((dataLivro: IresultLivros) => {
                                    return (<option key={dataLivro.livro_id} value={dataLivro.livro_id} >{dataLivro.livro_nome}</option>)
                                })}
                            </select>
                        </div>
                        <div className={styles.modalopcoescapitulo} >
                            <div className={styles.selectlabel} >Capítulo</div>
                            <select name="capitulo" value={selectedField.capitulo} disabled={selectedField.livro == "selecione"} onChange={(evt) => { UpdateSelectedFields("capitulo", evt.target.value, "capitulo_id", evt.target.value) }}>
                                <option value="selecione" >Selecione</option>
                                {capitulo && capitulo}
                            </select>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.buttonsok} onClick={GoBible} >OK</button>
                        <button className={styles.buttonsfechar} onClick={OpenCloseModal}>FECHAR </button>
                    </div>
                </div>
            </article>
        </div>
    )
}
