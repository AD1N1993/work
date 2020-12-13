import React from "react";
import s from "./Title.module.scss"
type PropsType = {
    value:string
    mode: "white" | "black"
}
export const Title = (props:PropsType) => {
    return (
        <h2 className={`${s.title} ${props.mode === "white" ? s.titleWhite : s.titleBlack}`}>{props.value}</h2>
    )
}