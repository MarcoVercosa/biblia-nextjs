import Image from 'next/image'
import { memo, useEffect, useRef, useState } from 'react'
import styles from '@/styles/navbar/navbar.module.css'
import ModalSelectLeitura from './COMPmodalSelectLeitura'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar(): JSX.Element {
    const [menu, setMenu] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const inputSearchRef = useRef<HTMLInputElement>()
    const menuRefClickOutSide: any = useRef()
    const OpenMenu = () => setMenu(!menu)
    const OpenCloseModal = () => setModal(!modal)
    const router = useRouter()

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (menu && menuRefClickOutSide.current && !menuRefClickOutSide.current.contains(e.target)) {
                setMenu(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [menu])

    function GoSearchByWord(value: string) {
        if (value != "Enter") { return }
        let word = inputSearchRef.current?.value as string
        if (word.length < 2 || word.length > 15) { return alert("Caracteres: min 2 e max 15") }
        router.push(`/pesquisabiblia/${word}`)
    }

    return (
        <>
            {modal && <ModalSelectLeitura OpenCloseModal={OpenCloseModal} />}

            <header className={styles.main} ref={menuRefClickOutSide} >

                <div className={styles.menuBotton} onClick={() => OpenMenu()}>
                    <Image
                        src={menu ? "/images/iconsMenu/closeMenu.png" : "/images/iconsMenu/openMenu.png"}
                        alt="menu"
                        className={styles.imageButtonMenu}
                        width={70}
                        height={50}
                        priority
                    />
                </div>
                <div className={styles.menu} style={{ display: menu ? "block" : "none" }} onClick={() => OpenMenu()}>
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
                            <Link href="/favoritos">
                                <Image
                                    src="/images/iconsMenu/favorite.png"
                                    alt="favoritos"
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
                            alt="Logoleaodejuda"
                            className={styles.imagedivimage}
                            fill
                            priority
                        />
                    </div>
                </div>
                <div className={styles.searchMenu}>
                    <input type="text" name='Digite' ref={inputSearchRef as any} minLength={2} maxLength={15} placeholder='Press enter to search' onKeyDown={(evt) => { GoSearchByWord(evt.key) }} ></input>

                </div>
            </header>
        </>
    )
}
export default memo(NavBar)
