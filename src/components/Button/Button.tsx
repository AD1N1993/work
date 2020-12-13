import React from "react";
import s from "./Button.module.scss"

type PropsType = {
    value: string
    mode: "big" | "mid" | "small"
}
export const Button = (props: PropsType) => {

    const size = () => {
        if (props.mode === "big") {
            return "12px 85px"
        } else if (props.mode === "mid") {
            return "12px 47px"
        } else {
            return "12px 30px"
        }
    }
    return (
        <a href={"#"} className={s.btn} style={{padding: size()}}>{props.value}</a>
    )
}