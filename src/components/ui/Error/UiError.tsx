import React from 'react';
import s from './UiError.module.scss';
import cn from "clsx";

interface Props {
    className?: string,
    children: React.ReactNode
}

const UiError: React.FC<Props> = ({ className, children }) => {
    return <div className={cn(s.error)}>{children}</div>;
};

export default UiError;
