'use client';

import 'swiper/css';
import 'simplebar-react/dist/simplebar.min.css';
import '../styles/app.scss';
import React, {FC} from 'react';
import Icons from "@/components/ui/Icon/Icons";
import {Provider} from "react-redux";
import {store} from "@/store";

interface Props {
    header?: React.ReactNode
    footer?: React.ReactNode
    children: React.ReactNode
}

const PageLayout: FC<Props> = ({ header, footer, children }) => {
    return (
        <Provider store={store}>
            <Icons />
            <div className={'page-wrapper'}>
                {header}
                <main className={'page-content'}>
                    {children}
                </main>
                {footer}
            </div>
            <div id={'portals'}></div>
        </Provider>
    );
};

export default PageLayout;
