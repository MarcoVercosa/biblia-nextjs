import * as fs from 'fs';
const path = require('path')
export interface IresultCapitulos {
    capitulo: number
}

const versao = 1 // somente a Almeida revisada e atualizada
const antigoTestamento = 1
const livrosAntigoTestamento = 39
const novoTestamento = 2
const livroNovotestamento = 66 //todos os livros Antigo e novo testamentos

const urlApiDev = 'https://vps45754.publiccloud.com.br:9000'


export async function FetchAPICapitulosServerSide(versaoID: string | number, livroID: string | number): Promise<IresultCapitulos[] | []> {
    try {
        const response = await fetch(`${urlApiDev}/mais/buscacapitulo/${versaoID}/${livroID}`, {
            headers: {
                'Content-Type': 'application/json',
                'origin': 'http://nextfetchbuild'
            }
        })
        if (response.status == 200) {
            const data = await response.json()
            return data as IresultCapitulos[]
        } else { throw new Error("Forbidden or internal error") }
    } catch (error) {
        console.log(error)
        return []
    }
}

async function MountFileSiteMap() {

    fs.writeFile(path.resolve("public", "siteMapFonteDeVida.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`, (err: any) => {
        if (err) console.log(err);
    })

    try {//cria paths do ANTIGO testamento
        for (let testamento = 1; testamento <= antigoTestamento; testamento++) {//somente 1 (antigo testamento)
            for (var livros = 1; livros <= livrosAntigoTestamento; livros++) {//para cada livro do antigo testamento
                let fetchCapitulos = await FetchAPICapitulosServerSide(versao, livros)//obtem a quantidade exata de capitulos do livro da vez
                for (var capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++) {//para cada capitulo encontrado

                    fs.writeFile(path.resolve("public", "siteMapFonteDeVida.xml"), `\n<url>\n<loc>https://fontedevida.app.br/leitura/${versao}/${testamento}/${livros}/${capitulos}</loc>\n<lastmod>2023-04-26T18:35:03+01:00</lastmod>\n<priority>0.8</priority>\n</url>`, { flag: "a" }, (err) => {
                        if (err) console.log(err);
                        ;
                    })
                }
            }
        }
        for (let testamento = 2; testamento <= novoTestamento; testamento++) {//somente o 2 (novo testamento)
            for (var livros = 40; livros <= livroNovotestamento; livros++) {//para cada livro do novo testamento INICIANDO A PARTIR DO 40, POIS O ANTIGO TESTAMENTO TERMINA NO 39
                let fetchCapitulos = await FetchAPICapitulosServerSide(versao, livros)//obtem a quantidade exata de capitulos do livro da vez
                for (var capitulos = 1; capitulos <= fetchCapitulos[0].capitulo; capitulos++) {//para cada capitulo encontrado
                    fs.writeFile(path.resolve("public", "siteMapFonteDeVida.xml"), `\n<url>\n<loc>https://fontedevida.app.br/leitura/${versao}/${testamento}/${livros}/${capitulos}</loc>\n<lastmod>2023-04-26T18:35:03+01:00</lastmod>\n<priority>0.8</priority>\n</url>`, { flag: "a" }, (err) => {
                        if (err) console.log(err);
                        ;
                    })
                }
            }
        }
        fs.writeFile(path.resolve("public", "siteMapFonteDeVida.xml"), "\n</urlset>", { flag: "a" }, (err: any) => {
            if (err) console.log(err);
        })

    } catch (err) {
        console.log(err)
    }
}

MountFileSiteMap()

