import styles from '../styles/footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.footerfooter}>

            <ul className={styles.footerUl}>

                <li className={styles.Mavs}>
                    Developer by: MAVS
                </li>
                <li>
                    <p>&copy; 2022 - 2023</p>
                </li>
                <li>
                    <p>Todos os direitos reservados</p>
                </li>

            </ul>


        </footer>
    )

}