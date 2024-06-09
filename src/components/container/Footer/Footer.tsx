import React from 'react';
import ImagePath from "@/helper/imagePath";
import Icon from "@/components/ui/Icon/Icon";
import Link from "next/link";
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footer__row}>
                    <Link href={'#'}>
                        <img src={ImagePath('logo.svg')} alt="#"/>
                    </Link>
                    <Link href="#" className={s.copyRight}>
                        Политика обработки <br /> персональных данных
                    </Link>
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
        </footer>
    );
};

export default Footer;
