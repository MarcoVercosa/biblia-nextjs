import styles from "../styles/articleHomeInfos.module.css"

export default function ArticleHome() {

    return (

        <article className={styles.artigoArticle}>

            <div className={styles.artigoArticleDivUm}>
                <h3>13 versões disponíveis para você ! </h3>
                <div className={styles.artigoArticleDivVersoes}>
                    <p>
                        1993 – Almeida Revisada e Atualizada
                    </p>
                    <p>
                        1969 – Almeida Revisada e Corrigida
                    </p>
                    <p>
                        2009 – Almeida Revisada e Corrigida
                    </p>
                    <p>
                        2017 – Nova Almeida Atualizada
                    </p>
                    <p>
                        2000 – Nova Tradução na Linguagem de Hoje
                    </p>
                    <p>
                        Nova Versão Internacional
                    </p>
                    <p>
                        Nova Versão Transformadora
                    </p>
                    <p>
                        1848 – Almeida Antiga
                    </p>
                    <p>
                        Almeida Recebida
                    </p>
                    <p>
                        King James Atualizada
                    </p>
                    <p>
                        Basic English Bible
                    </p>
                    <p>
                        New International Version
                    </p>
                    <p>
                        American Standard Version
                    </p>
                </div>
            </div>

            <div className={styles.artigoArticleDivDois}>
                <h3>Onde você estiver e sem fins lucrativos !</h3>
                <p>O Site FONTE DE VIDA foi criado para que você possa achar de modo fácil e prático
                    a palavra de Deus.
                </p>
            </div>

            <div className={styles.artigoArticleDivTres}>
                <h3>Fácil leitura em seu celular</h3>
                <p>O site FONTE DE VIDA foi criado não só para ser de fácil acesso em seu computador,
                    mas também em seu celular. Para que você leia a palavra de Deus  em qualquer lugar.
                </p>
            </div>

        </article>

    )


}