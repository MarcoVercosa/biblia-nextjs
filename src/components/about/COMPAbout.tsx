import Image from 'next/image';
import styles from "../../styles/about/about.module.css"

export default function COMPAbout(): JSX.Element {
    return (
        <article className={styles.sobrearticle}>
            <div className={styles.sobrearticlediv}>
                <h2>Sobre</h2>
                <p>Olá, meu nome é Marco. Uma pessoa cheia de defeitos e que comete falhas, mas que sempre tenta fazer o melhor e melhorar para agradar a <strong>Deus</strong>.</p>
                <p><strong>A vida de um cristão é feita de busca incansável pela boa, perfeita e agradável presença de Deus e de boas obras, obras que ajudam seu próximo e que agradam o Pai, filho e o Espírito Santo segundo a vontade de Deus.</strong></p>
                <p>Mas eu sempre achei que as obras que faço ou que já fiz ainda são pouquíssimas perto do que Deus já fez por mim.</p>
                <p>É claro, mesmo que se eu dedicar minha vida inteira a fazer obras, <strong>ainda sim não será o suficiente perto do que Deus e seu filho Jesus já fizeram por mim.</strong></p>
                <p> E como gosto muito de tecnologia, resolvi criar algo relacionado que agradasse a Deus.</p>
                <p>E foi com muito orgulho e suor que criei o site <strong>FONTE DE VIDA</strong>, para que você possa de forma dinâmica, fácil e intuitiva
                    ler a palavra de Deus, pois Sua palavra é vida e vida em abunbdância e deve ser acessível de forma prática e fácil. </p>
                <p> O site <strong>FONTE DE VIDA</strong> foi criado para poder levar a palavra, conhecimento e a vontade de Deus para qualquer lugar do mundo. </p>
                <p>Aqui você tem acesso às <strong>13 versões da biblia sagrada totalmente online.</strong></p>
                <p>O site FONTE DE VIDA permite você a encontrar de forma fácil o livro, capítulo e versículo e também via pesquisa por palavra,</p>
                <p>onde a pesquisa lhe mostrará livro, capítulo e versículo relacionado a palavra desejada e te direcionará até o caminho correto onde se encontra na bíblia.</p>

                <p>Há também acesso aos <strong>524 Hinos da Harpa Cristã.</strong> </p>
                <p>Onde você pode buscar o hino desejado tanto por número, quanto pela pesquisa por palavra contida no Hino.</p>
                <hr />

                <p> Esse site <strong>não tem fins lucrativos</strong>, por isso você não vai encontrar propagandas durante seu uso.</p>
                <hr />

                <p>Caso você queira propor melhorias ou correções,  por favor, envie um e-mail com as informações: marco2011sky@gmail.com</p>

                <h3>QUE DEUS ABENÇOE CADA UM DE VOCÊS COM MUITA SAÚDE, PAZ E PRINCIPALMENTE COM A PRESENÇA DELE, NA QUAL É PERFEITA E AGRADÁVEL.</h3>

                <p>NÃO SE ESQUEÇA: VOCÊ É MUITO AMADO E ESPECIAL PRA DEUS. SEMPRE !</p>
                <div className={styles.diamondimage}>
                    <Image
                        src="/images/about/diamond.svg"
                        alt="nao encontrado"
                        className={styles.imageErro}
                        fill
                        priority
                    />
                </div>
                <p>Um forte abraço a todos.</p>
            </div>
        </article>
    )
}