import React from 'react';
import s from './CardItem.module.scss';
import imagePath from "@/helper/imagePath";
import Link from "next/link";

export interface CardItemProps {
    id: string,
    title: string,
    caption: string,
    text: string,
    image: string
}

const CardItem: React.FC<CardItemProps> = ({ ...props }) => {
    return (
        <Link href={props.id} className={s.card}>
            <img className={s.cardImg} src={imagePath(props.image)} alt={props.title}/>
            <div className={s.card__contain}>
                <div className={s.cardTitle}>{ props.title }</div>
                <h3 className={s.cardCaption}> { props.caption }</h3>
                <p className={s.cardText}>{ props.text }</p>
            </div>
        </Link>
    );
};

export default CardItem;
