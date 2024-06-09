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
    onClick?: any,
    props?: any
}

const UiInput = forwardRef<HTMLInputElement, InputProps>(({className, id, type, name, placeholder, required, disabled, minLength, maxLength, value, readonly, onClick, props}, inputElement) => {
    return (
        <input
            ref={inputElement}
            id={id}
            type={type}
            name={name}
            className={cn(s.input, className)}
            placeholder={placeholder}
            required={required && false}
            disabled={disabled && false}
            minLength={minLength}
            maxLength={maxLength}
            readOnly={readonly}
            value={value}
            onClick={onClick}
            {...props}
        />
    );
});

UiInput.displayName = 'UiInput';
export default UiInput;
