import { IReadContentHino } from "@/interfaces/interfaces"
import { memo } from "react"
import styles from "../../styles/harpa/harpaCristaContent.module.css"

function ReadContentHino({ conteudoHinos }: IReadContentHino[] | any): JSX.Element {
    return (
        <article className={styles.tituloEContentHino}>
            <div className={styles.tituloHino}>
                <p>{conteudoHinos[0]?.titulo}</p>
            </div>

            <div className={styles.conteudoHino}>
                {conteudoHinos[0]?.letra.split("%").map((recebe: any, index: number) => { //as linhas vindas da api são delimitadas por % mas em uma única string, o split divide as linhas em Array, serapando-as pelo %, após cração do Array, usa-se o Map para o loop
                    return (<p key={index}>{recebe}</p>)
                })}
            </div>
        </article>
    )
}

export default memo(ReadContentHino)