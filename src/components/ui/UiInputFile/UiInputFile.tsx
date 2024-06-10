'use client';
import React, {FC, useState} from 'react';
import styles from './UiInputFile.module.scss';
import cn from 'clsx';
import Icon from "@/components/ui/Icon/Icon";

interface Props {
    id: string,
    name: string,
    text: React.ReactNode
    className?: string,
    isResult: string
    showError: boolean,
    onChange: any
}

const UiInputFile: FC<Props> = ({ id, text, className, isResult, showError, ...props}) => {
    return (
        <div className={cn(styles['input-file'], className)}>
            <input {...props} className={styles['input-file__input']} type={'file'} id={id}/>
            <label htmlFor={id} aria-label={'Выберите файл'} className={styles['input-file__label']}>
                <span className={cn(styles['input-file__text'])}>
                    Прикрепите файл
                </span>
                <Icon name={'icon-paper-clip'} width={15}/>
            </label>
        </div>
    );
};

export default UiInputFile;
