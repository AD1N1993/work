import React from "react";
import s from "./Join.module.scss"
import cs from "../../common/styles.module.scss"
import {Title} from "../Title/Title";
import {Button} from "../Button/Button";

export const Join = () => {
    return (
        <section className={s.join}>
            <div className={cs.container}>
                <div className={s.bgJoin}>
                    <Title value={"присоединяйся к нам"} mode={"white"}/>
                    <h3 className={s.joinSubTitle}>и зарабатывайте прямо сейчас!</h3>
                    <Button value={"Начать карьеру модели"} mode={"mid"}/>
                </div>
            </div>
        </section>
    )
}