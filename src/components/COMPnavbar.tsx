import Image from 'next/image'
import { useState } from 'react'
import styles from '@/styles/navbar.module.css'
import ModalSelectLeitura from './COMPmodalSelectLeitura'
import Link from 'next/link'

export default function NavBar() {
    const [menu, setMenu] = useState<boolean>(false)
    const OpenMenu = () => setMenu(!menu)
    const [modal, setModal] = useState<boolean>(false)
    const OpenCloseModal = () => setModal(!modal)


    return (
        <>
            {modal && <ModalSelectLeitura OpenCloseModal={OpenCloseModal} />}

            <header className={styles.main}>

                <div className={styles.menuBotton} onClick={() => OpenMenu()}>
                    <Image
                        src="/images/iconsMenu/menuBotton.svg"
                        alt="Logo"
                        className={styles.imageButtonMenu}
                        width={70}
                        height={50}
                        priority
                    />
                </div>
                <div className={styles.menu} style={{ display: menu ? "block" : "none" }}>
                    <ul className={styles.menuIcons}>
                        <li>
                            <Link href="/">
                                <Image
                                    src="/images/iconsMenu/home.png"
                                    alt="Home"
                                    className={styles.imageMenu}
                                    width={80}
                                    height={60}
                                    priority
                                />
                            </Link>
                        </li>
                        <li onClick={OpenCloseModal}>
                            <Image
                                src="/images/iconsMenu/bible.png"
                                alt="biblia"
                                className={styles.imageMenu}
                                width={90}
                                height={60}
                                priority
                            />

                        </li>
                        <li>
                            <Link href={`/harpacrista/${Math.floor(Math.random() * (524 - 1 + 1)) + 1}`}>
                                <Image
                                    src="/images/iconsMenu/music.png"
                                    alt="biblia"
                                    className={styles.imageMenu}
                                    width={80}
                                    height={60}
                                    priority
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <Image
                                    src="/images/iconsMenu/about.png"
                                    alt="sobre"
                                    className={styles.imageMenu}
                                    width={80}
                                    height={60}
                                    priority
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contentLeft}>
                    <div><h1>FONTE DE VIDA on line</h1></div>
                    <div className={styles.imagediv} >
                        <Image
                            src="/images/menu/image.png"
                            alt="Logo"
                            className={styles.imagedivimage}
                            fill
                            priority
                        />
                    </div>
                </div>
                <div className={styles.searchMenu}>
                    <div>
                        <input className="no-outline" type="text" placeholder='PESQUISAR' name='Digite' />
                    </div>
                </div>
            </header>
        </>
    )
}
