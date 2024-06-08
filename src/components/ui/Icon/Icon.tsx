'use client';

import {FC} from 'react';
import cn from 'clsx';

export interface Props {
    name: string,
    width?: number,
    height?: number,
    classNames?: string
}

const Icon: FC<Props> = ({ name, width, height = width && width, classNames }) => {
    return (
        <svg className={cn(`${name}`, classNames)} width={width} height={height}>
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;
