'use client';

import {FC} from 'react';
import Header from "@/components/container/Header/Header";
import Footer from "@/components/container/Footer/Footer";
import PageLayout from "@/components/PageLayout";
import SubscriptionPage from "@/components/container/SubscriptionPage/SubscriptionPage";

interface Props {}

const Subscription: FC<Props> = () => {
    return (
        <PageLayout header={<Header secondary={true} />} footer={<Footer />}>
            <SubscriptionPage />
        </PageLayout>
    );
};

export default Subscription;
