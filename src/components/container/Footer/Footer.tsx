'use client';

import React, {useCallback, useState} from 'react';
import ImagePath from "@/helper/imagePath";
import Icon from "@/components/ui/Icon/Icon";
import Link from "next/link";
import s from './Footer.module.scss';
import PolicyModal from "@/components/container/PolicyModal/PolicyModal";

const Footer = () => {
    const [show, setShow] = useState(false);

    const onTogglePolicy = useCallback(() => {
        setShow(true);
    }, []);

    const onClosePolicy = useCallback(() => {
       setShow(false);
    }, []);

    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footer__row}>
                    <Link href={'/'}>
                        <img src={ImagePath('logo.svg')} alt="#"/>
                    </Link>
                    <button onClick={onTogglePolicy} className={s.copyRight} role={'button'}>
                        Политика обработки <br /> персональных данных
                    </button>
                    <div className={s.socialLinks}>
                        <a className={s.socialLinks__item}>
                            <Icon name={'icon-instagram'} width={32} />
                        </a>
                        <a className={s.socialLinks__item}>
                            <Icon name={'icon-facebook'} width={32} />
                        </a>
                        <a className={s.socialLinks__item}>
                            <Icon name={'icon-vk'} width={32} />
                        </a>
                    </div>
                </div>
            </div>
            <PolicyModal isShow={show} setClose={onClosePolicy} />
        </footer>
    );
};

export default Footer;
