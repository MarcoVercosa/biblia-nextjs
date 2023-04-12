import COMPBibleSearchByWord from "@/components/bibleSearchByWord/COMPBibleSearchByWord";
import Footer from "@/components/footer/COMPfooter";
import NavBar from "@/components/navbar/COMPnavbar";
import Loading from "@/components/loading/COMPloading";
import { IFindBibleBySearchAPI } from "@/interfaces/interfaces";
import { FindBibleBySearchAPIClientSide } from "@/services/fetch";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function BibleSearchByWord(): JSX.Element {
    const [dataResultSearch, setDataResultSearch] = useState<IFindBibleBySearchAPI[]>([])
    const dataResultSearchRef = useRef<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter()
    useEffect(() => {//busca dados da pesquisa conforme o params da URL e encaminha parta o componente filho
        async function FindBibleBySearchAPI(): Promise<void> {
            setLoading(true)
            try {
                const response: IFindBibleBySearchAPI[] = await FindBibleBySearchAPIClientSide(router.query.biblesearchid as any)
                if (response.length < 1) {
                    dataResultSearchRef.current = []
                    return
                }
                dataResultSearchRef.current = response

            } catch (error) {
                console.log(error)
                dataResultSearchRef.current = []

            } finally {
                setLoading(false)
            }
        }
        if (!router.isReady) return //se ainda não é possivel pegar os dados da rota
        FindBibleBySearchAPI()

    }, [router])

    return (
        <>
            <Head>
                <title>Pesquisa- Almeida revisada e atualizada - Vida da fonte</title>
                <meta name="description" content={"Pesquisa biblia sagrada - Almeida revisada e atualizada - Vida da fonte"}></meta>
            </Head>
            <NavBar />
            {loading ? <Loading /> : <COMPBibleSearchByWord data={dataResultSearchRef.current} />}


            <Footer />
        </>
    )
}