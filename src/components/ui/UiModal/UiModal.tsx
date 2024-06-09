import React, {FC, useEffect, useState} from 'react';
import s from './UiModal.module.scss';
import cn from 'clsx';
import SimpleBar from 'simplebar-react';
import Icon from '../Icon/Icon';
import {createPortal} from 'react-dom';

interface Props {
    isShow: boolean,
    title?: React.ReactElement | string
    content?: React.ReactElement | string,
    footer?: React.ReactElement | string,
    classNames?: string,
    setClose: () => void
}

const UiModal: FC<Props> = ({ isShow, content, title, footer, classNames, setClose }) => {
    const [mounted, setMounted] = useState(false);
    const [active, setActive] = useState<boolean>(false);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    useEffect(() => {
        if (isShow) {
            setActive(true);
            setAnimate(true);
        } else {
            setAnimate(false);
            setTimeout(() => {
                setActive(false);
            }, 310);
        }
    }, [isShow]);

    return (
        mounted &&
        createPortal(
            <SimpleBar className={cn(s.modal, active && s[`is-active`], animate && s[`is-animate`], classNames)}>
                <div className={s.modal__overlay} onClick={setClose}></div>
                <div className={s.modal__wrap}>
                    <div className={s.modal__window}>
                        <div className={s.modal__content}>
                            <button className={s.modal__close} onClick={setClose}>
                                <Icon name={'icon-cross'} width={20} />
                            </button>
                            {title &&
                                <div className={s.modal__header}>
                                    <div className={s.modal__container}>
                                        <h3 className={s.modal__title}>{title}</h3>
                                    </div>
                                </div>
                            }
                            {content &&
                                <div className={s.modal__body}>
                                    <div className={s.modal__container}>
                                        { content }
                                    </div>
                                </div>
                            }
                            {footer &&
                                <div className={s.modal__footer}>
                                    <div className={s.modal__container}>
                                        { footer }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </SimpleBar>,
            document.getElementById('portals') as HTMLDivElement
        )
    );
};
export default UiModal;
