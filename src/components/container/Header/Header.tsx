import React from 'react';
import imagePath from "@/helper/imagePath";
import UiButton from "@/components/ui/UiButton/UiButton";
import s from './Header.module.scss';
import cn from 'clsx';
import Link from "next/link";

interface Props {
    secondary?: boolean
}

const Header: React.FC<Props> = ({ secondary }) => {
    return (
        <header className={s.header}>
            <div className={cn(s.header, 'container')}>
                <div className={s.header__Row}>
                    <Link className={s.logo} href={'/'}>
                        <img className={s.logoImage} src={imagePath('logo.svg')} width={'130px'} height={'44px'} alt=""/>
                    </Link>
                    {!secondary &&
                        <UiButton color={'red'} outline={true} link={true} href={'/subscription'} classNames={s.header__btnRight}>
                            Подключить подписку
                        </UiButton>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
