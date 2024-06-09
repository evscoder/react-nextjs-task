import React from 'react';
import imagePath from "@/helper/imagePath";
import s from './Frame.module.scss';
import cn from "clsx";
import Link from "next/link";
export interface FrameItemProps {
    primary?: boolean
    img: string
    title: string
    id?: string
}

const Frame: React.FC<FrameItemProps> = ({ primary, ...props }) => {
    return (
        <Link href={'#'} className={cn(s.frame, primary && s[`frame--top`])}>
            <img className={s.frame__img} src={imagePath(props.img)} alt={props.title}/>
        </Link>
    );
};

export default Frame;
