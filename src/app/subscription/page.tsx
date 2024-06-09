import {FC} from 'react';
import Header from "@/components/container/Header/Header";
import Footer from "@/components/container/Footer/Footer";
import PageLayout from "@/components/PageLayout";
import SubscriptionForm from "@/components/container/SubscriptionForm/SubscriptionForm";

interface Props {}

const Subscription: FC<Props> = () => {
    return (
        <PageLayout header={<Header />} footer={<Footer />}>
            <div className={'container'}>
                <h1 className={'page-title'}></h1>
                <div className={'subscription-row'}>
                    <SubscriptionForm />
                </div>
            </div>
        </PageLayout>
    );
};

export default Subscription;
