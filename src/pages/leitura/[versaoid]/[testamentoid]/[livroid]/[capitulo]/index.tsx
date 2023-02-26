import { useRouter } from "next/router"

export default function LeituraBiblia() {

    const router = useRouter()
    console.log(router.query)
    return (
        <h1>
            Leitura
        </h1>
    )
}