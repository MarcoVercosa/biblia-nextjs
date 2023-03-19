import { memo } from "react"
import styles from "../../styles/loading/loading.module.css"

function Loading(): JSX.Element {
    return (
        <article className={styles.article}>
            <div className={styles.loaderContainer}>
                {/* <div className={styles.loader}></div> */}
                <div className={styles.loaderContainerBalls}>
                    <div className={styles.loaderContainerBallsBlobUm}></div>
                    <div className={styles.loaderContainerBallsBlobDois}></div>
                </div>
            </div>
        </article>
    )
}

export default memo(Loading)