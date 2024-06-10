import {FC} from 'react';
import Header from "@/components/container/Header/Header";
import Footer from "@/components/container/Footer/Footer";
import PageLayout from "@/components/PageLayout";
import SubscriptionForm from "@/components/container/SubscriptionForm/SubscriptionForm";
import s from './page.module.scss';
import cn from "clsx";

interface Props {}

const Subscription: FC<Props> = () => {
    return (
        <PageLayout header={<Header secondary={true} />} footer={<Footer />}>
            <div className={cn(s.subscription)}>
                <div className={'container'}>
                    <h1 className={'page-title'}></h1>
                    <div className={s.subscriptionRow}>
                        <SubscriptionForm />
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
        </PageLayout>
    );
};

export default Subscription;
