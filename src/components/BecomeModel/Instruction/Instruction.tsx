import React from "react";
import s from "./Instruction.module.scss"

type PropsType = {
    title: string
    instruction: string
}
export const Instruction = (props: PropsType) => {
    return (<div className={s.instructionWrapper}>
            <h4 className={s.instructionTitle}>{props.title}</h4>
            <p className={s.instructionText}>{props.instruction}</p>
        </div>
    )
}