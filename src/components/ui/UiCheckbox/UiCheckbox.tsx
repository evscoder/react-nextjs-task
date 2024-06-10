'use client';

import React, {FC, useState} from 'react';
import s from './UiCheckbox.module.scss';
import cn from 'clsx';

export interface CheckboxProps {
    id: string
    name: string
    value?: string
    required?: boolean
    disabled?: boolean
    isChecked?: boolean,
    children: React.ReactNode,
    className?: string
    onChange?: any
}

const UiCheckbox: FC<CheckboxProps> = ({ isChecked, children, className,...props }) => {
    return (
        <div className={cn(s.checkbox, className)}>
            <input
                {...props}
                className={s.checkbox__input}
                id={props.id}
                type={'checkbox'}
            />
            <label htmlFor={props.id} className={s.checkbox__label}>{ children }</label>
        </div>
    );
};

export default UiCheckbox;
