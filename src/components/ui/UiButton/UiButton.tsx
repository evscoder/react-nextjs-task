import React, {ChangeEvent, forwardRef, MouseEventHandler} from 'react';
import s from './UiButton.module.scss';
import cn from 'clsx';
import {Colors} from '@/types/types';
import Link from "next/link";

export interface ButtonProps {
    link?: boolean,
    href?: string,
    id?: string,
    title?: string,
    outline?: boolean,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | ChangeEvent<HTMLButtonElement> | undefined | any,
    children?: React.ReactNode,
    color: Colors,
    block?: boolean
    classNames?: string,
    type?: 'submit' | 'button'
}

const UiButton = forwardRef<HTMLButtonElement, ButtonProps>(({link, id, outline, children, color, block, classNames, ...props }, ref) => {
    const buttonClasses = cn(s.button, color && s[`button--${color}`], outline && s[`button--outline`], block && s[`button--block`], classNames);

    return (
        link ?
            <Link {...props} href={props.href as string} className={buttonClasses} role={props.type}>
                { children }
            </Link> :
            <button {...props} ref={ref} id={id} data-testid={id} className={buttonClasses} type={props.type}>
                { children }
            </button>
    );
});

UiButton.displayName = 'UiButton';
export default UiButton;
