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
}

const UiCheckbox: FC<CheckboxProps> = ({ isChecked, children, className,...props }) => {
    const [checked, setChecked] = useState(!!isChecked);
    const onChange = () => setChecked(!checked);

    return (
        <div className={cn(s.checkbox, className)}>
            <input
                className={s.checkbox__input}
                id={props.id}
                type={'checkbox'}
                name={props.name}
                value={props.value && ''}
                required={props.required}
                disabled={props.disabled}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={props.id} className={s.checkbox__label}>{ children }</label>
        </div>
    );
};

export default UiCheckbox;
