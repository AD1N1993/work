import React from "react";
import s from "./Article.module.scss"


type ArticlePropsType = {
    title: string
    paragraphFirst:string
    paragraphSecond:string
}
export const Article = ({title, paragraphFirst,paragraphSecond}:ArticlePropsType) => {
    return (
        <div className={s.articleWrapper}>
            <h4 className={s.articleTitle}>{title}</h4>
            <div>
                <p className={s.articleText}>{paragraphFirst}</p>
                <p className={s.articleText}>{paragraphSecond}</p>
            </div>

        </div>

    )
}