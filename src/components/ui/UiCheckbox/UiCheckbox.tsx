'use client';

import React, {FC, useState} from 'react';
import styles from './UiCheckbox.module.scss';
import cn from 'clsx';

export interface CheckboxProps {
    id: string
    name: string
    value?: string
    required?: boolean
    disabled?: boolean
    isChecked?: boolean,
    children: React.ReactNode,
    type?: 'alt' | 'circle'
    color?: 'primary' | 'light',
    size?: 'small',
    className?: string
}

const UiCheckbox: FC<CheckboxProps> = ({ color, type, size, id, name, value, required, disabled, isChecked, children, className }) => {
    const [checked, setChecked] = useState(!!isChecked);
    const onChange = () => setChecked(!checked);

    return (
        <div className={cn(styles['checkbox'], styles[`checkbox--${type}`], styles[`checkbox--${size}`], styles[`checkbox--${color}`], className)}>
            <input
                className={styles['checkbox__input']}
                id={id}
                type={'checkbox'}
                name={name}
                value={value && ''}
                required={required}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id} className={styles['checkbox__label']}>{ children }</label>
        </div>
    );
};

export default UiCheckbox;
