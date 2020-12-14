import React, {useState} from "react";
import logo from "../../assets/img/logo.svg"
import icoLogOut from "../../assets/img/icoLogOut.svg"
import ru from "../../assets/img/ru.svg"
import cs from "../../common/styles.module.scss"
import s from "./Header.module.scss"

export const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <header className={s.header}>
            <div className={cs.container}>
                <div className={s.headerWrapper}>
                    <div className={`${s.burgerMenu} ${isOpen ? s.btnClose:""}`} onClick={()=>setIsOpen(!isOpen)}>
                        <div className={`${s.hambergerIcon} ${isOpen ? s.open:""}`}>
                        </div>
                    </div>
                    <a href={"#"} className={s.logoWrapper}>
                        <img className={s.logo} src={logo} alt="JOY2CAM"/>
                    </a>

                    <nav className={`${s.nav} ${isOpen ? s.openNav:""}`}>
                        <ul className={`${s.navList} `}>
                            <li className={s.navListItem}><a className={s.navListLink} href="#">Как это работает</a>
                            </li>
                            <li className={s.navListItem}><a className={s.navListLink} href="#">Ваш заработок</a></li>
                            <li className={s.navListItem}><a className={s.navListLink} href="#">Ваша безопасность</a>
                            </li>
                            <li className={s.navListItem}><a className={s.navListLink} href="#">Расказы моделей</a></li>
                            <li className={s.navListItem}><a className={s.navListLink} href="#">О нас</a></li>
                            <li className={s.navListItem}><a className={s.navListLink} href="#">Стать моделью</a></li>
                        </ul>
                    </nav>
                    <div className={s.btnGroup}>
                        <img src={ru} alt="RU"/>
                        <button className={s.logOut}>
                            <img src={icoLogOut} alt="logout"/>
                        </button>
                    </div>
                </div>

            </div>
        </header>
    )
}