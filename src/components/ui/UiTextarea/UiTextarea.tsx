import React, {FC} from 'react';
import cn from 'clsx';
import s from './UiTextarea.module.scss';

export interface TextareaProps {
    className?: string,
    id?: string,
    name?: string,
    type?: string,
    placeholder?: string
    required?: boolean,
    disabled?: boolean,
    minLength?: number
    value?: string
}

const UiTextarea: FC<TextareaProps> = ({ className, id, name, placeholder, required, disabled, value}) => {
    return (
        <div className={cn(s['textarea'])}>
            <textarea
                id={id}
                name={name}
                className={cn(s['textarea__input'], className)}
                placeholder={placeholder}
                required={required && false}
                disabled={disabled && false}
            >
                {value}
            </textarea>
        </div>
    );
};

export default UiTextarea;
