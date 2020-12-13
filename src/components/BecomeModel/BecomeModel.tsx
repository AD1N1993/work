import React from "react";
import s from "./BecomeModel.module.scss"
import cs from "../../common/styles.module.scss"
import {Title} from "../Title/Title";
import {Instruction} from "./Instruction/Instruction";
import {Button} from "../Button/Button";


const instrictions: Array<{ id: number, title: string, text: string }> = [
    {
        id: 1,
        title: "Просто начните стрим",
        text: "Без регистрации и задержек, вы просто заходите и начинаете стрим. Наши специалисты помогут вам и зарегистрируют всю необходимую информацию прямо во ремя вашего первого подключения."
    },
    {
        id: 2,
        title: "Возможности раскрутки для только что стартовавших",
        text: "У нас предусмотрена помощь начинающим моделям в виде дополнительной рекламы и показов. Что позволит модели освоиться и получить первых поклонников."
    },
    {
        id: 3,
        title: "легкий вывод в любой момент",
        text: "Мы позаботились о моделях и убрали все сложности с выводом денег. Теперь в любой момент вы можете вывести свою оплату, а также настроить автоматически вывод на любой подходящий вам способ."
    },
]
export const BecomeModel = () => {
    return (
        <section className={s.become}>
            <div className={cs.container}>
                <div className={s.becomeBg}>
                    <Title value={"Стать моделью легко"} mode={"black"}/>
                    <div className={s.instructionWrapper}>
                        {instrictions.map(i => <Instruction title={i.title} instruction={i.text} key={i.id}/>)}
                        <Button mode={"big"} value={"Начать карьеру модели"}/>
                    </div>
                </div>


            </div>
        </section>
    )
}