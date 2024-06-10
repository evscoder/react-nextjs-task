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
    onChange: any
    value: string
}

const UiTextarea: FC<TextareaProps> = ({ className, id, ...props}) => {
    return (
        <div className={cn(s['textarea'])}>
            <textarea
                {...props}
                id={id}
                className={cn(s['textarea__input'], className)}
            />
        </div>
    );
};

export default UiTextarea;
