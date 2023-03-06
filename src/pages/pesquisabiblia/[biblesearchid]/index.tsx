import COMPBibleSearchByWord from "@/components/COMPBibleSearchByWord";
import Footer from "@/components/COMPfooter";
import NavBar from "@/components/COMPnavbar";
import { IFindBibleBySearchAPI } from "@/entities/interfaces";
import { FindBibleBySearchAPIClientSide } from "@/services/fetch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BibleSearchByWord() {
    const [dataResultSearch, setDataResultSearch] = useState<IFindBibleBySearchAPI[]>([])
    const router = useRouter()
    useEffect(() => {//busca dados da pesquisa conforme o params da URL e encaminha parta o componente filho
        async function FindBibleBySearchAPI(): Promise<void> {
            const response: IFindBibleBySearchAPI[] = await FindBibleBySearchAPIClientSide(router.query.biblesearchid as any)
            setDataResultSearch(response)
        }
        if (!router.isReady) return
        FindBibleBySearchAPI()
    }, [router.isReady, router])

    return (
        <>
            <NavBar />
            <COMPBibleSearchByWord data={dataResultSearch} />
            <Footer />
        </>
    )
}