'use client';
import React, {FC, useState} from 'react';
import styles from './UiInputFile.module.scss';
import cn from 'clsx';
import Icon from "@/components/ui/Icon/Icon";

interface Props {
    id: string,
    name: string,
    text: React.ReactNode
    className?: string
}

const UiInputFile: FC<Props> = ({ id, name, text, className}) => {
    const [isResult, setIsResult] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);

    const onChangeFile = (event: any) => {
        const files = event.target.files[0];

        if (files) {
            const { size, name } = files;

            setShowError(false);

            if (size >= 33554432) {
                setShowError(true);

                return;
            }

            setIsResult(name);
        }
    };

    return (
        <div className={cn(styles['input-file'], className)}>
            <input className={styles['input-file__input']} type={'file'} id={id} name={name} onChange={onChangeFile}/>
            {isResult !== '' &&
                <p className={cn(styles['input-file__text'])}>
                    {text}
                    {isResult !== '' && <span>{ isResult }</span>}
                </p>
            }
            {showError &&
                <p className={cn(styles['input-file__text'], styles['input-file__text--error'])}>Слишком большой файл</p>
            }
            <label htmlFor={id} aria-label={'Выберите файл'} className={styles['input-file__label']}>
                <Icon name={'icon-paper-clip'} width={15}/>
            </label>
        </div>
    );
};

export default UiInputFile;
