import React, {useState} from "react";
import s from "./Profit.module.scss"
import cs from "../../common/styles.module.scss"
import {Button} from "../Button/Button";
import {Title} from "../Title/Title";
import {InputRange} from "./InputRange/InputRange";
import {Switch} from "./Switch/Switch";
import {Amount} from "./Amount/Amount";

export const Profit = () => {
    const [experience, setExperience] = useState([0])
    const [hours, setHours] = useState([10])
    const [skills, setSkills] = useState([1])
    const [btnMode, setBtnMode] = useState(true)

    return (
        <section className={s.profit}>
            <div className={cs.container}>
                <Title value={"сколько вы заработаете?"} mode={"white"}/>
                <form className={s.profitForm}>
                    <div className={s.profitFormBox}>
                        <InputRange label={"Ваш опыт работы моделью?"}
                                    value={experience} valueModification={"мес."}
                                    onChange={setExperience}
                                    step={1}
                                    min={0}
                                    max={12}

                        />
                    </div>
                    <div className={s.profitFormBox}>
                        <InputRange label={"Сколько часов вы планируете работать?"}
                                    value={hours} valueModification={"часов в неделю"}
                                    onChange={setHours}
                                    step={10}
                                    min={10}
                                    max={60}
                        />

                    </div>
                    <div className={s.profitFormBox}>
                        <Switch label={"Умеете ли вы завлечь аудиторию?"} mode={btnMode} onChange={setBtnMode}/>
                    </div>
                    <div className={s.profitFormBox}>
                        <InputRange label={"Ваши навыки работы с компьютером"}
                                    value={skills} valueModification={"Средние"}
                                    onChange={setSkills}
                                    step={1}
                                    min={1}
                                    max={4}
                                    valueString={true}
                        />
                    </div>
                </form>
                <div className={s.profitAmount}>
                    <Amount title={"В сутки"} count={"10 000 ₽"}/>
                    <Amount title={"В неделю"} count={"50 000 ₽"}/>
                    <Amount title={"В месяц"} count={"100 000 ₽"}/>
                </div>

                <Button value={"Начать карьеру модели"} mode={"small"}/>
            </div>

        </section>
    )
}