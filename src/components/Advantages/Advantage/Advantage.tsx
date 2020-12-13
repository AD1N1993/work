import React from "react";
import s from "./Advantage.module.scss"

type AdvantagePropsType = {
    src:string
    text:string
}

export const Advantage = ({src,text}:AdvantagePropsType) => {
    return (
        <div className={s.advantageWrapper}>
            <div className={s.advantageImgWrapper}>
                <img src={src} alt={text}/>
            </div>
            <span className={s.advantageText}>{text}</span>
        </div>
    )
}