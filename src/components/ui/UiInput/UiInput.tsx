'use client';

import React, {forwardRef} from 'react';
import s from './UiInput.module.scss';
import cn from 'clsx';

export interface InputProps {
    className?: string,
    id?: string,
    name?: string,
    type?: string,
    placeholder?: string
    required?: boolean,
    disabled?: boolean,
    minLength?: number
    maxLength?: number
    value?: string
    readonly?: boolean
    onChange?: any
}

const UiInput = forwardRef<HTMLInputElement, InputProps>(({className, id, ...props}, inputElement) => {
    return (
        <input
            {...props}
            ref={inputElement}
            id={id}
            className={cn(s.input, className)}
        />
    );
});

UiInput.displayName = 'UiInput';
export default UiInput;
