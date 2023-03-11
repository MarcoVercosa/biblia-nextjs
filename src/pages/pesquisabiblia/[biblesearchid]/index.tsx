import COMPBibleSearchByWord from "@/components/COMPBibleSearchByWord";
import Footer from "@/components/COMPfooter";
import NavBar from "@/components/COMPnavbar";
import Loading from "@/components/COMPloading";
import { IFindBibleBySearchAPI } from "@/interfaces/interfaces";
import { FindBibleBySearchAPIClientSide } from "@/services/fetch";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BibleSearchByWord(): JSX.Element {
    const [dataResultSearch, setDataResultSearch] = useState<IFindBibleBySearchAPI[] | string>([])
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    useEffect(() => {//busca dados da pesquisa conforme o params da URL e encaminha parta o componente filho
        async function FindBibleBySearchAPI(): Promise<void> {
            setLoading(true)
            const response: IFindBibleBySearchAPI[] = await FindBibleBySearchAPIClientSide(router.query.biblesearchid as any)
            if (response.length < 1) {
                setLoading(false)
                setDataResultSearch("empty")
                return
            }
            setDataResultSearch(response)
            setLoading(false)
        }
        if (!router.isReady) return
        FindBibleBySearchAPI()

    }, [router.isReady, router])

    return (
        <>
            <Head>
                <title>Pesquisa- Almeida revisada e atualizada - Vida da fonte</title>
                <meta name="description" content={"Pesquisa biblia sagrada - Almeida revisada e atualizada - Vida da fonte"}></meta>
            </Head>
            <NavBar />
            {loading ? <Loading /> : <COMPBibleSearchByWord data={dataResultSearch} />}


            <Footer />
        </>
    )
}