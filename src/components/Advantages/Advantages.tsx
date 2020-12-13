import React from "react";
import s from "./Advantages.module.scss"
import cs from "../../common/styles.module.scss"
import {Title} from "../Title/Title";
import calendar from "../../assets/img/calendar.svg"
import register from "../../assets/img/register.svg"
import support from "../../assets/img/support.svg"
import cards from "../../assets/img/cards.svg"
import protect from "../../assets/img/protect.svg"
import time from "../../assets/img/time.svg"
import rate from "../../assets/img/rate.svg"
import community from "../../assets/img/community.svg"
import {Advantage} from "./Advantage/Advantage";
import {Button} from "../Button/Button";


const advantagesData = [
    {
        id: 1,
        src: calendar,
        text: "Свободный график не выходя из дома",
    }, {
        id: 2,
        src: register,
        text: "Быстрая и бесплатная регистрация",
    }, {
        id: 3,
        src: support,
        text: "Бесплатная помощь в настройке аккаунта",
    }, {
        id: 4,
        src: cards,
        text: "Быстрые выплаты в любое время",
    }, {
        id: 5,
        src: protect,
        text: "Уникальные системы безопасности",
    }, {
        id: 6,
        src: time,
        text: "Квалифицированная помощь 24/7",
    }, {
        id: 7,
        src: rate,
        text: "Возможности продвижения моделей",
    }, {
        id: 8,
        src: community,
        text: "Аудитория более 2 млрд человек",
    },
]

export const Advantages = () => {
    return (
        <section className={s.advantages}>
            <div className={cs.container}>
                <Title value={"Наши преимущества"} mode={"black"}/>
                <div className={s.advantagesWrapper}>
                    {
                        advantagesData.map(i => <Advantage key={i.id} src={i.src} text={i.text}/>)
                    }
                </div>
                <Button value={"Начать карьеру модели"} mode={"small"}/>
            </div>

        </section>
    )
}