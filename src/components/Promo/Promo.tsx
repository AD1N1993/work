import React from "react";
import s from "./Promo.module.scss"
import cs from "../../common/styles.module.scss"
import {Button} from "../Button/Button";

export const Promo = () => {
    return (
        <section className={s.promo}>
            <div className={cs.container}>
                <div className={s.promoText}>
                    <span className={s.supTitle}>высокооплачиваемая</span>
                    <h1 className={s.promoTitle}>РАБОТА</h1>
                    <p className={s.subTitle}>Cо свободным графиком</p>
                    <Button mode={"mid"} value={"Начать карьеру модели"}/>
                </div>
            </div>

        </section>
    )
}