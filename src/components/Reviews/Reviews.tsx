import React from "react";
import s from "./Reviews.module.scss"
import cs from "../../common/styles.module.scss"
import {Title} from "../Title/Title";
import anna from "../../assets/img/anna.png"
import veronika from "../../assets/img/veronika.png"
import julia from "../../assets/img/julia.png"
import {Review} from "./Review/Review";


const reviews: { id: number, name: string, src: string, review: string }[] = [
    {
        id: 1,
        src: anna,
        name: "Аня и Света",
        review: "Это самая лучшая работа, которую можно представить. Я имею стабильный доход за 2 часа в день и не сижу целый день в офисе."
    }, {
        id: 2,
        src: veronika,
        name: "вероника",
        review: "Я не знала как к этому отнесутся мои друзья и родственники, но они приняли меня такой, ведь я занимаюсь любимым делом - а это самое главное."
    }, {
        id: 3,
        src: julia,
        name: "Юлия",
        review: "Этот проект изменил мою жизнь, я и до этого работала моделью, но защита, удобство работы и уровень выплат здесь затмил все остальные платформы."
    },
]

export const Reviews = () => {
    return (
        <section className={s.reviews}>
            <div className={cs.container}>
                <div className={s.bgReviews}>
                    <div className={s.reviewsTitleContainer}>
                        <Title value={"Посмотрите отзывы работающих моделей!"} mode={"black"}/>
                    </div>

                    <div className={s.cardsReviews}>
                        {reviews.map(i=> <Review key={i.id} src={i.src} name={i.name} review={i.review}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}