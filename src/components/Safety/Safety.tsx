import React from "react";
import s from "./Safety.module.scss"
import cs from "../../common/styles.module.scss"
import {Title} from "../Title/Title";
import {Article} from "./Article/Article";
import safetyBg from "../../assets/img/SafetyBg.png"

export const Safety = () => {
    return (
        <section className={s.safety}>
            <div className={cs.container}>
                <Title value={"нам важна ваша безопасность"} mode={"black"}/>
                <div className={s.safetyWrapper}>
                    <div className={s.safetyTexts}>
                        <Article title={"Система аватар"}
                                 paragraphFirst={"Мы разработали уникальную систему защиты ваших личных данных. Больше никто не сможет узнать вас на улице - если вы этого не захотите."}
                                 paragraphSecond={"Наши алгоритмы позволяют наложить на образ модели уникальный аватар, скрывающий ее личность. Теперь в жизни вы один человек, а в интеренете другой."}
                        />
                        <Article title={"Защита DMCA"}
                                 paragraphFirst={" Вы можете сообщить нам о любом таком случае и наши юристы сдеают все, чтобы любая информация о вас  была удалена с просторов интернета."}
                                 paragraphSecond={" Вы можете сообщить нам о любом таком случае и наши юристы сдеают все, чтобы любая информация о вас  была удалена с просторов интернета."}/>
                    </div>
                    <div className={s.safetyImg}>
                        <span className={s.box}></span>
                        <img src={safetyBg} alt="oops"/>
                    </div>
                </div>

            </div>

        </section>
    )
}