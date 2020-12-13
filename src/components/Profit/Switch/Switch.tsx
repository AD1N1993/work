import React from "react";
import s from "./Switch.module.scss";

type SwitchPropsType = {
    label: string
    mode: boolean
    onChange: (value: boolean) => void
}

export const Switch = (props: SwitchPropsType) => {

    return (
        <>
            <label className={s.inputLabel}>
                {props.label}
                <div>
                    <span className={`${s.btn} ${props.mode ? s.btnBlue : ""} ${s.btnBradiusLeft}`}
                          onClick={() => props.onChange(true)}>Да</span>
                    <span className={`${s.btn} ${!props.mode ? s.btnBlue : ""} ${s.btnBradiusRight}`}
                          onClick={() => props.onChange(false)}>Нет</span>
                </div>

            </label>
        </>
    )
}