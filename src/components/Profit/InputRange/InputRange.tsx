import React, {useState} from "react";
import s from "./InputRange.module.scss";
import {Range} from "react-range";

type InputRangePropsType = {
    label: string
    value: number[];
    valueModification: string
    step: number
    min: number
    max: number
    valueString?: boolean
    onChange: (values: number[]) => void
}

export const InputRange = (props: InputRangePropsType) => {

    const returnValueString = () => {
        if (props.value[0] === 1) {
            return "Низкие"
        } else if (props.value[0] === 2) {
            return "Средие"
        } else if (props.value[0] === 3) {
            return "Высокие"
        } else {
            return "Очень высокие"
        }
    }

    return (
        <>
            <label className={s.inputLabel}>
                {props.label}
                <input className={s.formInput} type="text"
                       value={props.valueString ? returnValueString() : `${props.value +" " + props.valueModification}`} disabled={true}/>
            </label>
            <Range
                step={props.step}
                min={props.min}
                max={props.max}
                values={props.value}
                onChange={(values) => props.onChange(values)}
                renderTrack={({props, children}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '1px',
                            width: '382px',
                            backgroundColor: 'rgba(25, 169, 255, 0.5)'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({props}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '7px',
                            width: '7px',
                            border: "5px solid #19a9ff",
                            backgroundColor: '#000',
                            borderRadius: "50%",
                            outline: "none"
                        }}
                    />
                )}
            />
        </>
    )
}