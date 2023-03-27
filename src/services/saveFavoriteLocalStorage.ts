import { IBuscaConteudoLeitura, IFavoritesSaveLocalStorage } from "@/interfaces/interfaces"
interface Iprops {
    data: IBuscaConteudoLeitura;
    versiculoSelected: number;
    colorNotes: string;
    notes: string
    path: string

}
export class SaveFavoriteClass {
    data: IBuscaConteudoLeitura;
    versiculoSelected: number;
    colorNotes: string;
    notes: string;
    path: string;
    currentValueStorage: IFavoritesSaveLocalStorage[];
    constructor({ data, versiculoSelected, colorNotes, notes, path }: Iprops) {
        this.data = data
        this.versiculoSelected = versiculoSelected
        this.colorNotes = colorNotes
        this.notes = notes
        this.path = path
        this.currentValueStorage = []
    }

    CheckDuplicate(): boolean {
        let checkDuplicated: boolean = this.currentValueStorage.some((data) => data.path == this.path)
        if (checkDuplicated) { return true } else { return false }
    }

    GetDataLocalStorage(): IFavoritesSaveLocalStorage[] {
        let dataStorage: IFavoritesSaveLocalStorage[] = JSON.parse(localStorage.getItem('favorites') as string)
        return dataStorage
    }
    GrowKeyAndSave() {
        this.currentValueStorage.push({
            versaoNome: this.data.nomeVersao[0].versao_nome,
            livroNome: this.data.nomeLivro[0].livro_nome,
            selectedCapitulo: String(this.data.capituloAtual),
            selectectVersiculo: String(this.versiculoSelected),
            contentSelected: this.data.conteudo[this.versiculoSelected - 1].conteudo,
            colorNotes: this.colorNotes,
            notes: this.notes,
            path: this.path,
        })
        localStorage.setItem("favorites", JSON.stringify(this.currentValueStorage))
    }
    CreateKeyAndSave() {
        this.currentValueStorage = [{
            versaoNome: this.data.nomeVersao[0].versao_nome,
            livroNome: this.data.nomeLivro[0].livro_nome,
            selectedCapitulo: String(this.data.capituloAtual),
            selectectVersiculo: String(this.versiculoSelected),
            contentSelected: this.data.conteudo[this.versiculoSelected - 1].conteudo,
            colorNotes: this.colorNotes,
            notes: this.notes,
            path: this.path,
        }]
        localStorage.setItem("favorites", JSON.stringify(this.currentValueStorage))
    }

    SaveDataStorage(): string {
        try {
            this.currentValueStorage = this.GetDataLocalStorage()//Obtem os dados
            if (!this.currentValueStorage || this.currentValueStorage.length < 1) {                     //Verifica se há dados no local storage
                this.CreateKeyAndSave()                          //Se não existir, então crie
                return "Conteudo criado ! Verifique seu painel 'Favoritos'"
            } else {
                if (this.CheckDuplicate()) { return "Esse conteúdo já está em seus favoritos !" } //Verifique se nos dados encontrados já existe o valor a ser adicionado
                this.GrowKeyAndSave()                                                             //se false, adicione o valor na key já criada                                                  
                return "Conteudo adicionado junto com seus favoritos existentes. ! Verifique seu painel 'Favoritos'"
            }
        } catch (error) {
            console.log(error)
            return "Ocorreu algum erro ao salvar seus favoritos. Tente novamente em instantes"
        }
    }
}