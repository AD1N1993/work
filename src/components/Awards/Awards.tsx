import React from "react";
import s from "./Awards.module.scss"
import cs from "../../common/styles.module.scss"
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";
import award2 from "../../assets/img/award2.svg";
import award3 from "../../assets/img/award3.svg";
import award4 from "../../assets/img/award4.svg";
import award5 from "../../assets/img/award5.svg";
import award6 from "../../assets/img/award6.svg";
import award7 from "../../assets/img/award7.svg";
import award9 from "../../assets/img/award9.svg"

const awards = [{id: 1, src: " "}, {id: 2, src: award2}, {id: 3, src: award3}, {id: 4, src: award4}, {
    id: 5,
    src: award5
},
    {id: 6, src: award6}, {id: 7, src: award7}, {id: 8, src: " "}, {id: 9, src: award9}]

export const Awards = () => {
    return (
        <section className={s.awards}>
            <div className={cs.container}>
                <Title value={"Наши награды"} mode={"white"}/>
                <h3 className={s.awardsSubTitle}>мы лудшие в своем деле!</h3>
                <div className={s.bgAwards}>
                    <div className={s.awardsWrapper}>
                        {
                            awards.map(a => {
                                return <div key={a.id} className={s.award}>
                                    {a.id === 1 || a.id === 8 ? <span></span> : <img src={a.src} alt=" "/>}
                                </div>
                            })
                        }
                    </div>

                </div>
                <Title value={"присоединяйся к нам"} mode={"white"}/>
                <h4 className={`${s.awardsSubTitle} ${s.awardsSubTitleMB}`}>и зарабатывайте прямо сейчас!</h4>
                <Button value={"Начать карьеру модели"} mode={"mid"}/>
                <span className={s.license}>© 2020 JOY2CAM Все права защищены</span>
            </div>
        </section>
    )
}