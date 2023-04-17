import Head from 'next/head'

import styles from '@/styles/home/Home.module.css'
import NavBar from "../components/navbar/COMPnavbar"
import Footer from "../components/footer/COMPfooter"
import ArticleHome from '../components/home/COMParticleHomeInfos'


export default function Home(): JSX.Element {
  return (
    <>

      <Head>
        <title>Fonte de vida - Bíblia Online</title>
        <meta name="description" content="13 versões da Bíblia Sagrada Online e mais de 500 hinos da harpa. Conteúdo fácil e prático para você !"></meta>
        <link rel="canonical" href="https://www.fontedevida.com.br"></link>
        <meta name="keywords" content="biblia online, cânticos cristãos, hino harpa, hino da harpa, 1993 – Almeida Revisada e Atualizada, 1969 – Almeida Revisada e Corrigida, 2009 – Almeida Revisada e Corrigida, 2017 – Nova Almeida Atualizada, 2000 – Nova Tradução na Linguagem de Hoje, Nova Versão Internacional, Nova Versão Transformadora, 1848 – Almeida Antiga, Almeida Recebida, King James Atualizada, Basic English Bible, New International Version, American Standard Version"></meta>
      </Head>
      <div className={styles.backgroundanimation}>
        <NavBar />
        <ArticleHome />
      </div>
      <Footer />
    </>
  )
}


// export async function getServerSideProps() {
//   let preRenderVersaoOpcoes: IresultVersao[] = await FetchAPIVersaoServerSide()
//   let preRenderTestamentoOpcoes: IresultTestamento[] = await FetchAPITestamentoServerSide()
//   // Fetch data from external API on time build
//   return { props: { preRenderVersaoOpcoes, preRenderTestamentoOpcoes } }
// }

