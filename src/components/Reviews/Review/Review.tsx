import React from "react";
import s from "./Review.module.scss"

type ReviewPropsType = {
    src:string
    name:string
    review:string
}

export const Review = ({name,review,src}:ReviewPropsType) => {
    return (
        <div className={s.reviewWrapper}>
            <div className={s.reviewImgWrapper}>
                <img src={src} alt={name}/>
            </div>
            <h4 className={s.reviewName}>{name}</h4>
            <p className={s.review}>{review}</p>
        </div>
    )
}