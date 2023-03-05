import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from "../components/COMPnavbar"
import Footer from "../components/COMPfooter"
import ArticleHome from '../components/COMParticleHomeInfos'


export default function Home() {
  return (
    <>
      <div className={styles.backgroundanimation}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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

