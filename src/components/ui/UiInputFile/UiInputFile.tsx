'use client';
import React from 'react';
import styles from './UiInputFile.module.scss';
import cn from 'clsx';
import Icon from "@/components/ui/Icon/Icon";

export interface InputFileProps {
    id: string,
    name: string,
    className?: string,
    showError: boolean,
    isResult: string,
    onChange: any
}

const UiInputFile: React.FC<InputFileProps> = ({ className, showError, isResult, ...props}) => {

    return (
        <div className={cn(styles['input-file'], className)}>
            <input {...props} className={styles['input-file__input']} type={'file'}/>
            <label htmlFor={props.id} aria-label={'Выберите файл'} className={styles['input-file__label']}>
                {!showError ?
                    <span className={cn(styles['input-file__text'])}>
                        {isResult === '' ? 'Прикрепите файл' : isResult}
                    </span> :
                    <span className={'error'}>Слишком большой файл</span>
                }
                <Icon name={'icon-paper-clip'} width={15}/>
            </label>
        </div>
    );
};

export default UiInputFile;
