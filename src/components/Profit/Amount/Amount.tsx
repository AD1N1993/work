import React from "react";
import s from "./Amount.module.scss";

type AmountPropsType = {
    title: string
    count: string
}

export const Amount = (props: AmountPropsType) => {

    return (
        <div className={s.amountWrapper}>
            <h6 className={s.amountTitle}>{props.title}</h6>
            <span className={s.amountCount}>{props.count}</span>
        </div>
    )
}