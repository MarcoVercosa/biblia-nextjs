import styles from "../styles/loading.module.css"

export default function Loading() {
    return (
        <article className={styles.loaderContainer}>
            {/* <div className={styles.loader}></div> */}
            <div className={styles.loaderContainerBalls}>
                <div className={styles.loaderContainerBallsBlobUm}></div>
                <div className={styles.loaderContainerBallsBlobDois}></div>
            </div>
        </article>


    )
}