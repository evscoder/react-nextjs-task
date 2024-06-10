import React, {useEffect} from 'react';
import cn from "clsx";
import s from "./SubscriptionPage.module.scss";
import UiButton from "@/components/ui/UiButton/UiButton";
import SubscriptionForm from "@/components/container/SubscriptionForm/SubscriptionForm";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

const SubscriptionPage = () => {
    const { success } = useSelector((state: RootState) => state.sliceSubscribe);

    return (
        <div className={cn(s.subscription)}>
            <div className={'container'}>
                {!success && <h1 className={'page-title'}>Оставьте заявку</h1>}
                <div className={s.subscriptionRow}>
                    {success ?
                        <div>
                            <h1 className={'page-title'}>Заявка отправлена!</h1>
                            <p className={s.text}>Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</p>
                            <UiButton color={'red'} link={true} href={'/'}>Вернуться на главную</UiButton>
                        </div>:
                        <SubscriptionForm />
                    }
                    <ul className={s.contacts}>
                        <li className={s.contacts__item}>
                            <small className={s.contacts__title}>Наша горячая линия</small>
                            <p className={s.contacts__value}><a href="tel:#">8 800 38 23 112</a></p>
                        </li>
                        <li className={s.contacts__item}>
                            <small className={s.contacts__title}>Главный офис</small>
                            <p className={s.contacts__value}>г. Москва, Садовническая ул., 80</p>
                        </li>
                        <li className={s.contacts__item}>
                            <small className={s.contacts__title}>Часы работы</small>
                            <p className={s.contacts__value}>Пн-Пт с 10:00 до 22:00</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPage;
